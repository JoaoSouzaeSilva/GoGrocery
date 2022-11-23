import { SelectedItems } from "../../data/selectedItems.js";
import SlideMenuItem from "./slide-menu-item.component";

import "./slide-menu.styles.scss";

const SlideMenu = ({ enabled, selectedItems }: any) => {

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
                  ></SlideMenuItem>
                </div>
              ))}
            </div>
            <button className="finish-in-menu" >Finish</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SlideMenu;
