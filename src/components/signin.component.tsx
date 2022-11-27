import {
  IonAlert,
  IonButton,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonList
} from "@ionic/react";
import { eye, eyeOff } from "ionicons/icons";
import { useState } from "react";


const SignInComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("Something went wrong. Please try again later.");
  const [showToast, setShowToast] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [passwordIcon, setPasswordIcon] = useState(eye);
  const [passwordError, setPasswordError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const togglePassword = () => {
    if (!showPassword) {
      setShowPassword(true);
    } else setShowPassword(false);
  };

  const [emailMessage, setEmailMessage] = useState(
    "That email does not look familiar to us. Do you want to try again?."
  );
  const [passwordMessage, setPasswordMessage] = useState(
    "Oops! We recognize that email but that password will not get you anywhere."
  );

  const changeIcon = () => {
    showPassword ? setPasswordIcon(eye) : setPasswordIcon(eyeOff);
  };

  async function checkEmail() {
    if (localStorage.getItem(email) == null) return true;
    else return false;
  }

  function checkPassword() {
    if (password != JSON.parse(localStorage.getItem(email)!).password) return false;
    else return true;
  }

  async function handleSignIn() {
    let aux = checkEmail();
    if (await aux) {
      if (checkPassword()) {
        const user = {
          id: email,
          email: email,
          password: password,
        };
        localStorage.setItem(email, JSON.stringify(user));
      }
      else {
        setEmailError(true);
      }
  }
    else {
  setPasswordError(true);
}
  };


return (
  <>
    <IonList className="sign-in-list">
      <IonItem fill="outline" className="sign-in-label">
        <IonLabel className="labelfix" position="floating">Email</IonLabel>
        <IonInput
          type="email"
          value={email}
          placeholder="email@email.com"
          onIonChange={(event: any) => setEmail(event.detail.value)}
        />
      </IonItem>
      <IonItem fill="outline" className="sign-in-label">
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
    </IonList>

    <IonButton
      className="forgotPWD"
      size="small"
      fill="clear"
    >
      Having trouble signing in?
    </IonButton>

    <div className="btn-container">
      <IonButton  onClick={() => handleSignIn()} expand="block" fill="solid" className="ion-buttons-signin ion-item-email-pwd">
        Sign In
      </IonButton>
      <IonButton expand="block" fill="clear" class="ion-text-wrap" className="btn-signup ion-item-email-pwd" routerLink="/signup">
        Don't have an account? Create one <strong>here</strong>.
      </IonButton>
    </div>
    <IonAlert
        isOpen={passwordError}
        onDidDismiss={() => setPasswordError(false)}
        header={"Oh no!"}
        message={passwordMessage}
        buttons={["OK"]}
      />
      <IonAlert
        isOpen={emailError}
        onDidDismiss={() => setEmailError(false)}
        header={"Oh no!"}
        message={emailMessage}
        buttons={["OK"]}
      />
  </>
);
};

export default SignInComponent;
