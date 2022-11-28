import {
  IonButton,
  IonButtons,
  IonContent,
  IonPage,
  IonToolbar,
} from "@ionic/react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import headerImg from "../images/header.png";

import "./ListName.scss";

const ListName = () => {
  let history: any = useHistory();
  const [listName, setListName] = useState("");

  const handleSaveList = () => {
    let data = JSON.parse(localStorage.getItem(history.location.state.id)!);
    let currentLists: any[] = JSON.parse(
      localStorage.getItem(history.location.state.id)!
    ).lists;
    let newUser: any = JSON.stringify({
      id: data.id,
      email: data.email,
      name: data.name,
      password: data.password,
      lists: [
        ...currentLists,
        {
          listName: listName,
          items: history.location.state.list,
        },
      ],
    });
    localStorage.setItem(data.id, newUser);
    history.push("/thankyou", { id: data.id });
  };

  return (
    <IonPage>
      <IonToolbar className="ion-toolbar-namelist">
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
      <IonContent className="ion-content-namelist">
        <div className="grocery-namelist">
          <div className="grocery-namelist-header">
            <h1 className="grocery-namelist-title">
              Insert the name of the new grocery list
            </h1>
          </div>
          <div className="grocery-namelist-input">
            <input
              type="text"
              className="name-text-input"
              onChange={(event: any) => setListName(event.target.value)}
            />
          </div>
          <a href="/thankyou">
            <button
              className="name-save-button"
              onClick={() => {
                handleSaveList();
              }}
            >
              Save
            </button>
          </a>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default ListName;
