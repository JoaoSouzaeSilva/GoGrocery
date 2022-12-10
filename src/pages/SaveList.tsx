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
  let history: any = useHistory();

  const handleSaveList = () => {
    let state = history.location.state;
    history.push("/listname", { id: state.id, list: state.list });
  };

  const handleDontSaveList = () => {
    let state = history.location.state;
    history.push("/thankyou", { id: state.id });
  };

  const handleTakeToMenu = () => {
    let state = history.location.state;
    history.push("/choice", { id: state.id });
  };

  return (
    <IonPage>
      <IonToolbar className="ion-toolbar-savelist">
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
      <IonContent className="ion-content-savelist">
        <div className="grocery-savelist">
          <div className="grocery-savelist-header">
            <h1 className="grocery-savelist-title">
              Do you wish to save this list?
            </h1>
          </div>
          <button className="save-yes-button" onClick={() => handleSaveList()}>
            Yes
          </button>
          <button
            className="save-no-button"
            onClick={() => handleDontSaveList()}
          >
            No
          </button>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default SaveList;
