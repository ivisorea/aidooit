import {  Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import Login from './pages/Login';
import Register from './pages/Register';
import ProtectedRoute from './pages/ProtectedRoute';
//import {Outlet} from "react-router-dom"; 

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
// import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path="/home">
          <Home />
        </Route>
       {/* <Route path="/">
        <  <Navigate to="/home" />>
        </Route> */}
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register>
        </Route>
        <Route path='protected'component= {ProtectedRoute}>
          {/* <Route component= {UserProfile}> */}
          <Route path='create-post' component={CreatePost}/>
        </Route>
    
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
