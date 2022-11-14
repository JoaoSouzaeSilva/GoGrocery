import { IonButton, IonButtons, IonCard, IonCardHeader, IonCardTitle, IonContent, IonPage, IonToolbar } from "@ionic/react";
import headerImg from "../images/header.png";

import "./About.css"

const About = () => {
    return(
        <IonPage>
            <IonToolbar>
                <img className="img" slot="start" src={headerImg} />
                <div className="img_text" slot="start">have it your way</div>
                <IonButtons slot="end">
                    <IonButton shape="round" className="back">Back</IonButton>
                </IonButtons>
            </IonToolbar>
            <IonContent>
                <IonCard className="card1">
                    <IonCardHeader>
                        <h1 className="card1_title">The reason you need GoGrocery</h1>
                    </IonCardHeader>
                </IonCard>
                <IonCard className="card2">
                    <IonCardHeader>
                        <h1 className="card2_title">The product</h1>
                    </IonCardHeader>                   
                </IonCard>
                <IonCard className="card3">
                    <IonCardHeader>
                        <IonCardTitle className="card3_title">The team</IonCardTitle>
                    </IonCardHeader>
                </IonCard>

            </IonContent>
        </IonPage>
    );
};

export default About;