import "./product-card.styles.scss";

const ProductCard = ({
  productName,
  productPrice,
  productImg,
  onSelectItem,
  onSetProductInfo,
}: any) => {

  return (
    <>
      <div
        className="product-element"
        onClick={() => {
          onSelectItem();
          onSetProductInfo(productName, productImg, productPrice);
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
