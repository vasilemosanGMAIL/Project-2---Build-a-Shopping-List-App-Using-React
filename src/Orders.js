import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

const Orders = ({
  itemName,
  quantity,
  price,
  imgPath,
  ordClick,
  handleQuantityDecrease,
  handleQuantityIncrease,
}) => {
  return (
    <div className="card my-2 mx-2" style={{ width: "15rem" }}>
      <img src={imgPath} className="card-img-top" alt="..." />
      <div className="card-body">
        <h6 className="card-title">{itemName}</h6>
        <div className="quantity">
          <p className="my-0">
            <FontAwesomeIcon
              icon={faChevronLeft}
              onClick={handleQuantityDecrease}
            />
          </p>
          <p className="card-tex my-0">Quantity: {quantity}</p>
          <p className="my-0">
            <FontAwesomeIcon
              icon={faChevronRight}
              onClick={handleQuantityIncrease}
            />
          </p>
        </div>
        <p className="card-text">Price {price} MDL</p>
        <button
          onClick={ordClick}
          type="button"
          className="btn btn-outline-danger"
        >
          Remove Order
        </button>
      </div>
    </div>
  );
};

export default Orders;
