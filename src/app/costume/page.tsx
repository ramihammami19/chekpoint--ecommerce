"use client";

import { useEffect, useState } from "react";
import "./page.css";
import { preinitModule } from "react-dom";
// import  {Iproduct,products}  from "../../../models/produit.model";
const ProductSection: React.FC = () => {
  const [productList, setProductList] = useState<any>([]);
  useEffect(() => {
    fetch("http://localhost:3000/api/produits/get-products?cat=costume")
      .then((response) => response.json())
      .then((response) => setProductList(response))
      .catch((err) => console.log(err));
  }, []);
  

  const renderStars = () => (
    <div className="star">
      {Array.from({ length: 5 }).map((_, index) => (
        <i className="fas fa-star" key={index}></i>
      ))}
    </div>
  );

  return (
    <>
      <section>
       
      </section>

      <section id="product1" className="section-p1">
        <h2>Chose your costume</h2>
        <div className="pro-container">
          {productList.map((product:any, index:number) => {
            console.log(product);
            
            return (
              <div className="pro" key={index}>
                <div className="des">
                <img src={product?.imageSrc} alt="" />
                  <h5>{product.name}</h5>
                  <span>{product.description}</span>
                  {renderStars()}
                  <h4>{product.price}</h4>
                </div>
                <a href="#">
                  <i className="fal fa-shopping-cart cart"></i>
                </a>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default ProductSection;
