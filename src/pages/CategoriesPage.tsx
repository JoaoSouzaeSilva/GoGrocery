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

import "./CategoriesPage.scss";
import { useEffect, useState } from "react";
import SlideMenu from "../components/slide-menu/slide-menu.component";
import AddToList from "../components/products/add-to-list.component";
import SearchBar from "../components/search/search-bar.component";
import { useHistory } from "react-router";

const CategoriesPage = () => {
  let history: any = useHistory();
  let initialAddedItems: any[] = [];
  let initialProductInfo: any[] = [];
  const [open, setOpen] = useState(false);
  const [itemSelected, setItemSelected] = useState(false);
  const [searching, setSearching] = useState(false);
  const [productInfo, setProductInfo] = useState(initialProductInfo);
  const [addedItems, setAddedItems] = useState(initialAddedItems);
  const [itemQuantity, setItemQuantity] = useState(1);
  const [searchInput, setSearchInput] = useState("");

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
    productPriceKG: any,
    productQuantity: any
  ) => {
    setProductInfo([
      productName,
      productImage,
      productPriceKG,
      productQuantity,
    ]);
    return productInfo;
  };

  //Return true if the item is already in the list, false otherwise
  const alreadyInList = (itemName: any, itemArray: any) => {
    let aux: any[] = [];
    itemArray.forEach((item: any) => {
      aux.push(item[0]);
    });
    return aux.includes(itemName);
  };

  //Add the selected item to a list of items that will be listed in the sliding menu
  const handleAddItem = (name: any, img: any) => {
    if (!alreadyInList(name, addedItems)) {
      if (itemQuantity === 0) setAddedItems((prevItems) => [...prevItems]);
      else
        setAddedItems((prevItems) => [...prevItems, [name, img, itemQuantity]]);
      return addedItems;
    } else {
      if (itemQuantity === 0) {
        setAddedItems((prevItems) => {
          const updatedItems = prevItems.filter((item) => item[0] !== name);
          return updatedItems;
        });
      } else {
        setAddedItems((prevItems) => {
          const updatedItems = prevItems.filter((item) => item[0] !== name);
          const newItems = [...updatedItems, [name, img, itemQuantity]];
          return newItems;
        });
      }
    }
  };

  const handleChangeQuantity = (action: any, quantity: any) => {
    switch (action) {
      case "up":
        quantity = quantity + 1;
        setItemQuantity(quantity);
        break;
      case "down":
        if (quantity > 1) {
          quantity = quantity - 1;
          setItemQuantity(quantity);
        }
        break;
    }
    return itemQuantity;
  };

  useEffect(() => {
    setItemQuantity(1);
  }, [itemSelected]);

  const handleDeleteItem = (itemName: any) => {
    setAddedItems((prevItems) => {
      const updatedItems = prevItems.filter((item) => item[0] !== itemName);
      return updatedItems;
    });
  };

  const stopSearching = () => {
    setSearching(false);
    setSearchInput("");
  };

  let itemCard = itemSelected ? (
    <AddToList
      name={productInfo[0]}
      img={productInfo[1]}
      price_kg={productInfo[2]}
      quantity={itemQuantity}
      onAddItem={handleAddItem}
      onChangeQuantity={handleChangeQuantity}
      onClickAddItem={handleSelectItem}
    />
  ) : undefined;

  const handleItenerarySetup = () => {
    let productList: any[] = [];
    addedItems.forEach((item: any) => productList.push(item));
    let user = JSON.parse(localStorage.getItem(history.location.state.email)!);
    let newUser = JSON.stringify([user, { items: productList }]);
    localStorage.setItem(user.email, newUser);
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
        <SlideMenu
          enabled={open}
          selectedItems={addedItems}
          onDeleteItem={handleDeleteItem}
        />
        {itemCard}
        <div className={open ? "dimmed" : itemSelected ? "dimmed" : "undimmed"}>
          <IonContent
            id="ion-content"
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
                placeholder="Enter the name of the product you are looking for"
                color="#cbd2c3"
                maxLength={38}
                onChange={(event) => setSearchInput(event.target.value)}
                value={searchInput}
                onClick={() => setSearching(true)}
              ></input>
              {searching && searchInput.length !== 0 && (
                <div id="search-menu">
                  <SearchBar
                    query={searchInput}
                    onSelectItem={handleSelectItem}
                    onSetProductInfo={handleSetProductInfo}
                    onProductSelect={stopSearching}
                  />
                </div>
              )}
              <button className="see-list" onClick={toggleSlidingMenu}>
                See List
              </button>
              <button
                id="it-menu"
                className="itinerary-setup"
                onClick={() => {
                  handleItenerarySetup();
                }}
              >
                Itinerary setup
              </button>
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
