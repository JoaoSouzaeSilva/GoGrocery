import {
  IonButton,
  IonButtons,
  IonContent,
  IonPage,
  IonToolbar,
} from "@ionic/react";
import { useHistory } from "react-router-dom";
import headerImg from "../images/header.png";

import "./About.css";

const About = () => {
  let history = useHistory();
  return (
    <IonPage>
      <IonToolbar className="ion-toolbar-about">
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
      <IonContent className="ion-content-about">
        <div className="about-container">
          <div className="why-u-need">
            <div className="why-u-need-header">
              <h1 className="why-u-need-title">
                The reason you need GoGrocery
              </h1>
            </div>
            <div className="why-u-need-text">
              <p className="text">
                Nowadays, consumers are manipulated by the overall shopping
                experience. By using happy music, bright colors, large letters,
                and having only one entrance, supermarkets plan to rob you of
                your time and money. They make you want to stay there longer and
                spend more money on things you probably do not need. Not knowing
                where things are placed or not having a grocery list prepared
                before going shopping can make the experience unpleasant and
                overwhelming, making the consumer waste more time and possibly
                more money. Our main vision is to help people “Have it their
                way”. Either they want minimal time shopping or to look through
                all the discounted items, the app will calculate an itinerary
                made to suit the user's needs. The app will allow for the
                elaboration of a grocery list with the exact products available
                in store, then when the list is done and all the shopping
                preferences are selected (like time wise, order wise, etc) an
                itinerary will be presented. This itinerary will make grocery
                shopping a more pleasant experience.
              </p>
            </div>
          </div>
          <div className="product-about">
            <div className="product-header-about">
              <h1 className="product-title">The product</h1>
            </div>
            <div className="product-text">
              <p className="text">
                GoGrocery empowers you to take more control over your grocery
                shop trips, by using GoGrocery you can easily dodge unintended
                advertising, save more time for yourself, and avoid getting lost
                in new supermarkets. Our app is simple, intuitive, and
                welcoming. With GoGrocery customers will feel at home in any
                supermarket they go to. The team at GoGrocery has a challenge
                for you! Register in our app, try it for a month, if after one
                month you don't love it, we will give you your money back! In a
                completely unrelated note, GoGrocery is completely free for
                anyone and everyone.
              </p>
            </div>
          </div>
          <div className="team">
            <div className="team-header">
              <h1 className="team-title">The team</h1>
            </div>
            <div className="team-text">
              <p className="text">
                This project was made by four NOVA students in the context of
                the Human-Machine Interaction course in the Computer Science and
                Engineering Master's Degree. Each had a very specific role in
                the GoGrocery affairs, and are as follows: Bakery Associate:
                Débora Dias Butcher: João Souza e Silva Cashier: Duarte Pereira
                Fruit Specialist: Rafael Costa
              </p>
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default About;
