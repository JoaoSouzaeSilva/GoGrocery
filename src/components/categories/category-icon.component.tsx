import "./category-icon.styles.scss";
import React from "react";

const CategoryIcon = ({ categoryName, categoryImage }: any) => {
  const handleClickScroll = (id: any) => {
    return (event: React.MouseEvent) => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
      event.preventDefault();
    };
  };

  return (
    <>
      <div className="icon-element">
        <a onClick={handleClickScroll(categoryName)}>
          <img
            className="image"
            src={process.env.PUBLIC_URL + "/img/" + categoryImage}
          ></img>
        </a>
        <p className="image-name">{categoryName}</p>
      </div>
    </>
  );
};

export default CategoryIcon;
