import React from "react";

const Detail = ({
    descriptionText = { title: "", subtitle: "", body: "" },
}) => {


  return (
    <>
      <div className="pt-12 px-4 place-content-center w-100">
        <h2 className="font-bold text-2xl">Grounds for Coffee:</h2>
        <h1 className="font-bold text-2xl">UX/UI Redesign Case Study</h1>
        <p className="pt-4">This project improves the Grounds for Coffee app by fixing navigation issues, refining layouts, and enhancing the user experience. The goal is to create a more intuitive and seamless ordering process.</p>
      
        <div className="bg-[#FFF6E3] font-bold rounded-4xl w-32 h-9 text-center content-center mt-4">UX/UI Design</div>
      </div>
      <img src="" alt="" />
    </>
    
  );
};

export default Detail;

  