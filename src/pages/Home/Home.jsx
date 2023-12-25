import AppContainer from "../../components/AppContainer/AppContainer";
import Time from "../../components/Time/Time";

const Home = () => {
  return (
    <div className="content-container">
      <Time />
      <AppContainer />
      {/* <h2 className="love-message">I love you Ashaki</h2> */}
    </div>
  );
};
export default Home;
