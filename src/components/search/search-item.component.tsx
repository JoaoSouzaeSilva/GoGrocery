import "./search-item.styles.scss";

const SearchItem = ({
  itemName,
  itemImg,
  itemPrice,
  onSelectItem,
  onSetProductInfo,
  onProductSelect,
}: any) => {
  return (
    <>
      {itemName !== "none" && (
        <div
          className="search-item"
          onClick={() => {
            onSelectItem();
            onSetProductInfo(itemName, itemImg, itemPrice);
            onProductSelect();
          }}
        >
          <div className="search-item-name">{itemName}</div>
          <img
            src={process.env.PUBLIC_URL + "/img/" + itemImg}
            className="search-item-image"
          />
          <div className="search-item-divider"></div>
        </div>
      )}
      {itemName === "none" && (
        <div className="no-items">
          There are no items with the given name...
        </div>
      )}
    </>
  );
};

export default SearchItem;
