import { Link } from "react-router-dom";

const ListItem = ({ image, name, rating, id }) => {
  return (
    <div className="listitem">
    {/* <Link to={`/singleshow/${id}`} > */}
      <img src={image} alt={name} />
      <div className="listitem__info">
        <h4 className="info__name">{name}</h4>
        <h4 className="info__rating">{rating}</h4>
      </div>
    {/* </Link> */}
    </div>
  );
};

export default ListItem;