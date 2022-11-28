import {
    IonAccordion,
    IonAccordionGroup,
    IonButton,
    IonButtons,
    IonContent,
    IonIcon,
    IonItem,
    IonLabel,
    IonList,
    IonPage,
    IonText,
    IonTitle,
    IonToolbar,
} from "@ionic/react";

import { chevronDownCircleOutline } from "ionicons/icons";

import "./NotFoundPage.scss";

const NotFoundPage = () => {


    return (
        <IonPage>
            <IonContent className="ion-content-notFound">
                <div className="ion-notFound-container">
                    <div>
                        <IonLabel class="ion-text-wrap" className="text-notFound">
                            Oops! Looks like either you mistyped the url or we deleted that page. Let's agree to blame this on you.
                        </IonLabel>
                    </div>
                    <div>
                        <IonLabel class="ion-text-wrap" className="text-notFound1">
                            Go back to known waters! Go to the Home page.
                        </IonLabel>
                        <div>
                            <IonButton routerLink="/home" fill="clear" size="large" className="button-home-notFound">
                                <IonIcon className="icon-notFound" slot="icon-only" icon={chevronDownCircleOutline}></IonIcon>
                            </IonButton>
                        </div>
                    </div>
                </div>
        </IonContent>
        </IonPage >
    );
};

export default NotFoundPage;
