import { MdOutlineAccountCircle, MdOutlineSearch } from "react-icons/md";

import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import DateGroup from "../../components/DateGroup/DateGroup";
import { db } from "../../firebase.config";
import "./journal.scss";

const Journal = () => {
  const [dates, setDates] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDateGroups = async () => {
      try {
        const dateGroupsRef = collection(db, "journalDates");
        const q = query(dateGroupsRef, orderBy("date", "desc"));
        const querySnap = await getDocs(q);

        const dates = [];

        querySnap.forEach((doc) => {
          return dates.push({
            id: doc.id,
            data: doc.data(),
          });
        });

        setDates(dates);
        setLoading(false);
      } catch (error) {
        console.error("Unable to fetch date groupings");
      }
    };

    fetchDateGroups();
  }, []);

  return (
    <div className="journal">
      <div className="journal__header container">
        <div className="journal__search">
          <MdOutlineSearch />
          <span>Search</span>
          <MdOutlineAccountCircle />
        </div>
      </div>
      <div className="journal__entries">
        {loading ? (
          <p>Loading...</p>
        ) : (
          dates.map((date) => (
            <DateGroup
              key={date.id}
              dateString={date.data.dateString}
              journalEntries={date.data.journalEntries}
            />
          ))
        )}
      </div>
    </div>
  );
};
export default Journal;
