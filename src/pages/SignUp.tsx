import {
    IonButton,
    IonButtons,
    IonContent,
    IonPage,
    IonTitle,
    IonToolbar,
  } from "@ionic/react";
  import "./SignUp.scss";
  import headerImg from "../images/header.png";
  import SignUpComponent from "../components/signup.component";
  
  const SignUp = () => {
    return (
      <IonPage>
        <IonToolbar className="ion-toolbar-home">
          <img className="img" slot="start" src={headerImg} />
          <div className="img_text">have it your way</div>
          <IonButtons slot="end">
            <IonButton shape="round" href="/About">
              <p className="ion-buttons-about" >About</p>
            </IonButton>
            <IonButton shape="round" href="/SignIn">
            <p className="ion-buttons-signin-page" >Sign In</p>
          </IonButton>
          </IonButtons>
        </IonToolbar>
        <IonContent className="ion-content-signup ion-padding">
        <div className="sign-up-container">
          <IonTitle className="sign-up-welcome">Register</IonTitle>
          <IonTitle size="small" className="sign-up-info">Hey, enter your details in order to create your own account</IonTitle>
          <SignUpComponent />
        </div>
        </IonContent>
      </IonPage>
    );
  };

  export default SignUp;