import { useState } from "react";
import { SelectedItems } from "../../data/selectedItems.js";
import SlideMenuItem from "./slide-menu-item.component";

import "./slide-menu.styles.scss";

const SlideMenu = ({ selectedItems, enabled }: any) => {
  return (
    <>
      <div className={`menu-${enabled ? "enabled" : "disabled"}`}>
        <div className="menu-content">
          <div className={`content${enabled ? "" : "-hide"}`}>
            <div className="content-divider" />
            <p className="content-header">Current selection</p>
            <div className="content-divider" />
            <div className="content-items">
              {SelectedItems.map((item: any) => (
                <div className="content-item">
                  <SlideMenuItem
                    itemName={item.name}
                    quantity={item.quantity}
                    img={item.img}
                  ></SlideMenuItem>
                </div>
              ))}
            </div>
            <button className="finish-in-menu">Finish</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SlideMenu;
