"use client";
import HeroBanner from "./banner/HeroBanner";
import CategoryList from "./category/categoryList/CategoryList";
import scss from "./CategoryPage.module.scss";

const CategoryPage = () => {
  return (
    <div className={scss.CategoryPage}>
      <div className="container">
        <div className={scss.categories}>
          <CategoryList />
          <HeroBanner />
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
