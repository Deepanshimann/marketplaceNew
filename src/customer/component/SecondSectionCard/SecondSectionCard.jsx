import React from "react";

const SecondSectionCard = ({product}) => {
  return (
    <div className="cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3 ">
      <div className="h-[13rem] w-[10rem]">
        <img
          className="object-cover object-top w-full h-full "
          src={product.image}
          alt="product-image"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-medium text-gray-900">{product.brand}</h3>
        <p className="mt-2 text-sm text-gray-700">
          {product.title}
        </p>
      </div>
    </div>
  );
};

export default SecondSectionCard;
