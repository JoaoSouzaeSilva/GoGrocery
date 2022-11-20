import CategoryIcon from "./category-icon.component";

import "./categories-list.styles.scss";

const CategoriesList = ({ categories }: any) => {
  return (
    <>
      <div className="categories-list">
        {categories.map((category: any) => (
          <div className="icon">
            <CategoryIcon
              categoryName={category.name}
              categoryImage={category.img}
            />
          </div>
        ))}
      </div>
    </>
  );
};
export default CategoriesList;
