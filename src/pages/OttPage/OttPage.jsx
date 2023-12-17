import { add, daysToWeeks, formatDistanceToNowStrict } from "date-fns";
import { useEffect, useState } from "react";
import "./ott.scss";

const OttPage = () => {
  const [timeDifference, setTimeDifference] = useState({});
  const [days, setDays] = useState("");
  const [weeks, setWeeks] = useState("");
  const [months, setMonths] = useState("");

  useEffect(() => {
    const extractInteger = (dateString) => {
      // Extract integer from a string that trails non-digit characters
      return +dateString.replace(/\D+$/g, "");
    };

    const customDistanceToNow = (date, unit, roundingMethod) => {
      // Extract only the integer from the formatDistanceToKnow output string
      return extractInteger(
        formatDistanceToNowStrict(date, {
          unit: unit,
          roundingMethod: roundingMethod,
        })
      );
    };
    const anniversaryDate = new Date("2022-10-28T00:00");

    const timeDelta = () => {
      // Get the time difference from anniversaryDate to now in years, months and days

      // The number of total years
      const years = customDistanceToNow(anniversaryDate, "year", "floor");

      // the number of total months from anniversaryDate to now
      const totalMonths = customDistanceToNow(
        anniversaryDate,
        "month",
        "floor"
      );

      // The number of total Months that occur after the completed years
      const months = totalMonths - years * 12;

      // Get the amount of days from (anniversary date + years + months) to now...
      const datePlusYearsAndMonths = add(anniversaryDate, {
        years: years,
        months: months,
      });

      const days = customDistanceToNow(datePlusYearsAndMonths, "day", "floor");

      setTimeDifference({ years, months, days });
    };

    timeDelta();

    setMonths(
      formatDistanceToNowStrict(anniversaryDate, {
        unit: "month",
        roundingMethod: "round",
      })
    );

    const days = formatDistanceToNowStrict(anniversaryDate, {
      unit: "day",
      roundingMethod: "floor",
    });

    setDays(days);

    setWeeks(`${daysToWeeks(extractInteger(days))} weeks`);
  }, []);

  return (
    <section className="ott">
      <h1 className="ott__title">Ashaki & Nathaniel</h1>

      <div className="ott__image-container">
        <div className="ott__image"></div>
        <div className="ott__image-text">October 28, 2022</div>
      </div>

      <div className="ott__stats">
        <h2 className="ott__stats-title">You have been together for</h2>
        <p className="ott__stats-info">
          {timeDifference.years} year{timeDifference.years > 1 ? "s" : ""}
          {timeDifference.months > 0 ? `, ${timeDifference.months} months` : ""}
          {timeDifference.days > 0 ? ` and ${timeDifference.days} days` : ""}
        </p>
      </div>

      <div className="ott__stats">
        <h2 className="ott__stats-title">In other words</h2>
        <p className="ott__stats-info ott__stats-info--months">{months}</p>
        <p className="ott__stats-info ott__stats-info--weeks">or {weeks}</p>
        <p className="ott__stats-info ott__stats-info--days">or {days}</p>
      </div>
    </section>
  );
};
export default OttPage;
