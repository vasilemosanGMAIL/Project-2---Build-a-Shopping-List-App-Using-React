const Items = ({ itemName, priceforOneItem, imgPath,  click, isSelected }) => {
  return (
    <div className="card my-2 mx-2" style={{width: "15rem"}}>
      <img src={imgPath} className="card-img-top" alt="..." />
      <div className="card-body">
        <h6 className="card-title">{itemName}</h6>
        <p className="card-text">{priceforOneItem} MDL</p>
        <button onClick={click} type="button" className="btn btn-outline-success">{isSelected ? "Already Ordered" : "Order" }</button>
      </div>
    </div>
  );
};

export default Items;
