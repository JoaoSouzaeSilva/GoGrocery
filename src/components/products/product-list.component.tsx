import ProductCard from "./product-card.component";

import "./product-list.styles.scss";

const ProductList = ({
  products,
  category,
  onSelectItem,
  onSetProductInfo,
}: any) => {

  return (
    <>
      <div className="text-area-grid">
        <p className="product-header">{category}</p>
      </div>
      <div id={category} className="product-list">
        {products.map((product: any) => (
          <div className="product-item">
            <ProductCard
              productName={product.name}
              productPrice={product.price}
              productImg={product.img}
              onSelectItem={onSelectItem}
              onSetProductInfo={onSetProductInfo}
            ></ProductCard>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductList;
