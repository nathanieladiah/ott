import { format } from "date-fns";
import {
  addDoc,
  collection,
  doc,
  getDocs,
  query,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { useState } from "react";
import { MdOutlineClose, MdOutlineSave } from "react-icons/md";
import { auth, db } from "../../firebase.config";
import "./newJournalEntry.scss";

const NewJournalEntry = () => {
  const [text, setText] = useState("");
  const { uid } = auth.currentUser;

  const today = new Date();
  // Format the current date into the form: Monday, October 16 2023
  // So it can be compared with the database
  const todayString = format(today, "EEEE, MMMM d yyyy");

  const onSubmit = async () => {
    // Create the new journal entry with the data from the text box and current date
    // And store the id of the new document in docRef.id
    const entryData = {
      userRef: uid,
      content: text,
      preview: text.length > 78 ? `${text.substring(0, 78)}...` : text, // Add a shortened preview if text is too long
      timestamp: serverTimestamp(),
    };

    const docRef = await addDoc(collection(db, "journal"), entryData);
    console.log(docRef.id);

    // Get the list of all stored journalDates
    try {
      const dateGroupsRef = collection(db, "journalDates");
      const q = query(dateGroupsRef);
      const querySnap = await getDocs(q);

      const dates = [];

      querySnap.forEach((doc) => {
        return dates.push({
          id: doc.id,
          data: doc.data(),
        });
      });

      // Set up a dictionary to store data if there is a matching date existing already
      const currentDate = {
        match: false,
        id: null,
        entries: [],
      };

      //   Compare each date in the database with the actual date..
      dates.forEach((date) => {
        console.log(date.data.dateString);
        if (date.data.dateString === todayString) {
          currentDate.match = true;
          currentDate.id = date.id;
          currentDate.entries = date.data.journalEntries;
        }
      });

      // If there isn't a group in the database already, create one
      // And add the newly created entry to it.
      if (!currentDate.match) {
        const journalDate = {
          date: serverTimestamp(),
          dateString: todayString,
          journalEntries: [docRef.id],
        };

        await addDoc(collection(db, "journalDates"), journalDate);
      } else {
        // Add the docRef.id to the matching dateRef
        // Update the corresponding dateGroup...
        await updateDoc(doc(db, "journalDates", currentDate.id), {
          journalEntries: [...currentDate.entries, docRef.id],
        });
      }
    } catch (error) {
      console.error("Something went wrong");
    }
  };

  return (
    <div className="journalPage">
      <div className="journalPage__header container">
        <MdOutlineSave onClick={onSubmit} />
        {/* <h1>October 16, 2023</h1> */}
        <h1>{todayString}</h1>
        {/* {date.toDateString()} */}
        <MdOutlineClose />
      </div>
      <div className="journalPage__content">
        <textarea
          name=""
          id=""
          placeholder="How was your day?"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
      </div>
    </div>
  );
};
export default NewJournalEntry;
