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
  IonToolbar,
} from "@ionic/react";
import "./Home.scss";
import headerImg from "../images/header.png";
import smartphone from "../images/smartphone-final.png";
import { chevronDownOutline } from "ionicons/icons";

const Home = () => {

  const handlePanel2Redirect = () => {
    return (event: React.MouseEvent) => {
      const element = document.getElementById("panel2");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
      event.preventDefault();
    };
  }

  return (
    <IonPage>
      <IonToolbar className="ion-toolbar-home">
        <img className="img" slot="start" src={headerImg} />
        <div className="img_text">have it your way</div>
        <IonButtons slot="end" className="ion-buttons-home">
          <IonButton shape="round" href="/About">
            <p className="paragraph">About</p>
          </IonButton>
          <IonButton shape="round" href="/SignUp">
            <p className="paragraph">Sign up</p>
          </IonButton>
          <IonButton shape="round" href="/SignIn">
            <p className="button-primary paragraph">Sign in</p>
          </IonButton>
        </IonButtons>
      </IonToolbar>
      <IonContent className="ion-content-home small-screen" >
        <div className="title panel1">
          <div className="homePage_title">GoGrocery</div>
          <div className="separator" />
          <div className="homePage_subText">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </div>
        <IonButton className="arrow-down" fill="clear" size="large" onClick={handlePanel2Redirect()}>
          <IonIcon className="icon" slot="icon-only" icon={chevronDownOutline}></IonIcon>
        </IonButton>

        <div className="panel2" id="panel2">
          <div className="phone-grid">
            <img
              className="phone"
              src={smartphone}
              alt="phone"
              height="500px"
              width="auto"
            />
            <div className="description">
              <p className="paragraph"> Nowadays, consumers are manipulated by the overall shopping experience. <br/>
                GoGrocery wants to change that.
              </p>
              <p className="paragraph"> 
              By using happy music, bright colors, large letters, and having only one entrance, 
              supermarkets plan to rob you of your time and money. They make you want to stay there 
              longer and spend more money on things you probably do not need.
              </p>
              <p className="paragraph">
              Not knowing where things are placed or not having a grocery list prepared 
              before going shopping can make the experience unpleasant and overwhelming, 
              making the consumer waste more time and possibly more money. 
              </p>
              <p className="paragraph">
              Our main vision is to help people “Have it their way”. Either they want minimal 
              time shopping or to look through all the discounted items, the app will calculate 
              an itinerary made to suit the user’s needs. The app will allow for the elaboration 
              of a grocery list with the exact products available in store, then when the list is done 
              and all the shopping preferences are selected (like time wise, order wise, etc) an itinerary 
              will be presented. This itinerary will make grocery shopping a more pleasant experience.
              </p>
              <p className="paragraph">
              Shop with <strong>GoGrocery</strong>.
              </p>
            </div>
          </div>

          <div className="separator2" />

          <div className="faq">
            <h2 className="faq-text">FAQ</h2>
            <div className="accordion">
              <IonAccordionGroup className="accordion-fix">

              <IonAccordion className="accordion-fix">
                  <IonItem slot="header">
                    <IonLabel className="question ion-text-wrap">
                    What is GoGrocery's purpose?
                    </IonLabel>
                  </IonItem>
                  <IonList slot="content">
                    <IonItem>
                      <IonLabel color="tertiary" className="ion-text-wrap">
                      Our main vision is to help people “Have it their way”. 
                      Either they want minimal time shopping or to look through 
                      all the discounted items, the app will calculate an itinerary 
                      made to suit the user’s needs. The app will allow for the 
                      elaboration of a grocery list with the exact products available 
                      in store, then when the list is done and all the shopping 
                      preferences are selected (like time wise, order wise, etc) 
                      an itinerary will be presented. This itinerary will make grocery 
                      shopping a more pleasant experience.

                      </IonLabel>
                    </IonItem>
                  </IonList>
                </IonAccordion>

                <IonAccordion>
                  <IonItem slot="header">
                    <IonLabel className="question ion-text-wrap">
                     Can I create an account without commitment?
                    </IonLabel>
                  </IonItem>
                  <IonList slot="content">
                    <IonItem>
                      <IonLabel color="tertiary" className="ion-text-wrap">
                        You can create an account at any time without needing to use it, ever!
                        Althouh we do recommend it ;) 
                        <br/>
                        You can delete your account anytime and anywhere.
                      </IonLabel>
                    </IonItem>
                  </IonList>
                </IonAccordion>

                <IonAccordion >
                  <IonItem slot="header">
                    <IonLabel className="question ion-text-wrap">
                    Why should I use GoGrocery?
                    </IonLabel>
                  </IonItem>
                  <IonList slot="content">
                    <IonItem>
                      <IonLabel color="tertiary" className="ion-text-wrap"> 
                      Either you want minimal time shopping or to look through 
                      all the discounted items, GoGrocery will calculate an itinerary 
                      made to suit your needs. The app will allow for the 
                      elaboration of a grocery list with the exact products available 
                      in store, then when the list is done and all your shopping 
                      preferences are selected an itinerary will be presented. This itinerary 
                      will make grocery shopping a more pleasant experience.
                      </IonLabel>
                    </IonItem>
                  </IonList>
                </IonAccordion>
     
              </IonAccordionGroup>
            </div>
          </div>

          <div className="footer">
            <p className="paragraph">
             <IonText className="green"> Get in contact with us through <strong>gogrocery@gogrocery.com</strong> or <strong>210 000 000</strong></IonText>
            </p>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
