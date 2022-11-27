import {
  IonButton,
  IonButtons,
  IonContent,
  IonPage,
  IonToolbar,
} from "@ionic/react";
import { useHistory, useLocation } from "react-router-dom";
import headerImg from "../images/header.png";

import "./Profile.scss";

const Profile = () => {
  let history = useHistory();
  let location: any = useLocation();

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
                  {JSON.parse(localStorage.getItem(location.state.email)!).name}
                </p>
              </div>
              <p className="text-profile-email">Email</p>
              <div className="text-profile-div-email">
                <p className="text-profile-emailname">{location.state.email}</p>
              </div>
              <a href="/lists">
                <p className="text-profile-saved-lists-title">Saved Lists</p>
              </a>
              <div className="text-profile-div-lists">
                {JSON.parse(
                  localStorage.getItem(location.state.email)!
                ).lists.map((list: any) => (
                  <div>{list.listName}</div>
                ))}
              </div>
              <a href="/home">
                <button className="log-out-button">Log Out</button>
              </a>
            </div>
          </div>
        </IonContent>
      </IonPage>
    </>
  );
};

export default Profile;
