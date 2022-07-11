import Sidebar from "../Sidebar";
import Navbar from "../Navbar";
import Widget from "../Widget";
import List from "../ProductList";
import Featured from "../Featured";
import Chart from "../Chart";


import "./index.css";


const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />        
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className="charts">
          <Featured />
          <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Updates</div>
          <List />
        
        </div>
      </div>
    </div>
  );
};

export default Home;