import {
  IonAvatar,
  IonButton,
  IonButtons,
  IonContent,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonSearchbar,
  IonSelect,
  IonSelectOption,
  IonThumbnail,
  IonToolbar,
} from "@ionic/react";
import { useState } from "react";
import { useHistory } from "react-router";

import headerImg from "../images/header.png";

import "./Itinerary.scss";
import { Items } from "../data/items";

const Itinerary = () => {
  let history: any = useHistory();

  const handleFinishItinerary = () => {
    if (history.location.state.new === true) {
      history.push("/savelist", {
        id: history.location.state.id,
        list: history.location.state.list,
      });
    } else
      history.push("/thankyou", {
        id: history.location.state.id,
      });
  };

  let changeSupermarket = (newItinerary: number) => {
    if (newItinerary == 1) {
      setImage(supermarket1);
      setSelectValue("");
    } else if (newItinerary == 2) {
      setImage(supermarket2);
      setSelectValue("");
    }
  };

  let changeItinerary = (newItinerary: string) => {
    if (image.includes("supermarket1")) {
      if (newItinerary == "discount") {
        setImage(supermarket11);
        setSelectValue("discount");
      } else if (newItinerary == "fast") {
        setImage(supermarket12);
        setSelectValue("fast");
      }
    } else if (image.includes("supermarket2")) {
      if (newItinerary == "discount") {
        setImage(supermarket21);
        setSelectValue("discount");
      } else if (newItinerary == "fast") {
        setImage(supermarket22);
        setSelectValue("fast");
      }
    } else {
      console.log(image);
    }
  };

  const supermarket1 = require("../images/supermarket1.png");
  const supermarket11 = require("../images/supermarket1-1.png");
  const supermarket12 = require("../images/supermarket1-2.png");
  const supermarket2 = require("../images/supermarket2.png");
  const supermarket21 = require("../images/supermarket2-1.png");
  const supermarket22 = require("../images/supermarket2-2.png");
  const supermarkets = {
    supermarket1,
    supermarket11,
    supermarket12,
    supermarket2,
    supermarket21,
    supermarket22,
  };

  const [image, setImage] = useState(supermarkets.supermarket1);

  const Image = () => {
    return <img className="map" src={image} />;
  };

  const [selectValue, setSelectValue] = useState("");

  return (
    <IonPage className="itinerary-content">
      <IonToolbar className="ion-toolbar-home">
        <img className="img" slot="start" src={headerImg} />
        <div className="img_text">have it your way</div>
        <IonButtons slot="end" className="ion-buttons-home">
          <IonButton
            shape="round"
            onClick={() => history.goBack()}
            className="toolbar-itinerary-button button-primary"
          >
            <p className="button-primary-itenerary">Back</p>
          </IonButton>
          <IonButton
            shape="round"
            onClick={() => handleFinishItinerary()}
            className="toolbar-itinerary-button button-primary"
          >
            <p className="button-primary-itenerary">Finish</p>
          </IonButton>
        </IonButtons>
      </IonToolbar>

      <div className="map-select-container col">
        <div className="choose-route">
          <IonList className="route-select-list">
            <IonItem lines="none" className="route-label">
              <IonLabel>Route</IonLabel>
              <IonSelect
                interface="popover"
                placeholder="Choose the best route"
                value={selectValue}
                className="itinerary-select"
                onIonChange={(e) => changeItinerary(`${e.detail.value}`)}
              >
                <IonSelectOption className="route-select-option" value="fast">
                  Fast Route
                </IonSelectOption>
                <IonSelectOption
                  className="route-select-option"
                  value="discount"
                >
                  Discount Route
                </IonSelectOption>
              </IonSelect>
            </IonItem>
          </IonList>
        </div>

        <Image />

        <input
          type="text"
          className="search-forgot"
          color="#cbd2c3"
          maxLength={38}
          placeholder="Forgot something? Add here!"
        ></input>

        <div className="current-list">
          {history.location.state.listName === "UNDEFINED" ? (
            <div className="current-list-name">Your new list</div>
          ) : (
            <div className="current-list-name">
              {history.location.state.listName}
            </div>
          )}
          <div className="current-list-separator" />
          <div className="current-list-items">
            {history.location.state.list.map((item: any) => (
              <div className="current-list-item-row">
                <div className="current-list-bullet" />
                <div className="current-list-item">
                  {item[2] + "x " + item[0]}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="col">
          <IonList className="supermarkets-list">
            <>
              <IonSearchbar
                placeholder="Find your store"
                color="tertiary"
                className="supermarket-searchbar"
              ></IonSearchbar>
              <IonItem
                button
                detail={true}
                onClick={() => changeSupermarket(1)}
              >
                <IonLabel>Lidl FCT</IonLabel>
              </IonItem>
              <IonItem
                button
                detail={true}
                onClick={() => changeSupermarket(2)}
              >
                <IonLabel>Continente Montijo</IonLabel>
              </IonItem>
              <IonItem
                button
                detail={true}
                onClick={() => changeSupermarket(1)}
              >
                <IonLabel>Pingo Doce Montijo</IonLabel>
              </IonItem>
              <IonItem
                button
                lines="none"
                detail={true}
                onClick={() => changeSupermarket(2)}
              >
                <IonLabel>Mercadona Montijo</IonLabel>
              </IonItem>
            </>
          </IonList>
        </div>
      </div>
    </IonPage>
  );
};

export default Itinerary;
