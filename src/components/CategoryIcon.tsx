import { IonCol, IonGrid, IonImg, IonRow } from "@ionic/react";

import "./CategoryIcon.css";

const CategoryIcon = ({ categoryName, categoryImage }: any) => {
  return (
    <>
      <div>
        <a href="/home">
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
