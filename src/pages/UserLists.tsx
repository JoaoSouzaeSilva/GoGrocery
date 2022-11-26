import {
    IonButton,
    IonButtons,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCol,
    IonContent,
    IonGrid,
    IonPage,
    IonRow,
    IonToolbar,
  } from "@ionic/react";
  import { useHistory } from "react-router-dom";
  import headerImg from "../images/header.png";
  
  import "./UserLists.scss";
  
  const UserLists = () => {
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
        <IonContent className="ion-content-lists">
          <div className="lists-container">
            <div className="grocery-lists">
              <div>
                <h1 className="grocery-lists-title">
                  My grocery lists
                </h1>
              </div>
              <div className="separator-lists"/>
              <div className="grocery-lists-text">
                <p className="text-lists">
                  - Weekly groceries
                </p>
                {/*   <IonList>
                {lists.map((list) => (
                  <IonItem
                    className="text-lists"
                    detail
                    button
                    key={list.id}
                    routerLink={`/app/myparcel/${list.id}`}
                  >
                    <IonLabel>{list.name}</IonLabel>
                    <div className="separator-between-lists"/>
                  </IonItem>
                ))}
              </IonList> */}
              
          
              </div>
            </div>
          </div>
        </IonContent>
      </IonPage>
    );
  };
  
  export default UserLists;
  