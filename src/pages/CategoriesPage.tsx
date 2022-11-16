import {
  IonButton,
  IonButtons,
  IonCardContent,
  IonCol,
  IonContent,
  IonGrid,
  IonInput,
  IonPage,
  IonRow,
  IonToolbar,
  IonIcon,
} from "@ionic/react";
import headerImg from "../images/header.png";

import "./CategoriesPage.css";

const CategoriesPage = () => {
  return (
    <>
      <IonPage>
        <IonToolbar className="ion-toolbar-categories">
          <img className="img" slot="start" src={headerImg} />
          <div className="img_text">have it your way</div>
          <IonButtons slot="end" className="ion-buttons-categories">
            <IonButton shape="round" href="/About">
              <p className="button-secondary">About</p>
            </IonButton>
            <IonButton shape="round">
              <p className="button-primary">Back</p>
            </IonButton>
          </IonButtons>
        </IonToolbar>
        <IonContent className="ion-content-categories">
          <IonGrid fixed={true} className="categories-grid">
            <IonRow className="row1">
              <IonCol size="3" className="col1">
                <h1 className="app-name">Go Grocery</h1>
              </IonCol>
              <IonCol size="3" offset="1.5" className="col2">
                <IonInput
                  className="input"
                  placeholder="What are you looking for?"
                  maxlength={34}
                />
              </IonCol>
              <IonCol size="3" offset="1.5" className="col3">
                <IonButtons className="list-buttons">
                  <IonButton shape="round" className="see-list-button">
                    <p>See List</p>
                  </IonButton>
                  <IonButton shape="round" className="finish-button">
                    <p>Finish</p>
                  </IonButton>
                </IonButtons>
              </IonCol>
            </IonRow>
            <div className="divider" />
          </IonGrid>
        </IonContent>
      </IonPage>
    </>
  );
};

export default CategoriesPage;
