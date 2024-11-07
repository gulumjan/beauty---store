import React from "react";
import CategoryPage from "./CategoryPage";
import SaleProducts from "./flashSales/SaleProducts";
import BrowseBy from "./browseBy/BrowseBy";
import BestSalling from "./bagsInHome/BagsHome";
import OurProduct from "./ourProduct/OurProduct";
import Shop from "./shop/Shop";
import Collection from "./collection/Collection";

const HomePage = () => {
  return (
    <>
      <CategoryPage />
      <SaleProducts />
      <BrowseBy />
      <BestSalling />
      <Collection />
      <OurProduct />
      <Shop />
    </>
  );
};

export default HomePage;
