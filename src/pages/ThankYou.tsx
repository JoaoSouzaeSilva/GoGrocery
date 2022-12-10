import {
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCol,
  IonContent,
  IonGrid,
  IonIcon,
  IonPage,
  IonRow,
  IonToolbar,
} from "@ionic/react";
import { useHistory } from "react-router-dom";
import headerImg from "../images/header.png";
import button from "../images/button-round.png";

import "./ThankYou.scss";

const ThankYou = () => {
  let history: any = useHistory();

  const handleReturnToBeggining = () => {
    history.push("/choice", { id: history.location.state.id });
  };

  const handleTakeToMenu = () => {
    history.push("/choice", { id: history.location.state.id });
  };

  return (
    <IonPage>
      <IonToolbar className="ion-toolbar-thankyou">
        <img slot="start" className="img" src={headerImg} onClick={() => handleTakeToMenu()} />
        <div className="img_text" slot="start">
          have it your way
        </div>
        <IonButtons slot="end">
          <IonButton
            shape="round"
            className="back-button"
            onClick={() => history.goBack()}
          >
            <p className="back">Back</p>
          </IonButton>
        </IonButtons>
      </IonToolbar>
      <IonContent className="ion-content-thankyou">
        <div className="grocery-thankyou">
          <h1 className="grocery-thankyou-title">
            Thank you for planning with GoGrocery!
          </h1>
        </div>
        <h1 className="grocery-thankyou-continue">Continue Planning!</h1>
        <a href="/choice">
          <img src={button} className="thankyou-return-button" onClick={() => handleReturnToBeggining()} />
        </a>
      </IonContent>
    </IonPage>
  );
};

export default ThankYou;
