import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import VisibilityIcon from "@material-ui/icons/Visibility";
import SearchIcon from '@material-ui/icons/Search';

const ProductListing = () => {
  const products = useSelector((state) => state);
  const product = products.allProducts.products;
  const [search, setSearch] = useState("");
  const [val, setVal] = useState();
  const [item, setItem] = useState([]);
  const [empty,setEmpty] = useState("");

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const searchField = () => {
    if (search === "") {
      return setEmpty(<h2>Fill the search box first</h2>);
    } else if (search !== "") {
      product
        .filter((oldValue) => {
          if (oldValue.title.toLowerCase().includes(search.toLowerCase())) {
            return oldValue;
          }
        })
        .map((value) => {
          setItem((oldVal) => [...oldVal, value]);
          setVal(item);
          item.splice(val);
        });
    } 
  };
  if (val) {
    return (
      <div>
        <div className="container-fluid Section1 p-5">
          <h2>ProductListing</h2>
          <div className="searchBox">
          <input
            type="text"
            placeholder="Search Items"
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
          <span onClick={searchField}>
            <SearchIcon />
          </span>
        </div>
        {empty}
          <div className="row">
            {item.map((value, index) => {
              return (
                <>
                  <div className="col-3">
                    <div className="card" key={value.id}>
                      <img
                        className="card-img img-fluid"
                        src={value.imgSrc}
                        alt={value.title}
                      />
                      <div
                        style={{ overflow: "hidden" }}
                        className="card-img-overlay"
                      >
                        <img
                          className="card-img"
                          src={value.imgOverlay}
                          alt={value.title}
                        />
                        <div className="card-img-overlay">
                          <Link to={`/product/${value.id}`}>
                            <span
                              key={index}
                              style={{ color: "white" }}
                              className="card-icon"
                            >
                              <VisibilityIcon onClick={() => {}} />
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div className="pt-3">
                      <h6>{value.title}</h6>
                      <span>${value.price}</span>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
  return (
    <div>
      <div className="container-fluid Section1 p-5">
        <h2>ProductListing</h2>
        <div className="searchBox">
          <input
            type="text"
            placeholder="Search Items"
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
          <span onClick={searchField}>
            <SearchIcon />
          </span>
        </div>
        {empty}
        <Slider {...settings}>
          {product.map((value, index) => {
            return (
              <>
                <div className="card" key={index}>
                  <img
                    className="card-img img-fluid"
                    src={value.imgSrc}
                    alt={value.title}
                  />
                  <div className="card-img-overlay">
                    <img
                      className="card-img"
                      src={value.imgOverlay}
                      alt={value.title}
                    />
                    <div className="card-img-overlay">
                      <Link to={`/product/${index}`}>
                        <span
                          key={index}
                          style={{ color: "white" }}
                          className="card-icon"
                        >
                          <VisibilityIcon onClick={() => {}} />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="pt-3">
                  <h6>{value.title}</h6>
                  <span>${value.price}</span>
                </div>
              </>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};
export default ProductListing;
