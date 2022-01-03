import { Navigate} from 'react-router-dom';
import {IonRouterOutlet} from '@ionic/react';

const ProtectedRoute = () => {
const isAuthenticated = true;
return isAuthenticated ? <IonRouterOutlet/> : <Navigate to= '/login'/>;
};

export default ProtectedRoute;