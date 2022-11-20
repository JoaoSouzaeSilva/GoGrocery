import {
  IonButton,
  IonButtons,
  IonContent,
  IonPage,
  IonToolbar,
} from "@ionic/react";
import CategoriesList from "../components/categories/categories-list.component";
import ProductList from "../components/products/product-list.component";
import headerImg from "../images/header.png";
import { Categories } from "../data/items.js";
import { SelectedItems } from "../data/selectedItems.js";

import "./CategoriesPage.scss";
import { useState } from "react";
import SlideMenu from "../components/slide-menu/slide-menu.component";

const CategoriesPage = () => {
  const [open, setOpen] = useState(false);

  const toggleSlidingMenu = () => {
    setOpen(!open);
  };

  return (
    <>
      <IonPage>
        <IonToolbar className="ion-toolbar-categories">
          <img className="img" slot="start" src={headerImg} />
          <div className="img_text">have it your way</div>
          <IonButtons slot="end" className="ion-buttons-categories">
            <IonButton shape="round">
              <p className="button-primary">Back</p>
            </IonButton>
          </IonButtons>
        </IonToolbar>
        <SlideMenu enabled={open} selectedItems={SelectedItems} />
        <div className={open ? "dimmed" : "aux"}>
          <IonContent className="ion-content-categories">
            <div className="first-grid">
              <h1 className="app-name">GoGrocery</h1>
              <input
                type="text"
                className="search"
                placeholder="What are you looking for?"
                color="#cbd2c3"
                maxLength={38}
              ></input>
              <button className="see-list" onClick={toggleSlidingMenu}>
                See List
              </button>
              <button className="finish">Finish</button>
            </div>
            <div className="divider" />
            <p className="categories-header">Categories</p>
            <CategoriesList categories={Categories} />
            <div className="all-categories">
              {Categories.map((category: any) => (
                <div id={category.name} className="items">
                  <ProductList
                    products={category.products}
                    category={category.name}
                  />
                </div>
              ))}
            </div>
          </IonContent>
        </div>
      </IonPage>
    </>
  );
};

export default CategoriesPage;
