import React from "react";
import banner1 from "../../images/homebanner1.jpg";
import "../../styles/ProductDiff.css";

function ProductDiff({ data }) {
  const getRandomSubset = (array, subsetSize) => {
    const shuffledArray = array.slice().sort(() => Math.random() - 0.5);
    console.log(shuffledArray);
    return shuffledArray.slice(0, subsetSize);
  };

  // Get a random subset of 4 elements from the data array
  const randomData1 = getRandomSubset(data || [], 4);
  const randomData2 = getRandomSubset(data || [], 4);
  const randomData3 = getRandomSubset(data || [], 4);
  const randomData4 = getRandomSubset(data || [], 3);

  console.log(randomData1);

  return (
    <>
      <div className="cards">
        {/* card-1 */}

        <div className="card">
          <div className="card__title">Keep shopping for</div>
          <div className="card__images">
            {randomData1?.map((item, index) => (
              <div className="card__image__container">
                <img src={item.imageUrl} alt="" className="card__image" />
                <div className="card__desc">
                  <div className="percentage__offer__card">50% off</div>
                  <div className="offer__desc_card">Deal</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* card-2 */}

        <div className="card">
          <div className="card__title">Deals inspired by history</div>
          <div className="card__images">
            {randomData2?.map((item, index) => (
              <div className="card__image__container">
                <img src={item.imageUrl} alt="" className="card__image" />
                <div className="card__desc">
                  <div className="percentage__offer__card">50% off</div>
                  <div className="offer__desc_card">Deal</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* card-3 */}

        <div className="card">
          <div className="card__title">4+ star deals for you</div>
          <div className="card__images">
            {randomData3?.map((item, index) => (
              <div className="card__image__container">
                <img src={item.imageUrl} alt="" className="card__image" />
                <div className="card__desc">
                  <div className="percentage__offer__card">50% off</div>
                  <div className="offer__desc_card">Deal</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* card-4 */}
        <div className="card">
          <div className="card__title">Save up to 28%</div>
          <div className="card__images">
            {randomData4?.map((item, index) => (
              <div className="card__image_container">
                <img src={item.imageUrl} alt="" className="card__image" />
                <div className="card__desc">
                  <div className="percentage__offer__card">50% off</div>
                  <div className="offer__desc_card">Deal</div>
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
