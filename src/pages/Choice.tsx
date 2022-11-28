import {
  IonButton,
  IonContent,
  IonGrid,
  IonIcon,
  IonImg,
  IonPage,
  IonRow,
  IonText,
  IonToolbar,
} from "@ionic/react";
import "./Choice.scss";
import headerImg from "../images/header.png";
import { useHistory } from "react-router";
import { person } from "ionicons/icons";

const Choice = () => {
  let history: any = useHistory();
  const handleRedirectToProfile = () => {
    history.push("/profile", { email: history.location.state.email });
  };

  const handleShopNewList = () => {
    history.push("/categories", { email: history.location.state.email });
  };

  return (
    <IonPage>
      <IonToolbar className="ion-toolbar-choice">
        <img className="img" slot="start" src={headerImg} />
        <div className="img_text-choices">have it your way</div>
        <IonButton
          color={"primary"}
          slot="end"
          fill="clear"
          onClick={() => handleRedirectToProfile()}
        >
          <IonIcon icon={person} slot="icon-only"></IonIcon>
        </IonButton>
      </IonToolbar>
      <IonContent className="ion-content-choices ">
        <IonText className="choices-container choice-text">Start planning now!</IonText>
        <div className="buttons-div">
          <IonButton
            class="round ion-text-wrap"
            className="big-button"
            fill="clear"
          >
            <IonGrid>
              <IonRow >
                <img className="button-img" src={headerImg} />
              </IonRow>
              <IonRow>
                <IonText className="big-button-text">
                  Shop one of my saved Grocery Lists
                </IonText>
              </IonRow>
            </IonGrid>
          </IonButton>
          <IonButton
            class="round ion-text-wrap"
            fill="clear"
            className="big-button"
            onClick={() => handleShopNewList()}
          >
            <IonGrid>
              <IonRow>
                <IonImg className="button-img" src={headerImg} />
              </IonRow>
              <IonRow>
                <IonText className="big-button-text">Shop a new List</IonText>
              </IonRow>
            </IonGrid>
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Choice;
