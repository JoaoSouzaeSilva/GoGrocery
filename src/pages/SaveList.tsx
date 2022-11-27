import {
    IonButton,
    IonButtons,
    IonContent,
    IonPage,
    IonToolbar,
  } from "@ionic/react";
  import { useHistory } from "react-router-dom";
  import headerImg from "../images/header.png";
  
  import "./SaveList.scss";
  
  const SaveList = () => {
    let history = useHistory();
    return (
      <IonPage>
        <IonToolbar className="ion-toolbar-savelist">
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
        <IonContent className="ion-content-savelist">
            <div className="grocery-savelist">
              <div className="grocery-savelist-header">
                <h1 className="grocery-savelist-title">
                  Do you wish to save this list?
                </h1>
              </div>
              <a href="/listname">
              <button className="save-yes-button">
                Yes
              </button>
            </a>
            <a href="/thankyou">
              <button className="save-no-button">
                No
              </button>
            </a>
            </div>
        </IonContent>
      </IonPage>
    );
  };
  
  export default SaveList;
  