import { Redirect, Route, Switch } from "react-router-dom";
import { IonApp, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import Home from "./pages/Home";
import About from "./pages/About";

import CategoriesPage from "./pages/CategoriesPage"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"


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
import CategoryIcon from "./components/categories/category-icon.component";
import CategoriesList from "./components/categories/categories-list.component";
import ProductCard from "./components/products/product-card.component";
import ProductList from "./components/products/product-list.component";
import SlideMenu from "./components/slide-menu/slide-menu.component";
import SlideMenuItem from "./components/slide-menu/slide-menu-item.component";

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
          <Redirect exact path="/" to="/home"/> 
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/categories">
            <CategoriesPage/>
          </Route>
          <Route exact path="/signin">
            <SignIn />
          </Route>
          <Route exact path="/signup">
            <SignUp/>
          </Route>
          <Route exact path="/categoryIcon">
            <CategoryIcon />
          </Route>
          <Route exact path="/categoriesList">
            <CategoriesList />
          </Route>
          <Route exact path="/product">
            <ProductCard />
          </Route>
          <Route exact path="/product-list">
            <ProductList />
          </Route>
          <Route exact path="/slide-menu">
            <SlideMenu />
          </Route>
          <Route exact path="/slide-menu-item">
            <SlideMenuItem />
          </Route>
        </Switch>
      </IonReactRouter>
    </>
  );
};

export default App;
