import { Fab } from "@mui/material";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { MdOutlineClose, MdOutlineSave } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import { auth, db } from "../../firebase.config";

const UpdateJournalEntry = () => {
  const [entry, setEntry] = useState(null);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(true);

  const { uid } = auth.currentUser;

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEntry = async () => {
      const docRef = doc(db, "journal", params.entryId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setEntry(docSnap.data());
        setText(docSnap.data().content);
        setLoading(false);
      }
    };

    fetchEntry();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.entryId]);

  const onSubmit = async () => {
    // Check if user is the owner of entry first
    if (entry.userRef === uid) {
      await updateDoc(doc(db, "journal", params.entryId), {
        content: text,
        preview: text.length > 78 ? `${text.substring(0, 78)}...` : text, // Add a shortened preview if text is too long
      });
      navigate(`/journal/${params.entryId}`);
    } else {
      console.log("You do not have permission");
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="journalPage">
      <div className="journalPage__header container">
        <MdOutlineSave onClick={onSubmit} />
        <h1>{entry.timestamp.toDate().toDateString()}</h1>
        <MdOutlineClose
          onClick={() => navigate(`/journal/${params.entryId}`)}
        />
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
      <Fab className="fab" onClick={onSubmit}>
        <MdOutlineSave className="fab-icon" />
      </Fab>
    </div>
  );
};
export default UpdateJournalEntry;
