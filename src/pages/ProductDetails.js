import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { products } from "../images/dummy_products";
import MyButton from "../components/actions/MyButton";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import Slider from "react-slick";
import FAQProduct from "../components/ProductDetails/FAQProduct";
import measurement from "../images/measurement.webp";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isInInch, setIsInInch] = useState(true);
  const faqItems = [
    {
      title: "Product Care",
      description:
        "To ensure the longevity of your products, we recommend following these care instructions:",
      listItems: [
        "Wash with like colors.",
        "Use gentle detergents.",
        "Avoid bleach and harsh chemicals.",
        "Air dry whenever possible.",
      ],
    },
    {
      title: "Shipping and Payment",
      description: "We offer various shipping options to meet your needs:",
      listItems: [
        "Standard Shipping: 5-7 business days.",
        "Express Shipping: 2-3 business days.",
        "All payments can be made via credit card, PayPal, and other secure payment methods.",
      ],
    },
    {
      title: "Returns",
      description:
        "If you are not satisfied with your purchase, we offer a hassle-free return policy:",
      listItems: [
        "Returns must be initiated within 30 days of receipt.",
        "Items must be unworn, unwashed, and in their original packaging.",
        "Please contact our customer service for return instructions.",
      ],
    },
  ];

  const [openMeasurement, setOpenMeasurement] = useState(false);
  const [hoverIndex, setHoverIndex] = useState(null);
  const newProducts = products.slice(0, 4);
  const [product, setProduct] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const measurementsCM = [
    { intlSize: "S", euSize: 46, length: 76.5, chestWidth: 57.5 },
    { intlSize: "M", euSize: 48, length: 77.5, chestWidth: 59 },
    { intlSize: "L", euSize: 50, length: 78.5, chestWidth: 60.5 },
    { intlSize: "XL", euSize: 52, length: 79.5, chestWidth: 61.5 },
    { intlSize: "XXL", euSize: 54, length: 80.5, chestWidth: 63 },
  ];

  const measurementsIN = [
    { intlSize: "S", euSize: 46, length: 30.1, chestWidth: 22.6 },
    { intlSize: "M", euSize: 48, length: 30.5, chestWidth: 23.2 },
    { intlSize: "L", euSize: 50, length: 30.9, chestWidth: 23.8 },
    { intlSize: "XL", euSize: 52, length: 31.3, chestWidth: 24.2 },
    { intlSize: "XXL", euSize: 54, length: 31.7, chestWidth: 24.8 },
  ];

  useEffect(() => {
    setProduct(products[id]);
  }, [id]);
  const measurements = isInInch ? measurementsIN : measurementsCM;
  const settings = {
    vertical: true,
    verticalSwiping: true,
    focusOnSelect: true,
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 3,
  };

  if (!product) {
    return <p>Product not found</p>;
  }

  const setSelectImage = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <>
      <div
        className={`w-full min-h-screen flex ${
          openMeasurement ? "overflow-hidden" : ""
        }`}
      >
        <div className="w-[60vw] flex flex-col gap-4 p-8">
          <div className="flex  gap-3">
            <div className="flex flex-col gap-4">
              <Zoom>
                <div className="w-[800px] h-screen  border-none overflow-hidden">
                  <img
                    src={product.image[currentImageIndex]}
                    className="w-full h-full object-cover border-none"
                  />
                </div>
              </Zoom>
            </div>
            <div className="flex flex-col max-w-[100px] gap-4 ">
              <Slider {...settings} draggable arrows={false} autoplay>
                {product.image.map((p_img, index) => (
                  <div
                    className="w-[130px] h-[150px]  border-none overflow-hidden cursor-pointer"
                    key={index}
                    onClick={() => setSelectImage(index)}
                  >
                    <img
                      src={p_img}
                      className="w-full h-full object-cover border-none"
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>

        {/* Product details section */}
        <div className="w-[50vw]  flex flex-col gap-4 p-8">
          <div className="border-b-[1px] border-dashed flex flex-col gap-4 py-2">
            <h1 className="text-black font-robson text-[106px] font-semibold leading-[60px]">
              {product.title}
            </h1>
            <h2 className="text-[#807b7b] font-robson text-[46px] font-semibold">
              PKR {product.price}
            </h2>
            <p className="text-gray-800 font-fedroka uppercase text-[16px] font-medium  py-2 ">
              {product.description}
            </p>
          </div>

          <div className="flex flex-col  border-b-[1px] border-dashed pb-4">
            <p className="font-fredoka font-semibold uppercase mb-5">Colors</p>
            <div className="flex gap-2">
              {product.colors.map((color, index) => (
                <button
                  key={index}
                  className={`w-10 h-10 rounded-full border uppercase`}
                  style={{ backgroundColor: color.toLowerCase(), opacity: 0.8 }}
                ></button>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center mb-5">
              <p className="font-fredoka font-semibold uppercase">Size</p>
              <p
                className="font-fredoka font-semibold uppercase text-[#908a8a] underline cursor-pointer "
                onClick={() => setOpenMeasurement(!openMeasurement)}
              >
                Measurement Guide
              </p>
            </div>

            <div className="flex gap-2 mb-10">
              <MyButton
                title={"S"}
                styles={
                  "w-min bg-[#dddddd] text-black px-6 py-2 font-fedroka text-[16px]"
                }
              />
              <MyButton
                title={"M"}
                styles={
                  "w-min bg-[#dddddd] text-black px-6 py-2 font-fedroka text-[16px]"
                }
              />
              <MyButton
                title={"L"}
                styles={
                  "w-min bg-[#dddddd] text-black px-6 py-2 font-fedroka text-[16px]"
                }
              />
              <MyButton
                title={"XL"}
                styles={
                  "w-min bg-[#dddddd] text-black px-6 py-2 font-fedroka text-[16px]"
                }
              />
              <MyButton
                title={"XXL"}
                styles={
                  "w-min bg-[#dddddd] text-black px-6 py-2 font-fedroka text-[16px]"
                }
              />
            </div>
          </div>

          <div className="flex gap-2">
            <MyButton
              title={"Buy Now"}
              styles={
                "w-full bg-[#000000] text-white px-6 py-2 font-robson text-[26px] tracking-wider"
              }
            />
            <MyButton
              title={"Add to Cart"}
              styles={
                "w-full bg-[#2b03b7] text-white px-6 py-2 font-robson text-[26px] tracking-wider"
              }
            />
          </div>

          <FAQProduct faqItems={faqItems} />
        </div>
      </div>

      <div className="p-8">
        <h2 className="font-robson text-[68px] font-semibold">Discover</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 py-4 mt-4">
          {newProducts.map((product, index) => (
            <div
              key={index}
              className="min-h-[620px] cursor-pointer relative overflow-hidden group"
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
              onClick={() => navigate(`/product/${product.id}`)}
            >
              <img
                src={product.image[1]}
                className="object-cover cursor-pointer "
                style={{ height: "100%", width: "100%" }}
              />
              <div
                className={`p-4 absolute left-0 bottom-0 right-0 bg-white z-10 transition-transform duration-500 ${
                  hoverIndex === index
                    ? "translate-y-[0px]"
                    : "translate-y-[40px]"
                }`}
              >
                <h3 className="cursor-pointer font-fredoka font-normal text-[12px] text-[#5B5B5B] uppercase">
                  {product.category}
                </h3>
                <div className="flex justify-between cursor-pointer">
                  <h3 className="font-robson text-[28px] tracking-wide uppercase">
                    {product.title}
                  </h3>
                  <h3 className="font-robson text-[28px] uppercase">
                    {product.price} PKR
                  </h3>
                </div>
                <div className="mt-2 flex">
                  {product.colors.map((color, index) => (
                    <div
                      key={index}
                      className={`w-6 h-6 rounded-full mr-2 border`}
                      style={{ backgroundColor: color.toLowerCase() }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {openMeasurement && (
        <>
          <div
            className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-40"
            onClick={() => setOpenMeasurement(!openMeasurement)}
          ></div>
          <div className="w-[600px] bg-white fixed top-0 right-0 bottom-0  z-50 transition-transform duration-500">
            <button
              onClick={() => setOpenMeasurement(false)}
              className="text-black text-[24px] font-bold absolute right-0 bg-white py-4 px-8 top-0"
            >
              X
            </button>
            <div className="w-full h-[300px] overflow-hidden">
              <img
                src={measurement}
                alt="Measurement Guide"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="p-8 flex flex-col  gap-4">
              <div>
                <h2 className="font-robson text-[36px] tracking-wider">
                  Item Measurements
                </h2>
                <p className="font-fredoka  text-justify  font-normal text-sm">
                  Use the measurements below to determine your size. If you are
                  on the border between two sizes, order the smaller size for a
                  tighter fit or the larger size for a looser fit. If your chest
                  and waist measurements match two different suggested sizes,
                  order the size indicated by your chest measurement.
                </p>
              </div>
              <div className="mt-10">
                <div className="flex gap-3 my-4">
                  <MyButton
                    title={"CM"}
                    styles={`py-2 px-6 ${
                      !isInInch
                        ? "bg-[#292929] text-white"
                        : "bg-[#dddddd] border text-black"
                    }`}
                    onClick={() => setIsInInch(false)}
                  />
                  <MyButton
                    title={"IN"}
                    styles={`py-2 px-6 ${
                      isInInch
                        ? "bg-[#292929] text-white"
                        : "bg-[#dddddd] border text-black"
                    }`}
                    onClick={() => setIsInInch(true)}
                  />
                </div>
                <table className="table-auto w-full border-collapse ">
                  <thead>
                    <tr className="text-left">
                      <th className="border-b px-4 py-2 cursor-default">
                        Intl Size
                      </th>
                      <th className="border-b px-4 py-2 cursor-default">
                        EU Size
                      </th>
                      <th className="border-b px-4 py-2 cursor-default">
                        Length ({isInInch ? "IN" : "CM"})
                      </th>
                      <th className="border-b px-4 py-2 cursor-default">
                        Chest Width ({isInInch ? "IN" : "CM"})
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {measurements.map((measurement, index) => (
                      <tr key={index}>
                        <td className="border-t  px-4 py-2 cursor-default">
                          {measurement.intlSize}
                        </td>
                        <td className="border-t px-4 py-2 cursor-default">
                          {measurement.euSize}
                        </td>
                        <td className="border-t px-4 py-2 cursor-default">
                          {measurement.length}
                        </td>
                        <td className="border-t px-4 py-2 cursor-default">
                          {measurement.chestWidth}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ProductDetails;
