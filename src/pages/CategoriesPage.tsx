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
import AddToList from "../components/products/add-to-list.component";

const CategoriesPage = () => {
  let noItemsArray: any[] = [];
  let array: any[] = [];
  const [open, setOpen] = useState(false);
  const [itemSelected, setItemSelected] = useState(false);
  const [productInfo, setProductInfo] = useState(array);
  const [addedItems, setAddedItems] = useState(noItemsArray);

  //Define wether the sliding menu is toggled or not
  const toggleSlidingMenu = () => {
    setOpen(!open);
  };

  //Define wether the product card is toggled or not
  const handleSelectItem = () => {
    setItemSelected(!itemSelected);
  };

  //Used to show the info of a certain item when we click it (name,image,price)
  const handleSetProductInfo = (
    productName: any,
    productImage: any,
    productPriceKG: any
  ) => {
    setProductInfo([productName, productImage, productPriceKG]);
    return productInfo;
  };

  //Add the selected item to a list of items that will be listed in the sliding menu
  const handleAddItem = (name: any, img: any) => {
    setAddedItems((prevItems) => [...prevItems, [name, img]]);
    return addedItems;
  };

  let itemCard = itemSelected ? (
    <AddToList
      name={productInfo[0]}
      img={productInfo[1]}
      price_kg={productInfo[2]}
      onAddItem={handleAddItem}
    />
  ) : undefined;

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
        <SlideMenu enabled={open} selectedItems={addedItems} />
        {itemCard}
        <div className={open ? "dimmed" : itemSelected ? "dimmed" : "undimmed"}>
          <IonContent
            className="ion-content-categories"
            onClick={
              open
                ? toggleSlidingMenu
                : itemSelected
                ? handleSelectItem
                : undefined
            }
          >
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
                    onSelectItem={handleSelectItem}
                    onSetProductInfo={handleSetProductInfo}
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
