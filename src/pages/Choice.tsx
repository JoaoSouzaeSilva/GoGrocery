import {
  IonButton,
  IonButtons,
  IonContent,
  IonIcon,
  IonItem,
  IonPage,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Choice.css";
import headerImg from "../images/header.png";

const Choice = () => {
  return (
    <IonPage>
      <IonToolbar className="ion-toolbar-choice">
        <img className="img" slot="start" src={headerImg} />
        <div className="img_text-choices">have it your way</div>
        <div className="profile-icon">
          <ProfileIcon />
        </div>
      </IonToolbar>
      <IonContent className="choices background-image">
        <IonText className="choice-text">Start planning now!</IonText>
        <div className="buttons-div">
          <IonButton
            class="round ion-text-wrap"
            className="big-button saved-lists"
          >
            <img className="button-img" src={headerImg} />
            <IonText className="big-button-text">
              Shop one of my saved Grocery Lists
            </IonText>
          </IonButton>
          <IonButton
            class="round ion-text-wrap"
            className="big-button new-list"
          >
            <img className="button-img" src={headerImg} />
            <IonText className="big-button-text">Shop a new List</IonText>
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

const ProfileIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <g>
        <g>
          <rect width="100%" height="100%" fill="#cbd2c3" />
          <ellipse cx="12" cy="8" rx="5" ry="6"></ellipse>
          <path d="M21.8 19.1c-.9-1.8-2.6-3.3-4.8-4.2-.6-.2-1.3-.2-1.8.1-1 .6-2 .9-3.2.9s-2.2-.3-3.2-.9c-.5-.2-1.2-.3-1.8 0-2.2.9-3.9 2.4-4.8 4.2-.7 1.3.4 2.8 1.9 2.8h15.8c1.5 0 2.6-1.5 1.9-2.9z"></path>
          <style>{`
                ellipse {
                    fill: #8F9B84;
                }
                path {
                    fill: #8F9B84;
                }
            `}</style>
        </g>
      </g>
    </svg>
  );
};

export default Choice;
