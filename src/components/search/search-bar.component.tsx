import "./search-bar.styles.scss";
import SearchItem from "./search-item.component";
import { Items } from "../../data/items";

const SearchBar = (query: any) => {
  return (
    <>
      <div className="search-bar">
        {Items.filter((item) => {
          if (query === "") return item;
          else if (item.name.toLowerCase().includes(query.query.toLowerCase()))
            return item;
        }).map((item) => (
          <SearchItem
            itemName={item.name}
            itemImg={item.img}
            itemPrice={item.price}
          />
        ))}
      </div>
    </>
  );
};

export default SearchBar;
