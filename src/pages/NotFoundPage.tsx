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
                            Oops!! Looks like you mistyped the url. Let's agree to blame this on you.
                        </IonLabel>
                    </div>
                    <div>
                        <IonLabel class="ion-text-wrap" className="text-notFound1">
                            Go back to known waters! Go to the Home page.
                        </IonLabel>
                        <div>
                        <IonButton fill="clear" size="large">
                            <IonIcon className="icon-notFound" slot="icon-only" icon={chevronDownCircleOutline}></IonIcon>
                        </IonButton>
                        </div>
                    </div>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default NotFoundPage;
