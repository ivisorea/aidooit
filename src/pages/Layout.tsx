//import {Navigate} from 'react-router-dom';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import React from "react";
import { Link} from "react-router-dom";
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
import Toolbar from '../components/Toolbar/Toolbar';


const Layout = () => (
    <>
      <Toolbar />
      <div>
      <nav className="navbar navbar-light">
        <ul className="nav navbar-nav">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Login">Log in</Link>
          </li>
          <li>
            <Link to="/Signup">Sign Up</Link>
          </li>
        </ul>
      </nav>


      
     


      </div>
      </>
  );


export default Layout;