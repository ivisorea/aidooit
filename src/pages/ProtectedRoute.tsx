import {IonRouterOutlet, Navigate} from '@ionic/react-router';

const ProtectedRoute = () => {
const isAuthenticated = true;
return isAuthenticated ? <IonRouterOutlet/> : <Navigate to= '/login'/>;
};

export default ProtectedRoute;