import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonImg,
  IonItem,
  IonItemDivider,
  IonLabel,
  IonPage,
  IonText,
  IonToolbar,
} from "@ionic/react";
import "./Home.css";
import headerImg from "../images/header.png";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonToolbar>
        <img className="img" slot="start" src={headerImg} />
        <div className="img_text" slot="start">have it your way</div>
        <IonButtons slot="end">
          <IonButton shape="round" className="button-secondary">About</IonButton>
          <IonButton shape="round" className="button-secondary">Sign up</IonButton>
          <IonButton shape="round" className="button-primary">Sign in</IonButton>
        </IonButtons>
      </IonToolbar>
      <IonContent>
        <div className="title">
          <div className="homePage_title">GoGrocery</div>
          <div className='separator'/>
          <div className='homePage_subText'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
