import React from "react";

const Detail = ({
  descriptionText = { title: "", subtitle: "", body: "" },

}) => {


  return (
    <div className="flex flex-col md:flex-row justify-center items-center text-center px-8 lg:px-12 gap-8">
      {/* Text content section */}
      <div className="w-full md:w-1/2 sm:w-100 px-4">
        <h3 className="text-4xl font-moon">{descriptionText.title}</h3>
        <h2 className="text-xl font-bold">{descriptionText.subtitle}</h2>
        <p className="pt-4">{descriptionText.body}</p>
      </div>

    </div>
  );
};

export default Detail;

  