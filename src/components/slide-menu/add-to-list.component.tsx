import "./add-to-list.styles.scss";

const AddToList = () => {
  return (
    <>
      <div className="select-quantity">
        <p className="item-name">Chicken liver</p>
        <div className="image-container">
          <img
            className="item-to-add"
            src={process.env.PUBLIC_URL + "/img/meat/liver.png"}
          ></img>
          <div className="quantity-selector">
            <button className="quantity-down">
              <p className="down-text">-</p>
            </button>
            <button className="quantity-up">
              <p className="up-text">+</p>
            </button>
          </div>
        </div>
        <button className="add-to-list-button">
          <p className="add-to-list-text">Add to list</p>
        </button>
      </div>
    </>
  );
};

export default AddToList;
