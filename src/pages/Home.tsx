import { IonContent, IonItem, IonItemDivider, IonLabel, IonPage} from '@ionic/react';
import MyHeader from '../components/Header';
import Button from '../components/Button';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <MyHeader />
      <IonContent fullscreen>
        <h1 className='homePage_title'>GoGrocery</h1>
        <div className='separator'/>
        <h5 className='homePage_subText'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h5>
        <Button>Click</Button>
      </IonContent>
    </IonPage>
  );
};

export default Home;
