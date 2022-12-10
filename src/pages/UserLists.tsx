import {
  IonButton,
  IonButtons,
  IonContent,
  IonPage,
  IonText,
  IonToolbar,
} from "@ionic/react";
import { useHistory } from "react-router-dom";
import headerImg from "../images/header.png";

import "./UserLists.scss";

const UserLists = () => {
  let history: any = useHistory();
  
  const handleTakeToMenu = () => {
    history.push("/choice", { id: history.location.state.id });
  };

  return (
    <IonPage>
      <IonToolbar className="ion-toolbar-lists">
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
                {history.location.state.user.lists.length === 0 && (
                  <IonText className="no-lists" color={"primary"}>
                    {" "}
                    You don't have any grocery lists yet!
                  </IonText>
                )}
                {history.location.state.user.lists.length !== 0 &&
                  history.location.state.user.lists.map((list: any) => (
                    <div className="lists-list-item">
                      <div className="bullet-lists"></div>
                      <div
                        className="text-lists"
                        onClick={() =>
                          history.push(`/lists/${list.listName}`, {
                            id: history.location.state.user.id,
                            new: false,
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
