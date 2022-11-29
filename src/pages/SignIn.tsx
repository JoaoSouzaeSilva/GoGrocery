import {
    IonButton,
    IonButtons,
    IonContent,
    IonPage,
    IonTitle,
    IonToolbar,
  } from "@ionic/react";
  import "./SignIn.scss";
  import headerImg from "../images/header.png";
  import SignInComponent from "../components/signin.component"
  
  const SignIn = () => {
    return (
      <IonPage>
        <IonToolbar className="ion-toolbar-home">
          <img className="img" slot="start" src={headerImg} />
          <div className="img_text">have it your way</div>
          <IonButtons slot="end">
            <IonButton shape="round" href="/About">
              <p className="ion-buttons-about" >About</p>
            </IonButton>
            <IonButton shape="round" href="/SignUp">
            <p className="ion-buttons-signup" >Sign up</p>
          </IonButton>
          </IonButtons>
        </IonToolbar>
        <IonContent className="ion-content-signin ion-padding">
        <div className="sign-in-container">
          <IonTitle className="sign-in-welcome">Login</IonTitle>
          <IonTitle size="small" className="sign-in-info">Hey, enter your details in order to sign in to your account</IonTitle>
          <SignInComponent />
        </div>
        </IonContent>
      </IonPage>
    );
  };

  export default SignIn;