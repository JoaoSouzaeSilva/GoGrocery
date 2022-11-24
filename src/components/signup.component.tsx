import {
    IonAlert,
    IonButton,
    IonIcon,
    IonInput,
    IonItem,
    IonLabel,
    IonList,
    IonLoading,
    IonText,
    IonToast,
  } from "@ionic/react";
  import { eye, eyeOff } from "ionicons/icons";
  import { useState } from "react";

const SignUpComponent = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cPassword, setcPassword] = useState("");

    const [message, setMessage] = useState("Something went wrong. Please try again later.");
    const [showToast, setShowToast] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showcPassword, setShowcPassword] = useState(false);
    const [passwordIcon, setPasswordIcon] = useState(eye);
    const [passwordIconConf, setPasswordIconConf] = useState(eye);
    const [status, setStatus] = useState({ loading: false, error: false });

    const togglePassword = () => {
      if (!showPassword) {
        setShowPassword(true);
      } else setShowPassword(false);
    };

    const togglePasswordConf = () => {
      if (!showcPassword) {
        setShowcPassword(true);
      } else setShowcPassword(false);
    };
    const changeIconConf = () => {
      showcPassword ? setPasswordIconConf(eye) : setPasswordIconConf(eyeOff);
    };
  
    const changeIcon = () => {
      showPassword ? setPasswordIcon(eye) : setPasswordIcon(eyeOff);
    };

    return (
      <>
        <IonList className="sign-up-list">
        <IonItem fill="outline" className="sign-up-label">
            <IonLabel className="labelfix" position="floating">Name</IonLabel>
            <IonInput
              type="text"
              value={name}
              placeholder="my name"
              onIonChange={(event: any) => setName(event.detail.value)}
            />
          </IonItem>
          <IonItem fill="outline" className="sign-up-label">
            <IonLabel className="labelfix" position="floating">Email</IonLabel>
            <IonInput
              type="email"
              value={email}
              placeholder="email@email.com"
              onIonChange={(event: any) => setEmail(event.detail.value)}
            />
          </IonItem>
          <IonItem fill="outline" className="sign-up-label">
            <IonLabel background-color={"danger"} position="floating">Password</IonLabel>
            <IonInput
              type={showPassword ? "text" : "password"}
              value={password}
              placeholder="***********"
              onIonChange={(event: any) => setPassword(event.detail.value)}
            />
            <IonButton
              className="eye-btn eye-color"
              slot="end"
              fill="clear"
              onClick={() => {
                togglePassword();
                changeIcon();
              }}
            >
              <IonIcon icon={passwordIcon} slot="icon-only"></IonIcon>
            </IonButton>
          </IonItem>
          <IonItem fill="outline" className="sign-up-label">
            <IonLabel background-color={"danger"} position="floating">Confirm Password</IonLabel>
            <IonInput
            onIonChange={(event: any) => setcPassword(event.detail.value)}
            type={showcPassword ? "text" : "password"}
            value={cPassword}
          />
          <IonButton
            className="eye-btn"
            slot="end"
            fill="clear"
            onClick={() => {
              togglePasswordConf();
              changeIconConf();
            }}
          >
            <IonIcon icon={passwordIconConf} slot="icon-only"></IonIcon>
          </IonButton>
          </IonItem>
        </IonList>
  
        <div className="btn-container">
          <IonButton expand="block" fill="solid" className="ion-buttons-signup-page ion-item-email-pwd">
            Sign Up
          </IonButton>
        </div>
        <IonAlert
          isOpen={status.error}
          onDidDismiss={() => setStatus({ ...status, error: false })}
          header={"Algo correu mal"}
          message={message}
          buttons={["OK"]}
        />
        <IonLoading isOpen={status.loading} />
      </>
    );
  };
  
  export default SignUpComponent;
  