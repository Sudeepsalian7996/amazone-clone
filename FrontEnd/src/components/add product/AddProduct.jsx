import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../styles/AddProduct.css";
import logo from "../../images/transparentLogo.png";

const AddProduct = () => {
  const [inputData, setInputData] = useState({
    title: "",
    description: "",
    imageurl: "",
    price: "",
    rating: "",
    offer: "",
  });
  const [titleError, setTitleError] = useState(false);
  const [descriptionError, setDescriptionError] = useState(false);
  const [imageUrlError, setImageUrlError] = useState(false);
  const [priceError, setPriceError] = useState(false);
  const [ratingError, setRatingError] = useState(false);
  const [offerError, setOfferError] = useState(false);
  const [sucess, setSuccess] = useState(false);

  const inputHandler = (e) => {
    setInputData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const resetHandler = () => {
    setInputData(() => ({
      [title]: "",
      [description]: "",
      [imageurl]: "",
      [price]: "",
      [rating]: "",
      [offer]: "",
    }));
  };

  const productHandler = async () => {
    let isValid = true;
    if (inputData?.description?.length < 100) {
      setDescriptionError(true);
      setTimeout(() => {
        setDescriptionError(false);
      }, 2000);
      isValid = false;
    } else {
      setDescriptionError(false);
    }

    if (inputData?.title?.length === 0) {
      setTitleError(true);
      setTimeout(() => {
        setTitleError(false);
      }, 2000);
      isValid = false;
    } else setTitleError(false);

    //Image is valid or not
    async function isValidImageUrl(url) {
      try {
        if (url[5] !== ":") return false;
        const response = await fetch(url, { method: "HEAD" });
        return response.ok;
      } catch (error) {
        return false;
      }
    }

    const imageUrl = inputData.imageurl;

    const isImageValid = await isValidImageUrl(imageUrl);
    if (isImageValid) {
      setImageUrlError(false);
    } else {
      setImageUrlError(true);
      setTimeout(() => {
        setImageUrlError(false);
      }, 2000);
      isValid = false;
    }

    if (
      inputData?.price?.trim() === "" ||
      isNaN(Number(inputData?.price?.trim()))
    ) {
      setPriceError(true);
      setTimeout(() => {
        setPriceError(false);
      }, 2000);
      isValid = false;
    } else setPriceError(false);

    if (
      inputData?.offer?.trim() === "" ||
      isNaN(Number(inputData?.offer?.trim())) ||
      Number(inputData?.offer) > 100
    ) {
      setOfferError(true);
      setTimeout(() => {
        setOfferError(false);
      }, 2000);
      isValid = false;
    } else setOfferError(false);

    if (
      inputData?.rating?.trim() === "" ||
      isNaN(Number(inputData?.rating?.trim())) ||
      Number(inputData?.rating) > 5
    ) {
      setRatingError(true);
      setTimeout(() => {
        setRatingError(false);
      }, 2000);
      isValid = false;
    } else setRatingError(false);

    if (isValid) {
      setSuccess(true);
      toast.success("Product added successfully", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      // setInputData(() => ({
      //   [title]: "",
      //   [description]: "",
      //   [imageurl]: "",
      //   [price]: "",
      //   [rating]: "",
      //   [offer]: "",
      // }));
    } else {
      setSuccess(false);
    }
  };

  return (
    <div className="addproduct__container">
      <div className="addproduct__image__container">
        <img src={logo} alt="amazon logo" className="addproduct__image" />
      </div>
      <div className="form__container">
        <div className="addproduct__card">
          <div className="addproduct__title">Add Product</div>
          <div className="form__structure_addproduct">
            <div className="col-1">
              <label htmlFor="title">Title</label>

              <input
                type="text"
                name="title"
                id="title"
                placeholder="Product title"
                value={inputData.title === undefined ? "" : inputData.title}
                onChange={inputHandler}
              />
              {titleError && (
                <div className="error__addproduct">Title is empty</div>
              )}
              <label htmlFor="description">Description</label>
              <textarea
                name="description"
                id="description"
                cols="30"
                rows="5"
                placeholder="Product description (more than 100 characters)"
                value={
                  inputData.description === undefined
                    ? ""
                    : inputData.description
                }
                onChange={inputHandler}
              ></textarea>
              {descriptionError && (
                <div className="error__addproduct">
                  Description is too small
                </div>
              )}
              <label htmlFor="imageurl">Image Url</label>
              <input
                type="text"
                name="imageurl"
                id="imageurl"
                placeholder="Image url"
                value={
                  inputData.imageurl === undefined ? "" : inputData.imageurl
                }
                onChange={inputHandler}
              />
              {imageUrlError && (
                <div className="error__addproduct">Image url is not valid</div>
              )}
            </div>
            <div className="col-2">
              <label htmlFor="price">Price</label>
              <input
                type="text"
                name="price"
                id="price"
                placeholder="Price in INR"
                value={inputData.price === undefined ? "" : inputData.price}
                onChange={inputHandler}
              />
              {priceError && (
                <div className="error__addproduct">Enter a valid price</div>
              )}
              <label htmlFor="offer">Offer</label>
              <input
                type="text"
                name="offer"
                id="offer"
                placeholder="Offer in %"
                value={inputData.offer === undefined ? "" : inputData.offer}
                onChange={inputHandler}
              />
              {offerError && (
                <div className="error__addproduct">Enter a valid offer</div>
              )}
              <label htmlFor="rating">Product Rating</label>
              <input
                type="text"
                name="rating"
                id="rating"
                placeholder="Rating out of 5"
                value={inputData.rating === undefined ? "" : inputData.rating}
                onChange={inputHandler}
              />
              {ratingError && (
                <div className="error__addproduct">Enter a valid rating</div>
              )}
            </div>
          </div>
          <div className="addproduct__buttons">
            <button className="add_prod__button" onClick={productHandler}>
              Add product
            </button>
            {sucess && (
              <div>
                <ToastContainer
                  position="top-center"
                  autoClose={5000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                  theme="light"
                />
              </div>
            )}
            <button className="reset__button" onClick={resetHandler}>
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
