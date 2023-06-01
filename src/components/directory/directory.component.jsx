import CategoryItem from "../category-item/category-item.component";
import "./directory.styles.scss";

const Directory = (props) => {
  return (
    <div className="directory-container">
      {props.categories.map((category) => {
        return <CategoryItem category={category} key={category.id} />;
      })}
    </div>
  );
};
export default Directory;
