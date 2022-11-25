import "./search-bar.styles.scss";
import SearchItem from "./search-item.component";
import { Items } from "../../data/items";

const SearchBar = ({query, onSelectItem, onSetProductInfo, onProductSelect}: any) => {
  console.log(query)
  return (
    <>
      <div id="search-bar-comp" className="search-bar">
        {Items.filter((item) => {
          if (query === "") return item;
          else if (item.name.toLowerCase().includes(query.toLowerCase()))
            return item;
        }).map((item) => (
          <SearchItem
            itemName={item.name}
            itemImg={item.img}
            itemPrice={item.price}
            onSelectItem={onSelectItem}
            onSetProductInfo={onSetProductInfo}
            onProductSelect={onProductSelect}
          />
        ))}
      </div>
    </>
  );
};

export default SearchBar;
