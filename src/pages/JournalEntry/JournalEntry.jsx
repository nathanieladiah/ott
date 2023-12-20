import { Fab } from "@mui/material";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { MdEdit, MdOutlineClose, MdOutlineSave } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import { db } from "../../firebase.config";
import "./journalEntry.scss";

const JournalEntry = () => {
  const [entry, setEntry] = useState(null);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    const fetchEntry = async () => {
      const docRef = doc(db, "journal", params.entryId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setEntry(docSnap.data());
        setLoading(false);
      }
    };

    fetchEntry();
  }, [navigate, params.entryId]);

  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <div className="journalPage">
      <div className="journalPage__header container">
        <MdOutlineSave />
        {/* <h1>October 16, 2023</h1> */}
        <h1>{entry.timestamp.toDate().toDateString()}</h1>
        <MdOutlineClose onClick={() => navigate("/journal")} />
      </div>
      <div className="journalPage__content">
        <p>{entry.content}</p>
      </div>
      <Fab className="fab" aria-label="edit">
        <MdEdit className="fab-icon" />
      </Fab>
    </div>
  );
};
export default JournalEntry;
