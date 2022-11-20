import ProductCard from "./product-card.component";

import "./product-list.scss";

const ProductList = ({ products, category }: any) => {
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
            ></ProductCard>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductList;
