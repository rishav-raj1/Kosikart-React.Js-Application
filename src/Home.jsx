import React from "react";
import './Home.css';
import './Sidebar.css';
import Sidebar from './Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Overview from './pages/Overview';
import { Reports, ReportsOne, ReportsTwo, ReportsThree } from './pages/Reports';
import Team from './pages/Team';
import Imageslider from "./Imageslider";
import Maincard from "./Maincard";


const Home = () => {
  return (
    <>

    <Router>
      <Sidebar />
      <Switch>
        <Route path='/overview' exact component={Overview} />
        <Route path='/reports' exact component={Reports} />
        <Route path='/reports/reports1' exact component={ReportsOne} />
        <Route path='/reports/reports2' exact component={ReportsTwo} />
        <Route path='/reports/reports3' exact component={ReportsThree} />
        <Route path='/team' exact component={Team} />
      </Switch>
    </Router>

    <Imageslider />

   {/* <div className="lol">
    <img
      className="secondhead"
      src="https://wallpapercave.com/wp/wp1917119.jpg"
      alt="lol"
      />
      </div>*/}

      <Maincard />

      
    



    
    </>
  );
}

export default Home;
