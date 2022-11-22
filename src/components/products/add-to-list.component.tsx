import "./add-to-list.styles.scss";

const AddToList = (productInformation: any) => {

  return (
    <>
      <div className="select-quantity">
        <p className="item-name">{productInformation.name}</p>
        <div className="image-container">
          <img
            className="item-to-add"
            src={process.env.PUBLIC_URL + "/img/" + productInformation.img}
          ></img>
          <div className="quantity-selector"></div>
        </div>
        <button className="add-to-list-button">
          <p className="add-to-list-text">Add to list</p>
        </button>
      </div>
    </>
  );
};

export default AddToList;
