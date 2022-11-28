import {
  IonButton,
  IonButtons,
  IonContent,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonToolbar,
} from "@ionic/react";
import { useHistory } from "react-router-dom";
import headerImg from "../images/header.png";

import "./UserLists.scss";

const UserLists = () => {
  let history: any = useHistory();
  return (
    <IonPage>
      <IonToolbar className="ion-toolbar-lists">
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
      <IonContent className="ion-content-lists">
        <div className="lists-container">
          <div className="grocery-lists">
            <div className="teste-zindex">
              <div className="title-header-lists"></div>
              <h1 className="grocery-lists-title">My grocery lists</h1>
            </div>
            <div className="separator-lists" />
            <div className="grocery-lists-text">
              <div>
                {history.location.state.lists.map((list: any) => (
                  <div className="lists-list-item">
                    <div className="bullet-lists"></div>
                    <div
                      className="text-lists"
                      onClick={() =>
                        history.push(`/lists/${list.listName}`, {
                          id: history.location.state.id,
                        })
                      }
                    >
                      <p>{list.listName}</p>
                      <div className="separator-between-lists" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default UserLists;
