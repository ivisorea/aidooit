import './Toolbar.css';
import { IonToolbar, IonTitle, IonContent } from '@ionic/react';
import aidooit_logo from './aidooit_logo.png';

interface ContainerProps { }

const Toolbar: React.FC<ContainerProps> = () => {
  return (
      <>
        <IonToolbar>
            <IonTitle>
                <img className='logo' src={aidooit_logo} alt=""/>
            </IonTitle>
        </IonToolbar>
        
        

      </>
    
  );
};

export default Toolbar;