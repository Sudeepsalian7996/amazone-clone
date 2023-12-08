import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductCard from "./ProductCard";
import "../../styles/Product.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function Product({ data }) {
  return (
    <div className="product__container">
      <div className="product__info">
        <div className="title">Today's Deals</div>
        <div className="seeall__link">See all deals</div>
      </div>
      {data?.data?.length > 0 && (
        <Carousel
          swipeable={true}
          draggable={false}
          showDots={false}
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={2500}
          centerMode={true}
          keyBoardControl={true}
          removeDotsOnDeviceType={["tablet", "mobile"]}
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
          containerClass="carousel-container"
        >
          {/* <div className="product__container"> */}
          {data?.data?.map((item, index) => (
            <ProductCard key={index} product={item} />
          ))}
          {/* </div> */}
        </Carousel>
      )}
    </div>
  );
}

export default Product;
