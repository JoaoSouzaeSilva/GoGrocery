import { Redirect, Route, Switch } from "react-router-dom";
import { IonApp, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import Home from "./pages/Home";
import About from "./pages/About";

import CategoriesPage from "./pages/CategoriesPage";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import UserLists from "./pages/UserLists";
import List from "./pages/List";
import NotFoundPage from "./pages/NotFoundPage";
import Profile from "./pages/Profile";
import SaveList from "./pages/SaveList";
import Choice from "./pages/Choice";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import ListName from "./pages/ListName";
import ThankYou from "./pages/ThankYou";
import Itinerary from "./pages/Itinerary";

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <Routing />
  </IonApp>
);

const Routing = () => {
  return (
    <>
      <IonReactRouter>
        <Switch>
          <Route exact path="/home">
            <Home />
          </Route>
          <Redirect exact path="/" to="/home" />
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/categories">
            <CategoriesPage />
          </Route>
          <Route exact path="/signin">
            <SignIn />
          </Route>
          <Route exact path="/signup">
            <SignUp />
          </Route>
          <Route exact path="/lists">
            <UserLists />
          </Route>
          <Route exact path="/lists/:id">
            <List />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
          <Route exact path="/savelist">
            <SaveList />
          </Route>
          <Route exact path="/choice">
            <Choice />
          </Route>
          <Route exact path="/listname">
            <ListName />
          </Route>
          <Route exact path="/thankyou">
            <ThankYou />
          </Route>
          <Route exact path="/itinerary">
            <Itinerary />
          </Route>
          <Route>
            <NotFoundPage />
          </Route>
        </Switch>
      </IonReactRouter>
    </>
  );
};

export default App;
