import { useNavigate } from "react-router-dom";
import "./directory-item.styles.scss";

const DirectoryItem = ({ category }) => {
  const { imageUrl, title, route } = category;
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);

  return (
    <div
      className="directory-item-container"
      key={category.id}
      onClick={onNavigateHandler}
    >
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="directory-item-body">
        <h2>{title}</h2>
        <p>Shop Work</p>
      </div>
    </div>
  );
};
export default DirectoryItem;
