import {
  IonButton,
  IonButtons,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonPage,
  IonRow,
  IonToolbar,
} from "@ionic/react";
import headerImg from "../images/header.png";

import "./About.css";

const About = () => {
  return (
    <IonPage>
      <IonToolbar>
        <img className="img" slot="start" src={headerImg} />
        <div className="img_text" slot="start">
          have it your way
        </div>
        <IonButtons slot="end">
          <IonButton shape="round" className="back">
            Back
          </IonButton>
        </IonButtons>
      </IonToolbar>
      <IonContent>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonCard className="card1">
                <IonCardHeader>
                  <div className="card_title">
                    <h1>
                      The reason you need GoGrocery
                    </h1>
                  </div>
                </IonCardHeader>
              </IonCard>
            </IonCol>
            <IonCol>
              <IonCard className="card2">
                <IonCardHeader>
                  <div className="card_title">
                    <h1>The product</h1>
                  </div>
                </IonCardHeader>
              </IonCard>
              <IonCard className="card3">
                <IonCardHeader>
                  <div className="card_title">
                    <h1>The team</h1>
                  </div>
                </IonCardHeader>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default About;
