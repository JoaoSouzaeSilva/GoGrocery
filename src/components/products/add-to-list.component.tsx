import { IonContent, IonPopover } from "@ionic/react";
import { useState } from "react";
import "./add-to-list.styles.scss";
import SuccessPopOver from "./success-add-item.component";

const AddToList = ({
  name,
  img,
  price_kg,
  onAddItem,
  quantity,
  onChangeQuantity,
}: any) => {
  const [itemAdded, setItemAdded] = useState(false);

  const handleSuccessPopOver = () => {
    setItemAdded(!itemAdded);
    setTimeout(() => {
      setItemAdded(false);
    }, 1000);
  };

  return (
    <>
      {itemAdded && <SuccessPopOver />}
      <div className="select-quantity">
        <p className="item-name">{name}</p>
        <div className="image-container">
          <img
            className="item-to-add"
            src={process.env.PUBLIC_URL + "/img/" + img}
          ></img>
          <p className="price-kg-text">{price_kg}</p>
          <p className="price-unit-text">Unit Price</p>
        </div>
        <div className="quantity-selector">
          <button
            className="quantity-down-button"
            onClick={() => onChangeQuantity("down", quantity)}
          >
            <p className="minus">-</p>
          </button>
          <div className="quantity-selected">{quantity}</div>
          <button
            className="quantity-up-button"
            onClick={() => onChangeQuantity("up", quantity)}
          >
            <p className="plus">+</p>
          </button>
        </div>
        <button
          className="add-to-list-button"
          onClick={() => {
            onAddItem(name, img);
            handleSuccessPopOver();
          }}
        >
          <p className="add-to-list-text">Add to list</p>
        </button>
      </div>
    </>
  );
};

export default AddToList;
