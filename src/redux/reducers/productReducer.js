
const initialState = {
  products: [
    {
      id: 0,
      link: "Rustic-Leather-Loafers-For-Men",
      title: "Rustic Leather Loafers For Men",
      price: 45.0,
      imgSrc: "/assets/Sec1Images/img1(i).jpg",
      imgOverlay: "/assets/Sec1Images/img1(ii).jpg",
    },
    {
      id: 1,
      link: "Broad-Strap-Chappals-for-Men",
      title: "Broad Strap Chappals for Men",
      price: 50.0,
      imgSrc: "/assets/Sec1Images/img2(i).jpg",
      imgOverlay: "/assets/Sec1Images/img2(ii).jpg",
    },
    {
      id: 2,
      link: "Formal-Tassel-Loafer",
      title: "Formal Tassel Loafer",
      price: 80.0,
      imgSrc: "/assets/Sec1Images/img3(i).jpg",
      imgOverlay: "/assets/Sec1Images/img3(ii).jpg",
    },
    {
      id: 3,
      link: "Leather-Loafers",
      title: "Leather Loafers",
      price: 100.0,
      imgSrc: "/assets/Sec1Images/img4(i).jpg",
      imgOverlay: "/assets/Sec1Images/img4(ii).jpg",
    },
    {
      id: 4,
      link: "Formal-Suede-Loafers",
      title: "Formal Suede Loafers",
      price: 70.0,
      imgSrc: "/assets/Sec1Images/img5(i).jpg",
      imgOverlay: "/assets/Sec1Images/img5(ii).jpg",
    },
    {
      id: 5,
      link: "Leather-Tassel-Loafers",
      title: "Leather Tassel Loafers",
      price: 149.0,
      imgSrc: "/assets/Sec1Images/img6(i).jpg",
      imgOverlay: "/assets/Sec1Images/img6(ii).jpg",
    },
  ],
  images: [
    {
      id: 0,
      imgSrc0: "/assets/Sec1Images/img1(i).jpg",
      imgSrc1: "/assets/Sec1Images/img1(ii).jpg",
      imgSrc2: "/assets/Sec1Images/img1(iii).jpg",
      imgSrc3: "/assets/Sec1Images/img1(iv).jpg",
    },
    {
      id: 1,
      imgSrc0: "/assets/Sec1Images/img2(i).jpg",
      imgSrc1: "/assets/Sec1Images/img2(ii).jpg",
      imgSrc2: "/assets/Sec1Images/img2(iii).jpg",
      imgSrc3: "/assets/Sec1Images/img2(iv).jpg",
    },
    {
      id: 2,
      imgSrc0: "/assets/Sec1Images/img3(i).jpg",
      imgSrc1: "/assets/Sec1Images/img3(ii).jpg",
      imgSrc2: "/assets/Sec1Images/img3(iii).jpg",
      imgSrc3: "/assets/Sec1Images/img3(iv).jpg",
    },
    {
      id: 3,
      imgSrc0: "/assets/Sec1Images/img4(i).jpg",
      imgSrc1: "/assets/Sec1Images/img4(ii).jpg",
      imgSrc2: "/assets/Sec1Images/img4(iii).jpg",
      imgSrc3: "/assets/Sec1Images/img4(iv).jpg",
    },
    {
      id: 4,
      imgSrc0: "/assets/Sec1Images/img5(i).jpg",
      imgSrc1: "/assets/Sec1Images/img5(ii).jpg",
      imgSrc2: "/assets/Sec1Images/img5(iii).jpg",
      imgSrc3: "/assets/Sec1Images/img5(iv).jpg",
    },
    {
      id: 5,
      imgSrc0: "/assets/Sec1Images/img6(i).jpg",
      imgSrc1: "/assets/Sec1Images/img6(ii).jpg",
      imgSrc2: "/assets/Sec1Images/img6(iii).jpg",
      imgSrc3: "/assets/Sec1Images/img6(iv).jpg",
    },
  ],
  size: ["40/6", "41/7", "42/8", "43/9", "44/10", "45/11"],
};
export const productsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    
    default:
      return state;
  }
};
