import { categories } from "@/constants/links";
import Category from "../Category";
import scss from "./CategoryList.module.scss";

const CategoryList: React.FC = () => {
  return (
    <div className={scss.container}>
      <div className={scss.content_wrapper}>
        <div className={scss.inner_box}>
          {categories.map((category, index) => (
            <Category
              key={index}
              title={category.title}
              subcategories={category.subcategories}
              link={category.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
