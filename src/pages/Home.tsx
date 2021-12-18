import { IonContent, IonFooter, IonHeader, IonPage } from '@ionic/react';
import Search from '../components/Search/Search';
import Toolbar from '../components/Toolbar/Toolbar';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <Toolbar/>
      </IonHeader>
      <IonContent fullscreen>
        <Search/> 
      </IonContent>
      <IonFooter>

      </IonFooter>
    </IonPage>
  );
};

export default Home;
