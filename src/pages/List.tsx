import {
  IonButton,
  IonButtons,
  IonContent,
  IonItem,
  IonList,
  IonPage,
  IonToolbar,
} from "@ionic/react";
import { useHistory, useParams } from "react-router-dom";
import headerImg from "../images/header.png";

import "./List.scss";

const List = () => {
  let history: any = useHistory();
  let { id }: any = useParams();

  let user = JSON.parse(localStorage.getItem(history.location.state.id)!);
  let lists = user.lists;
  let aux = lists.find((list: any) => list.listName === id);
  let listItems = aux.items;

  console.log(listItems)

  const getQuantity = (item: any) => {
    let quantityDisplay = item[2] + "x ";
    return quantityDisplay;
  };

  const handleCalculateItinerary = () => {
    history.push("/itinerary", { id: id, list: listItems });
  };

  return (
    <IonPage>
      <IonToolbar className="ion-toolbar-list">
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
          <h1 className="grocery-list-title">{id}</h1>
          <div className="separator-list" />
          <div className="grocery-list-items">
            {listItems.map((item: any) => (
              <div>
                <div className="bullet"></div>
                <div className="list-product-name">
                  {getQuantity(item) + item[0]}
                </div>
              </div>
            ))}
          </div>
          <button
            className="go-to-itinerary"
            onClick={() => handleCalculateItinerary()}
          >
            Calculate itinerary
          </button>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default List;
