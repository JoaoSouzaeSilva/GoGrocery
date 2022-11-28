import {
  IonButton,
  IonButtons,
  IonContent,
  IonItem,
  IonPage,
  IonToolbar,
} from "@ionic/react";
import { useHistory, useLocation } from "react-router-dom";
import headerImg from "../images/header.png";

import "./Profile.scss";

const Profile = () => {
  let history: any = useHistory();

  console.log(history.location.state);

  return (
    <>
      <IonPage>
        <IonToolbar className="ion-toolbar-profile">
          <img slot="start" className="img" src={headerImg} />
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
        <IonContent className="ion-content-profile">
          <div className="profile-title-container">
            <p className="profile-title-text">Profile</p>
          </div>
          <div className="profile-container">
            <div className="grocery-profile">
              <div className="profilepic">&nbsp;</div>
              <p className="text-profile-name">Name</p>
              <div className="text-profile-div-name">
                <p className="text-profile-username">
                  {
                    JSON.parse(localStorage.getItem(history.location.state.id)!)
                      .name
                  }
                </p>
              </div>
              <p className="text-profile-email">Email</p>
              <div className="text-profile-div-email">
                <p className="text-profile-emailname">
                  {
                    JSON.parse(localStorage.getItem(history.location.state.id)!)
                      .email
                  }
                </p>
              </div>
              <a href="/lists">
                <p className="text-profile-saved-lists-title">Saved Lists</p>
              </a>
              <div className="text-profile-div-lists">
                {JSON.parse(
                  localStorage.getItem(history.location.state.id)!
                ).lists.map((list: any) => (
                  <IonItem
                    className="list-name"
                    onClick={() =>
                      history.push("/lists/" + list.listName, {
                        id: history.location.state.email,
                      })
                    }
                  >
                    {list.listName}
                  </IonItem>
                ))}
              </div>
              <IonButton
                fill="clear"
                routerLink="/home"
                className="log-out-button"
              >
                Log Out
              </IonButton>
            </div>
          </div>
        </IonContent>
      </IonPage>
    </>
  );
};

export default Profile;
