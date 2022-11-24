import "./slide-menu-item.scss";

const SlideMenuItem = ({ itemName, quantity, img, onDeleteItem }: any) => {
  return (
    <>
      <div className="menu-item">
        <img
          className="item-image-menu"
          src={process.env.PUBLIC_URL + "/img/" + img}
        />
        <p className="item-name-menu">{itemName}</p>
        <p className="item-quantity-menu">{quantity + "x"}</p>
        <div className="item-divider" />
      </div>
      <div
        className="remove-from-list-button"
        onClick={() => onDeleteItem(itemName)}
      />
    </>
  );
};

export default SlideMenuItem;
