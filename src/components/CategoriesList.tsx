import { IonCol, IonGrid, IonRow } from "@ionic/react";
import CategoryIcon from "./CategoryIcon";

const CategoriesList = ({ categories }: any) => {
  return (
    <>
      <IonGrid>
        <IonRow>
          {categories.map((category: any) => (
            <IonCol className={category.id}>
              <CategoryIcon
                categoryName={category.name}
                categoryImage={category.img}
              />
            </IonCol>
          ))}
        </IonRow>
      </IonGrid>
    </>
  );
};

export default CategoriesList;
