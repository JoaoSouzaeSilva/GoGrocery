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

  const getQuantity = (item: any) => {
    let quantityDisplay = item[2] + "x ";
    return quantityDisplay;
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
          {/*  <div className="item-header">
            <div className="item-header-quantity">{"[Quantity]"}</div>
            <div className="item-header-product">{"[Product]"}</div>
          </div> */}
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
        </div>
      </IonContent>
    </IonPage>
  );
};

export default List;
