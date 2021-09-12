import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { Pagination } from "react-bootstrap";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

const Cart = () => {
  const cartItems = useSelector((state) => state.cartItems.responce);
  
  const dispatch = useDispatch();

  return (
    <div className="shoppingCart">
      <div className="top_text">
        <h4>Your Shopping Cart</h4>
        <h6>Products / Your Cart</h6>
      </div>
      <div className="row top_row">
        <div className="col-12 col-sm-4">
          <h6>Products</h6>
        </div>
        <div className="col-sm-2 d-none d-sm-block">Price</div>
        <div className="col-sm-2 d-none d-sm-block">Quantity</div>
        <div className="col-sm-2 d-none d-sm-block">Total Price</div>
        <div className="col-sm-2 d-none d-sm-block">Remove</div>
      </div>
      {cartItems.length >  0 ? 
      <>
      {cartItems.map((product)=>{
        return(
<div className="row product_row">
          <div className="col-12 col-sm-4">
            <div className="row">
              <div className="col-6">
                <img class="img-fluid" src={product.img} />
              </div>
              <div className="col-6 d-flex flex-column justify-content-center product">
                <h6>{product.title}</h6>
                <h6>{product.shoeSize}</h6>
              </div>
            </div>
          </div>
          <div className="col-3 col-sm-2 py-4 p-sm-0 d-flex flex-column justify-content-center price">
            ${product.price}
          </div>
          <div className="col-3 col-sm-2 py-4 p-sm-0 d-flex flex-column justify-content-center quantiy">
            <Pagination size="sm" className="pagination">
              <Pagination.Item onClick={()=>{
                  if(product.count > 0)
                  {
                    dispatch({type:"DEC", payload: product.id})
                  }
                  else{
                    alert("You can't remove less than 0 items")
                  }
                  
                }}>
                <RemoveIcon style={{ color: "black", fontSize: "16px" }} />
              </Pagination.Item>
              <Pagination.Item>
                <span style={{ color: "black" }}>{product.count}</span>
              </Pagination.Item>
              <Pagination.Item onClick={()=>{
                  if(product.count < 10)
                  {
                    dispatch({type:"INC", payload: product.id})
                  }
                  else{
                    alert("You can't add more than 10 items")
                  }
                  
                }}>
                <AddIcon style={{ color: "black", fontSize: "16px" }} />
              </Pagination.Item>
              
            </Pagination>
          </div>
          <div className="col-3 col-sm-2 py-4 p-sm-0 d-flex flex-column justify-content-center totalPrice">
            ${product.totalPrice}
          </div>
          <div className="col-3 col-sm-2 py-4 p-sm-0 d-flex flex-column justify-content-center remove">
            <DeleteForeverIcon onClick={()=>{
              dispatch({type:"DELETE", payload: product.id});
            }} />
          </div>
        </div>
        )
          
      })}
      
      </> : "Cart is empty"}
      
    </div>
  );
};
export default Cart;
