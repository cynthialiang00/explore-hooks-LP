import React from 'react';
import ProductListItem from "../ProductListItem";
import ProductDetails from "../ProductDetails";
import './ProductView.css'
import {useState} from 'react'

function ProductView({ products }) {

  // TODO: Replace with state variable

  const [sideOpen, setSideOpen] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState('');
  // console.log("setSelectedProduct: ", setSelectedProduct)
  console.log(selectedProduct);
  return (
    <div className="product-view">
      <div className="product-main-area">
        <h1>Products</h1>
        <div className="product-list" >
          {products.map(item =>
            <ProductListItem
              key={item.id}
              product={item}
              // update selectedProduct to be item when this item is clicked
              onClick={() => setSelectedProduct(item)}
              // if selectedProduct is the same as the item. highlight it
              isSelected = {item.id === selectedProduct.id}
              
            />
          )}
        </div>
      </div>
      <div className="product-side-panel">
        <div className="product-side-panel-toggle-wrapper">
          <div className="product-side-panel-toggle"
               onClick={() => setSideOpen(!sideOpen)}>
                {/* {console.log(sideOpen)} */}
            {sideOpen ? '>' : '<'}
          </div>
        </div>
        <ProductDetails visible={sideOpen} product={selectedProduct} />
      </div>
    </div>
  );
}

export default ProductView;
