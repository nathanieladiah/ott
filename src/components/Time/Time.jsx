import "./time.scss";

// const Time = () => {
//   const [value, setValue] = useState(new Date());

//   //   useEffect(() => {
//   //     const interval = setInterval(() => setValue(new Date()), 60000);

//   //     return () => {
//   //       clearInterval(interval);
//   //     };
//   //   }, []);

//   return (
//     <div className="time-widget">
//       <Clock live={true} hourMarkFormat="number" />
//       <Calendar value={value} onChange={(d) => setValue(d)} />
//     </div>
//   );
// };

const Time = () => {
  return <div className="time-widget"></div>;
};

export default Time;
