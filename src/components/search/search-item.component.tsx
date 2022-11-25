import "./search-item.styles.scss";

const SearchItem = ({ itemName, itemImg }: any) => {
  return (
    <>
      <div className="search-item">
        <div className="search-item-name">{itemName}</div>
        <img
          src={process.env.PUBLIC_URL + "/img/" + itemImg}
          className="search-item-image"
        />
      </div>
    </>
  );
};

export default SearchItem;
