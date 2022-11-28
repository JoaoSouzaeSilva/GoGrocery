import "./itinerary-list-item.scss"

const ItineraryListItem = ({ itemName, quantity, img }: any) => {
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
    </>
  );
};

export default ItineraryListItem;
