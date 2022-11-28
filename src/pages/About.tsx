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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus imperdiet diam non eros condimentum, eu convallis
                mauris iaculis. Maecenas pretium libero in bibendum lacinia.
                Aenean facilisis, erat in sodales imperdiet, lorem nisi tempus
                turpis, ac suscipit tellus nulla non massa. Fusce eu interdum
                purus. Integer ac ante elit. Duis et erat id nunc accumsan
                dapibus dapibus vitae velit. Fusce laoreet felis a vehicula
                sollicitudin. In cursus, libero ac semper mollis, metus diam
                viverra sapien, a vestibulum nisl leo at ligula. Etiam vel nibh
                sit amet sem lobortis interdum eget scelerisque tortor. Praesent
                euismod dictum elit vitae sodales. Aliquam dapibus, nibh nec
                pulvinar rhoncus, diam arcu mollis purus, sed vulputate felis mi
                quis tellus. Curabitur dignissim dui eget viverra imperdiet.
                Nulla maximus augue vitae urna convallis, ac tristique felis
                imperdiet. Aenean et mi odio. Nunc ac interdum neque, ac
                ultricies magna. Curabitur vel ipsum mi. Etiam facilisis libero
                id mauris varius mattis. Donec at placerat velit. Curabitur
                malesuada imperdiet semper. Nullam efficitur ullamcorper augue
                sed egestas. Curabitur volutpat eros ut dictum viverra. Nulla
                lobortis nisi sed enim porta ultrices. Mauris a mi cursus,
                rhoncus est ut, ultrices arcu. Mauris at congue ante. Nam in
                nisi quis mauris sagittis ornare sit amet ut justo. Aliquam eget
                magna blandit, rhoncus enim lobortis, bibendum ligula. Fusce
                varius, quam vitae suscipit volutpat, risus diam pellentesque
                ante, vel accumsan lacus tortor eu ex. Maecenas accumsan diam
                lectus. Proin eleifend imperdiet augue. Sed elit eros, varius in
                lorem nec, elementum tempus erat. Sed sit amet pellentesque
                elit. Aliquam lacinia, velit eu auctor varius, arcu arcu rhoncus
                eros, ac semper libero diam non mauris. In id magna convallis,
                ultricies nisi eu, rhoncus nibh. Maecenas quis enim et sem
                congue facilisis. Pellentesque luctus pellentesque est aliquet
                egestas. Maecenas dignissim pellentesque tortor ut cursus.
              </p>
            </div>
          </div>
          <div className="product-about">
            <div className="product-header-about">
              <h1 className="product-title">The product</h1>
            </div>
            <div className="product-text">
              <p className="text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus imperdiet diam non eros condimentum, eu convallis
                mauris iaculis. Maecenas pretium libero in bibendum lacinia.
                Aenean facilisis, erat in sodales imperdiet, lorem nisi tempus
                turpis, ac suscipit tellus nulla non massa. Fusce eu interdum
                purus. Integer ac ante elit. Duis et erat id nunc accumsan
                dapibus dapibus vitae velit. Fusce laoreet felis a vehicula
                sollicitudin. In cursus, libero ac semper mollis, metus diam
                viverra sapien, a vestibulum nisl leo at ligula. Etiam vel nibh
                sit amet sem lobortis interdum eget scelerisque tortor.
              </p>
            </div>
          </div>
          <div className="team">
            <div className="team-header">
              <h1 className="team-title">The team</h1>
            </div>
            <div className="team-text">
              <p className="text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus imperdiet diam non eros condimentum, eu convallis
                mauris iaculis. Maecenas pretium libero in bibendum lacinia.
                Aenean facilisis, erat in sodales imperdiet, lorem nisi tempus
                turpis, ac suscipit tellus nulla non massa. Fusce eu interdum
                purus. Integer ac ante elit. Duis et erat id nunc accumsan
                dapibus dapibus vitae velit. Maecenas accumsan diam lectus.
              </p>
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default About;
