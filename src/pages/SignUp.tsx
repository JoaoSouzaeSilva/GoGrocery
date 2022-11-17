import {
    IonButton,
    IonButtons,
    IonContent,
    IonPage,
    IonToolbar,
  } from "@ionic/react";
  import "./Home.css";
  import headerImg from "../images/header.png";
  
  const SignUp = () => {
    return (
      <IonPage>
        <IonToolbar className="ion-toolbar-home">
          <img className="img" slot="start" src={headerImg} />
          <div className="img_text">have it your way</div>
          <IonButtons slot="end" className="ion-buttons-home">
            <IonButton shape="round" href="/About">
              <p className="button-secondary">About</p>
            </IonButton>
          </IonButtons>
        </IonToolbar>
        <IonContent className="ion-content-home">
       
        </IonContent>
      </IonPage>
    );
  };

  export default SignUp;