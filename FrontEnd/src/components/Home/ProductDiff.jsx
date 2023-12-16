import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartCount";
import "../../styles/ProductDiff.css";

function ProductDiff({ data }) {
  const context = useContext(CartContext);
  let search = context.searchText;

  const getRandomSubset = (array, subsetSize) => {
    const shuffledArray = array.slice().sort(() => Math.random() - 0.5);
    return shuffledArray.slice(0, subsetSize);
  };

  // Get a random subset of 4 elements from the data array
  const randomData1 = getRandomSubset(data || [], 4);
  const randomData2 = getRandomSubset(data || [], 4);
  const randomData3 = getRandomSubset(data || [], 4);
  const randomData4 = getRandomSubset(data || [], 4);

  return (
    <>
      <div className="cards">
        {/* card-1 */}

        <div className="card">
          <div className="card__title">Keep shopping for</div>
          <div className="card__images">
            {randomData1
              ?.filter((item) => {
                return search?.toLowerCase() === ""
                  ? item
                  : item?.description?.includes(search?.toLowerCase());
              })
              .map((item, index) => (
                <div className="card__image__container" key={index}>
                  <Link to={`/getproduct-detail/${item._id}`}>
                    <img
                      src={item.imageUrl}
                      alt="product image"
                      className="card__image"
                    />
                  </Link>
                  <div className="card__desc">
                    <div className="percentage__offer__card">{`${
                      item?.offer ?? 0
                    }% off`}</div>
                    <div className="offer__desc_card">{`${
                      item?.offer < 20 ? "Offer" : "Deal"
                    }`}</div>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* card-2 */}

        <div className="card">
          <div className="card__title">Deals inspired by history</div>
          <div className="card__images">
            {randomData2
              ?.filter((item) => {
                return search?.toLowerCase() === ""
                  ? item
                  : item?.description?.includes(search?.toLowerCase());
              })
              .map((item, index) => (
                <div className="card__image__container" key={index}>
                  <Link to={`/getproduct-detail/${item._id}`}>
                    <img
                      src={item.imageUrl}
                      alt="product image"
                      className="card__image"
                    />
                  </Link>
                  <div className="card__desc">
                    <div className="percentage__offer__card">{`${
                      item.offer ?? 0
                    }% off`}</div>
                    <div className="offer__desc_card">{`${
                      item.offer < 20 ? "Offer" : "Deal"
                    }`}</div>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* card-3 */}

        <div className="card">
          <div className="card__title">4+ star deals for you</div>
          <div className="card__images">
            {randomData3
              ?.filter((item) => {
                return search?.toLowerCase() === ""
                  ? item
                  : item?.description?.includes(search?.toLowerCase());
              })
              .map((item, index) => (
                <div className="card__image__container" key={index}>
                  <Link to={`/getproduct-detail/${item._id}`}>
                    <img
                      src={item.imageUrl}
                      alt="product image"
                      className="card__image"
                    />
                  </Link>
                  <div className="card__desc">
                    <div className="percentage__offer__card">{`${
                      item.offer ?? 0
                    }% off`}</div>
                    <div className="offer__desc_card">{`${
                      item.offer < 20 ? "Offer" : "Deal"
                    }`}</div>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* card-4 */}
        <div className="card">
          <div className="card__title">Save up to 28%</div>
          <div className="card__images">
            {randomData4
              ?.filter((item) => {
                return search?.toLowerCase() === ""
                  ? item
                  : item?.description?.includes(search?.toLowerCase());
              })
              .map((item, index) => (
                <div className="card__image__container" key={index}>
                  <Link to={`/getproduct-detail/${item._id}`}>
                    <img
                      src={item.imageUrl}
                      alt="product image"
                      className="card__image"
                    />
                  </Link>
                  <div className="card__desc">
                    <div className="percentage__offer__card">{`${
                      item.offer ?? 0
                    }% off`}</div>
                    <div className="offer__desc_card">{`${
                      item.offer > 20 ? "Offer" : "Deal"
                    }`}</div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDiff;
