import React from "react";
import ProductCard from "./productCard/ProductCard";
import "./sectionDisplay.css";

export default function SectionDisplay() {
  return(
    <div className="sectionDisplay">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
    </div>
    )
}
