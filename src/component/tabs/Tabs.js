import React from 'react';
import './Tabs.css';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Cards from '../cards/Cards';
import Cardsp from '../cards/Cardsp';
import { ongoingProjectsData } from '../../constant/MockData';
import { completedProjects ,readyToMoveData} from '../../constant/MockData';


const GeneralTabs = () => {

  return (
    <Tabs
      defaultActiveKey="ongoing"
      id="fill-tab-example"
      className="for-project"
      fill
    >
      <Tab eventKey="ongoing" title="Ongoing-Projects">
        <Cardsp data={ongoingProjectsData} />
      </Tab>
      <Tab eventKey="sale" title="Plot For Sale">
        <div> <div className="text-center">
        <hr />
          <h4 style={{color:'#003b4b'}} className="head">Shree Ram Vatika</h4>
           <span>Location Advantage ...</span>
           <hr />
           <div className='pfs'>
            <p>1.50 km from Hindustani Dhaba</p>
            <p>2.30 km from Gandhi Nagar Chowk</p>
            <img src="assets/images/plots.jpeg" alt="" />
           </div>
        </div></div>
      </Tab>
      <Tab eventKey="ready" title="Ready To Move">
      <Cards data={readyToMoveData} />
      </Tab>
      <Tab eventKey="sold" title="Completed Projects">
      <Cards data={completedProjects} />
      </Tab>
      <Tab eventKey="upcomming" title="Upcomming Projects">
      <Cards data={completedProjects} />
      </Tab>
    </Tabs>
  )

}

export default GeneralTabs