import { useState } from "react";
import AddProduct from "./add-to-list.component";
import "./product-card.styles.scss";

const ProductCard = ({
  productName,
  productPrice,
  productImg,
  onSelectItem,
  onSetProductInfo,
}: any) => {
  /*  let info: any[] = [];
  const handleGetData = (name: any, image: any) => {
    info.push(name);
    info.push(image);
    console.log(info)
  }; */

  return (
    <>
      <div
        className="product-element"
        onClick={() => {
          onSelectItem();
          onSetProductInfo(productName, productImg);
        }}
      >
        <img
          className="product-img"
          src={process.env.PUBLIC_URL + "/img/" + productImg}
        ></img>
        <div className="img-text-divider" />
        <div className="text-area">
          <p className="product-name">{productName}</p>
          <p className="product-price">{productPrice}</p>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
