import "./add-to-list.styles.scss";

const AddToList = ({ name, img, price_kg, onAddItem }: any) => {
  return (
    <>
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
          <button className="quantity-down-button">
            <p className="minus">-</p>
          </button>
          <div className="quantity-selected">1</div>
          <button className="quantity-up-button">
            <p className="plus">+</p>
          </button>
        </div>
        <button
          className="add-to-list-button"
          onClick={() => {
            onAddItem(name, img);
          }}
        >
          <p className="add-to-list-text">Add to list</p>
        </button>
      </div>
    </>
  );
};

export default AddToList;
