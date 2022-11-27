import {
    IonButton,
    IonButtons,
    IonContent,
    IonPage,
    IonToolbar
  } from "@ionic/react";
  import { useHistory } from "react-router-dom";
  import headerImg from "../images/header.png";
  
  import "./UserLists.scss";
  
  const List = () => {
    let history = useHistory();
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
        <IonContent className="ion-content-list">
          <div className="list-container">
            <div className="grocery-list">
              <div>
                <h1 className="grocery-list-title">
                  My grocery lists
                </h1>
              </div>
              <div className="separator-list"/>
              <div className="grocery-list-text">
                <p className="text-list">
                  - Ingredients
                </p>
              </div>
            </div>
          </div>
        </IonContent>
      </IonPage>
    );
  };
  
  export default List;
  