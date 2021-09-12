import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { Pagination, Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
const ProductDetails = () => {
  const { productId } = useParams();
  const products = useSelector((state) => state);
  const product = products.allProducts.products;
  const images = products.allProducts.images;
  const size = products.allProducts.size;
  const responce = product[productId];
  const id = product[productId].id;
  const image = images[productId];
  const [img, setImg] = useState(responce.imgSrc);
  const [shoeSize, setShoeSize] = useState(size[0]);
  const dispatch = useDispatch();
  const title = responce.title;
  const price = responce.price;

  const changeImg = (e) => {
    setImg(e.target.src);
  };
  const changeSize = (e) => {
    setShoeSize(e.target.value);
    Number(shoeSize);
  };
  const [count, setCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const [modalShow, setModalShow] = React.useState(false);
  function MyVerticallyCenteredModal(props) {
    return (
      <Modal {...props} size="md" centered>
        <Modal.Header closeButton>
          <Modal.Title>Added to Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-4">
              <img className="img-fluid" src={responce.imgSrc} />
            </div>
            <div className="col-8">
              <h6>{responce.title}</h6>
              <h6>Price : ${responce.price}</h6>
              <Link to={`/product/cart/${productId}`}>
                <Button
                  variant="success"
                >
                  View Cart
                </Button>
              </Link>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    );
  }
  return (
    <div>
      <div className="container-fluid Detail">
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
        <div className="row p-lg-5">
          <div className="col-lg-6">
            <div className="row">
              <div className="col-lg-3 order-2 order-lg-1 left-section">
                <img
                  onClick={changeImg}
                  className="detailImages mx-3"
                  src={image.imgSrc0}
                />
                <img
                  onClick={changeImg}
                  className="detailImages mx-3"
                  src={image.imgSrc1}
                />
                <img
                  onClick={changeImg}
                  className="detailImages mx-3"
                  src={image.imgSrc2}
                />
                <img
                  onClick={changeImg}
                  className="detailImages mx-3"
                  src={image.imgSrc3}
                />
              </div>
              <div className="col-lg-9 order-1 order-lg-2 middle-section">
                <div className="card m-3 m-lg-0">
                  <img src={img} alt={responce.title} />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 p-5 pt-lg-0 order-2 right-section">
            <h5 style={{ fontSize: "1em", fontWeight: "bold" }}>
              {responce.title}
            </h5>
            <h5 style={{ color: "gray", marginBottom: "30px" }}>
              PRICE: {responce.price}$/:
            </h5>
            <p>Size Chart</p>
            <h6>SIZE: {shoeSize}</h6>
            <input type="button" onClick={changeSize} value={"40/6"} />
            <input type="button" onClick={changeSize} value={"41/7"} />
            <input type="button" onClick={changeSize} value={"42/8"} />
            <input type="button" onClick={changeSize} value={"43/9"} />
            <input type="button" onClick={changeSize} value={"44/10"} />
            <input type="button" onClick={changeSize} value={"45/11"} />
            <div className="AddtoCart">
              <h6 className="pt-4">QUANTITY:</h6>
              <Pagination className="pb-4">
                <Pagination.Item
                  onClick={() => {
                    if (count > 0) {
                      setCount(count - 1);
                      setTotalPrice(totalPrice - responce.price);
                    } else {
                      alert("Item can't be less than 0");
                    }
                  }}
                >
                  <RemoveIcon style={{ color: "black" }} />
                </Pagination.Item>
                <Pagination.Item>
                  <span style={{ color: "black" }}>{count}</span>
                </Pagination.Item>
                <Pagination.Item
                  onClick={() => {
                    if (count < 10) {
                      setCount(count + 1);
                      setTotalPrice(totalPrice + responce.price);
                    } else {
                      alert("You can't select more than 10 items");
                    }
                  }}
                >
                  <AddIcon style={{ color: "black" }} />
                </Pagination.Item>
                <Button
                  variant="dark"
                  onClick={() => {
                    if (count > 0) {
                      dispatch({
                        type: "ADD_TO_CART",
                        payload: { shoeSize, totalPrice, count,id, img, title,price  },
                      })
                      setModalShow(true);
                    } else {
                      alert("You didn't select quantity of your item");
                    }
                  }}
                >
                  Add to Cart
                </Button>
              </Pagination>
              <h6 style={{ color: "gray", marginBottom: "30px" }}>
                SUBTOTAL: ${totalPrice}
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductDetails;
