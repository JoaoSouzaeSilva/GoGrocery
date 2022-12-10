import {
  IonAlert,
  IonButton,
  IonButtons,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonSearchbar,
  IonSelect,
  IonSelectOption,
  IonToolbar,
} from "@ionic/react";
import { useState } from "react";
import { useHistory } from "react-router";

import headerImg from "../images/header.png";

import "./Itinerary.scss";

const Itinerary = () => {
  let history: any = useHistory();

  const [showRouteHelp, setShowRouteHelp] = useState(false);
  const [open, setOpen] = useState(false);
  const [supermarketName, setSupermarketName] = useState("GoGrocery Store FCT");
  const [canFinish, setCanFinish] = useState(false);
  const [noRouteError, setNoRouteError] = useState(false);
  const [noRouteErrorMessage, setNoRouteErrorMessage] = useState(
    "Make sure that you select an available route before finishing."
  );

  const handleFinishItinerary = () => {
    if (canFinish == false) {
      setNoRouteError(true);
    } else {
      if (history.location.state.new === true) {
        history.push("/savelist", {
          id: history.location.state.id,
          list: history.location.state.list,
        });
      } else
        history.push("/thankyou", {
          id: history.location.state.id,
        });
    }
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

  const handleTakeToMenu = () => {
    history.push("/choice", { id: history.location.state.id });
  };

  return (
    <>
      <IonPage className="itinerary-content">
        <IonToolbar className="ion-toolbar-home">
          <img
            className="img"
            slot="start"
            src={headerImg}
            onClick={() => handleTakeToMenu()}
          />
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

        <div className="supermarket-name">
          {"Current supermarket: " + supermarketName}
        </div>

        <div
          className="map-select-container col"
          onClick={() =>
            open
              ? (setShowRouteHelp(!showRouteHelp), setOpen(!open))
              : undefined
          }
        >
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
                  onClick={() => {
                    setCanFinish(true);
                    setNoRouteError(false);
                  }}
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

          <div
            className="route-help"
            onClick={() => {
              setShowRouteHelp(!showRouteHelp);
              setOpen(!open);
            }}
          />
          {showRouteHelp && (
            <div className="route-help-container">
              <p className="route-help-text">
                Fast Route - Based on the products on your list, GoGrocery will
                present you with the fastest way of getting all of your
                groceries picked.
              </p>
              <p className="route-help-text">
                Discount Route - Based on the products on your list, GoGrocery
                will analyze which products are on sale, leading you there.
              </p>
            </div>
          )}

          <Image />

          <input
            type="text"
            className="search-forgot"
            color="#cbd2c3"
            maxLength={38}
            placeholder="Forgot something? Add here!"
          ></input>

          <div className="current-list">
            {history.location.state.new ? (
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
                  onClick={() => {
                    changeSupermarket(1);
                    setSupermarketName("GoGrocery Store FCT");
                  }}
                >
                  <IonLabel>GoGrocery Store FCT</IonLabel>
                </IonItem>
                <IonItem
                  button
                  detail={true}
                  onClick={() => {
                    changeSupermarket(2);
                    setSupermarketName("GoGrocery Store Montijo");
                  }}
                >
                  <IonLabel>GoGrocery Store Montijo</IonLabel>
                </IonItem>
                <IonItem
                  button
                  detail={true}
                  onClick={() => {
                    changeSupermarket(1);
                    setSupermarketName("GoGrocery Store Almada");
                  }}
                >
                  <IonLabel>GoGrocery Store Almada</IonLabel>
                </IonItem>
                <IonItem
                  button
                  lines="none"
                  detail={true}
                  onClick={() => {
                    changeSupermarket(2);
                    setSupermarketName("GoGrocery Store Lisboa");
                  }}
                >
                  <IonLabel>GoGrocery Store Lisboa</IonLabel>
                </IonItem>
              </>
            </IonList>
          </div>
        </div>
      </IonPage>
      <IonAlert
        isOpen={noRouteError}
        onDidDismiss={() => setNoRouteError(false)}
        header={"Oh no!"}
        message={noRouteErrorMessage}
        buttons={["OK"]}
      />
    </>
  );
};

export default Itinerary;
