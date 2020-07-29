
import React from 'react';

const Product = (props) => {
  return (
      <div className="col-sm-3">
          <div className="card" style={{width: "15rem"}}>
            <img src={props.product.image.downloadUrl} className="card-img-top" alt="shirt"/>
            <div className="card-body">
              <h5 className="card-title">{props.product.name}</h5>
              <h6 className="card-title">$ {props.product.price}</h6>
              <button className="btn btn-primary" onClick={() => props.addItem(props.product)}>Buy now</button>
            </div>
          </div>
          <br />
      </div>
  );
}
export default Product;