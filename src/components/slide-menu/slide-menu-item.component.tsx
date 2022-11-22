import "./slide-menu-item.scss";

const SlideMenuItem = ({ itemName, quantity, img }: any) => {
  return (
    <>
      <div className="menu-item">
        <img
          className="item-image"
          src={process.env.PUBLIC_URL + "/img/" + img}
        />
        <p className="item-name">{itemName}</p>
        <p className="item-quantity">{quantity}</p>
        <div className="item-divider" />
      </div>
    </>
  );
};

export default SlideMenuItem;
