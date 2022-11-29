import {
  IonAlert,
  IonButton,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonNote,
} from "@ionic/react";
import { eye, eyeOff } from "ionicons/icons";
import { useState } from "react";
import { useHistory } from "react-router";

const SignUpComponent = () => {
  let history: any = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setcPassword] = useState("");

  const [emailMessage, setEmailMessage] = useState(
    "Looks like the given email is already associated to an account."
  );
  const [invalidEmailMessage, setInvalidEmailMessage] = useState(
    "Oops! That email does not look valid to us. Insert a valid email."
  );
  const [passwordMessage, setPasswordMessage] = useState(
    "Make sure your password and confirmation password are equal."
  );
  const [fieldsFilledMessage, setfieldsFilledMessage] = useState(
    "Please fill all the fields."
  );
  const [passwordSecMessage, setpasswordSecMessage] = useState(
    "Do not forget! Your password must be at least 6 characters."
  );

  const [showToast, setShowToast] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showcPassword, setShowcPassword] = useState(false);
  const [passwordIcon, setPasswordIcon] = useState(eye);
  const [passwordIconConf, setPasswordIconConf] = useState(eye);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [fieldsFilledError, setFieldsFilledError] = useState(false);
  const [passwordSecError, setPasswordSecError] = useState(false);
  const [invalidEmailError, setInvalidEmailError] = useState(false);

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

  function checkPasswordsEquality() {
    if (password != cPassword) return false;
    else return true;
  }

  function checkIfFilled() {
    if (name != "" && email != "" && password != "" && cPassword != "")
      return true;
    else return false;
  }

  const checkPasswordSecurity = () => {
    if (password.length >= 6) return true;
    else return false;
  };

  const checkEmailValidity = () => {
    const emailMatch = email.match(
      /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
    );
    if (emailMatch != null) return true;
    else return false;
  };

  async function handleSignUp() {
    let aux = canRegister();
    if (checkIfFilled()) {
      if (checkEmailValidity()) {
        if (checkPasswordsEquality()) {
          if (checkPasswordSecurity()) {
            if (await aux) {
              const user = {
                id: email,
                name: name,
                email: email,
                password: password,
                lists: [],
              };
              localStorage.setItem(email, JSON.stringify(user));
              history.push("/signin");
            } else setEmailError(true);
          } else setPasswordSecError(true);
        } else setPasswordError(true);
      } else setInvalidEmailError(true);
    } else setFieldsFilledError(true);
  }

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
            placeholder="My name"
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
            onIonChange={(event: any) => {
              setPassword(event.detail.value);
            }}
          />
          {!checkPasswordSecurity() && (
            <IonNote slot="helper">
              Make sure your password has at least 6 characters.
            </IonNote>
          )}
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
          {!checkPasswordSecurity() && (
            <IonNote slot="helper">
              Make sure your confirmation password has at least 6 characters.
            </IonNote>
          )}
          {!checkPasswordsEquality() && (
            <IonNote slot="helper">
              Your passwrod and confirmation password must be the same.
            </IonNote>
          )}
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
        isOpen={emailError}
        onDidDismiss={() => setEmailError(false)}
        header={"Oh no!"}
        message={emailMessage}
        buttons={["OK"]}
      />
      <IonAlert
        isOpen={passwordError}
        onDidDismiss={() => setPasswordError(false)}
        header={"Oh no!"}
        message={passwordMessage}
        buttons={["OK"]}
      />
      <IonAlert
        isOpen={fieldsFilledError}
        onDidDismiss={() => setFieldsFilledError(false)}
        header={"Oh no!"}
        message={fieldsFilledMessage}
        buttons={["OK"]}
      />
      <IonAlert
        isOpen={passwordSecError}
        onDidDismiss={() => setPasswordSecError(false)}
        header={"Oh no!"}
        message={passwordSecMessage}
        buttons={["OK"]}
      />
      <IonAlert
        isOpen={invalidEmailError}
        onDidDismiss={() => setInvalidEmailError(false)}
        header={"Oh no!"}
        message={invalidEmailMessage}
        buttons={["OK"]}
      />
    </>
  );
};

export default SignUpComponent;
