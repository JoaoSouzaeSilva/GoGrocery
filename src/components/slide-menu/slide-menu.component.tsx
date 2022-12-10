import SlideMenuItem from "./slide-menu-item.component";
import { useHistory } from "react-router";

import "./slide-menu.styles.scss";

const SlideMenu = ({
  enabled,
  selectedItems,
  onDeleteItem,
  addedItems,
}: any) => {
  let history: any = useHistory();

  const handleItenerarySetup = () => {
    let productList: any[] = [];
    addedItems.forEach((item: any) => productList.push(item));
    history.push("/itinerary", {
      id: history.location.state.id,
      list: productList,
      new: true,
    });
  };

  const handleSaveList = () => {
    let productList: any[] = [];
    addedItems.forEach((item: any) => productList.push(item));
    history.push("/listname", {
      id: history.location.state.id,
      list: productList,
    });
  };

  return (
    <>
      <div className={`menu-${enabled ? "enabled" : "disabled"}`}>
        <div className="menu-content">
          <div className={`content${enabled ? "" : "-hide"}`}>
            <div className="content-divider" />
            <p className="content-header">Current selection</p>
            <div className="content-divider" />
            <div className="content-items">
              {selectedItems.map((item: any) => (
                <div className="content-item">
                  <SlideMenuItem
                    itemName={item[0]}
                    quantity={item[2]}
                    img={item[1]}
                    onDeleteItem={onDeleteItem}
                  ></SlideMenuItem>
                </div>
              ))}
            </div>
            {selectedItems.length > 0 && (
              <button
                className="finish-in-menu"
                onClick={() => handleItenerarySetup()}
              >
                Itinerary setup
              </button>
            )}
            {selectedItems.length > 0 && (
              <button className="save-in-menu" onClick={() => handleSaveList()}>
                Save list
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SlideMenu;
