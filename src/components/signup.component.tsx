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
import { eye, eyeOff, flashOffOutline } from "ionicons/icons";
import { useState } from "react";

const SignUpComponent = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setcPassword] = useState("");

  const [message, setMessage] = useState(
    "Something went wrong. Please try again later."
  );
  const [showToast, setShowToast] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showcPassword, setShowcPassword] = useState(false);
  const [passwordIcon, setPasswordIcon] = useState(eye);
  const [passwordIconConf, setPasswordIconConf] = useState(eye);
  const [error, setError] = useState(false);

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

  async function canRegister() {
    if (localStorage.getItem(email) == null) return true;
    else return false;
  }

  const handleSignUp = async () => {
    let aux = canRegister();
    if (await aux) {
      const user = {
        id: email,
        name: name,
        email: email,
        password: password,
      };

      localStorage.setItem(email, JSON.stringify(user));
    } else setError(true);
  };

  return (
    <>
      <IonList className="sign-up-list">
        <IonItem fill="outline" className="sign-up-label">
          <IonLabel color="primary" className="labelfix" position="floating">
            Name
          </IonLabel>
          <IonInput
            color="primary"
            type="text"
            value={name}
            placeholder="my name"
            onIonChange={(event: any) => setName(event.detail.value)}
          />
        </IonItem>
        <IonItem fill="outline" className="sign-up-label">
          <IonLabel color="primary" className="labelfix" position="floating">
            Email
          </IonLabel>
          <IonInput
            color="primary"
            type="email"
            value={email}
            placeholder="email@email.com"
            onIonChange={(event: any) => setEmail(event.detail.value)}
          />
        </IonItem>
        <IonItem fill="outline" className="sign-up-label">
          <IonLabel color="primary" position="floating">
            Password
          </IonLabel>
          <IonInput
            color="primary"
            type={showPassword ? "text" : "password"}
            value={password}
            placeholder="***********"
            onIonChange={(event: any) => setPassword(event.detail.value)}
          />
          <IonButton
            className="eye-btn eye-color"
            color="primary"
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
          <IonLabel color="primary" position="floating">
            Confirm Password
          </IonLabel>
          <IonInput
            color="primary"
            onIonChange={(event: any) => setcPassword(event.detail.value)}
            type={showcPassword ? "text" : "password"}
            value={cPassword}
          />
          <IonButton
            className="eye-btn"
            color="primary"
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
        <IonButton
          onClick={() => handleSignUp()}
          expand="block"
          fill="solid"
          className="ion-buttons-signup-page ion-item-email-pwd"
        >
          Sign Up
        </IonButton>
      </div>
      <IonAlert
        isOpen={error}
        onDidDismiss={() => setError(false)}
        header={"The given email is already associated to an account!"}
        message={message}
        buttons={["OK"]}
      />
    </>
  );
};

export default SignUpComponent;
