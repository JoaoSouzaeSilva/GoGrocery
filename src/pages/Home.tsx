import {
  IonButton,
  IonButtons,
  IonContent,
  IonMenuButton,
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
        <div className="img_text">have it your way</div>
        <IonButtons slot="end" className="ion-buttons-home">
          <IonButton shape="round" href="/About">
            <p>About</p>
          </IonButton>
          <IonButton shape="round" href="/SignUp">
            <p>Sign up</p>
          </IonButton>
          <IonButton shape="round" href="/SignIn">
            <p className="button-primary">Sign in</p>
          </IonButton>
        </IonButtons>
      </IonToolbar>
      <IonContent className="ion-content-home">
        <div className="title">
          <div className="homePage_title">GoGrocery</div>
          <div className="separator" />
          <div className="homePage_subText">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
