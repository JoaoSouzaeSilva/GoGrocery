import { IonAvatar, IonButton, IonButtons, IonContent, IonItem, IonLabel, IonList, IonPage, IonSearchbar, IonSelect, IonSelectOption, IonThumbnail, IonToolbar } from "@ionic/react";
import { useHistory } from "react-router";

import headerImg from "../images/header.png";

import "./Itinerary.css";

import ItineraryList from "../components/itinerary-list-item.component";

const Itinerary = () => {
    let history: any = useHistory();

    // let currSupermarket = 1;
    // let currItinerary = 0;

    // let changeImage = (newItinerary: string) => {
    //     if (newItinerary == "discount") {
    //         currItinerary = 1;
    //     } else if (newItinerary == "fast") {
    //         currItinerary = 2;
    //     } else {
    //         console.log("wtf")
    //     }
    //     map = `../images/supermarket${currSupermarket}-${currItinerary}.png`;

    //     console.log(map);
    // }   

    return (
        <IonPage className="itinerary-content">
            <IonToolbar className="ion-toolbar-home">
                <img className="img" slot="start" src={headerImg} />
                <div className="img_text">have it your way</div>
                <IonButtons slot="end" className="ion-buttons-home">
                    <IonButton shape="round" href="/About" className="toolbar-itinerary-button">
                        <p className="button-primary">Back</p>
                    </IonButton>
                    <IonButton shape="round" href="/About" className="toolbar-itinerary-button">
                        <p className="button-primary">Finish</p>
                    </IonButton>
                </IonButtons>
            </IonToolbar>
            <div className="row-parent">
                <div className="col">
                    <ItineraryList selectedItems={[]} />
                </div>
                <div className="map-select-container col">
                    <IonList className="route-select-list">
                        <IonItem lines="none">
                            <IonLabel>Route</IonLabel>
                            <IonSelect interface="popover" placeholder="Choose the best route" className="itinerary-select" /* onIonChange={(e) => changeImage(`${e.detail.value}`)} */ >
                                <IonSelectOption className="route-select-option" value="fast">Fast Route</IonSelectOption>
                                <IonSelectOption className="route-select-option" value="discount">Discount Route</IonSelectOption>
                            </IonSelect>
                        </IonItem>
                    </IonList>
                    <div className="map-container">
                        <img className="map" src={require("../images/supermarket1.png")} />
                    </div>
                </div>
                <div className="col">
                    <IonList className="supermarkets-list">
                        <>
                            <IonSearchbar placeholder="Find your store" color="tertiary" className="supermarket-searchbar"></IonSearchbar>

                            <IonItem>
                                <IonThumbnail slot="start">
                                    <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
                                </IonThumbnail>
                                <IonLabel>
                                    Lidl FCT
                                </IonLabel>
                            </IonItem>

                            <IonItem>
                                <IonThumbnail slot="start">
                                    <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
                                </IonThumbnail>
                                <IonLabel>
                                    Continente Montijo
                                </IonLabel>
                            </IonItem>

                            <IonItem>
                                <IonThumbnail slot="start">
                                    <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
                                </IonThumbnail>
                                <IonLabel>
                                    Pingo Doce Montijo
                                </IonLabel>
                            </IonItem>

                            <IonItem lines="none">
                                <IonThumbnail slot="start">
                                    <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
                                </IonThumbnail>
                                <IonLabel>
                                    Mercadona Montijo
                                </IonLabel>
                            </IonItem>
                        </>

                    </IonList>
                </div>
            </div>
        </IonPage>
    );
};

export default Itinerary;