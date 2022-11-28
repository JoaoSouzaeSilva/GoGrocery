import ItineraryListItem from "./itinerary-list-item.component";

import "./itinerary-list.scss";

const SlideMenu = ({ selectedItems }: any) => {

  return (
    <>
      <div className={`menu-enabled"}`}>
        <div className="menu-content">
          <div className={`content`}>
            <div className="content-divider" />
            <p className="content-header">Current selection</p>
            <div className="content-divider" />
            <div className="content-items">
              {selectedItems.map((item: any) => (
                <div className="content-item">
                  <ItineraryListItem
                    itemName={item[0]}
                    quantity={item[2]}
                    img={item[1]}
                  ></ItineraryListItem>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SlideMenu;
