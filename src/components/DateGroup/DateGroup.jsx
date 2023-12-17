import { doc, getDoc } from "firebase/firestore";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { db } from "../../firebase.config";
import Entry from "../Entry/Entry";

const DateGroup = ({ dateString, journalEntries }) => {
  const [entries, setEntries] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEntries = async () => {
      try {
        // for (entry in journalEntries) {
        // 	const docSnap = await
        // }
        const entries = [];

        await Promise.all(
          journalEntries.map(async (entry) => {
            const docRef = doc(db, "journal", entry);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
              //   console.log("Document data:", docSnap.data());
              entries.push({
                id: docSnap.id,
                data: docSnap.data(),
              });
            } else {
              console.log("no such document");
            }
          })
        );

        setEntries(entries);
        setLoading(false);
      } catch (error) {
        console.error("Could not fetch journal entry");
      }
    };

    fetchEntries();
  }, [journalEntries]);

  return (
    <div className="container">
      <div className="journal__date-wrapper">
        <h2>{dateString}</h2>
        <hr />
      </div>
      <div className="journal__entries-container">
        {loading ? (
          <p>Loading...</p>
        ) : (
          entries.map((entry) => (
            <Entry
              key={entry.id}
              text={entry.data.preview}
              // time={entry.data.timestamp.toDate().toDateString()}
              time={entry.data.timestamp.toDate().toLocaleTimeString()}
              id={entry.id}
            />
          ))
        )}
      </div>
    </div>
  );
};

DateGroup.propTypes = {
  dateString: PropTypes.string,
  journalEntries: PropTypes.array,
};
export default DateGroup;
