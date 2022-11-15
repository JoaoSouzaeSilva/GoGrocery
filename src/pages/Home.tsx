import {
  IonButton,
  IonButtons,
  IonContent,
  IonPage,
  IonToolbar,
} from "@ionic/react";
import "./Home.css";
import headerImg from "../images/header.png";

const Home = () => {
  return (
    <IonPage>
      <IonToolbar className="ion-toolbar-home">
        <img className="img" slot="start" src={headerImg} />
        <div className="img_text" slot="start">have it your way</div>
        <IonButtons slot="end">
          <IonButton shape="round" className="button-secondary" href="/About">About</IonButton>
          <IonButton shape="round" className="button-secondary">Sign up</IonButton>
          <IonButton shape="round" className="button-primary">Sign in</IonButton>
        </IonButtons>
      </IonToolbar>
      <IonContent className="ion-content-home">
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
