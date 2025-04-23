import React from "react";

const Color = () => {
  return (
    <div>
    
      <ul className='list-inline d-flex flex-wrap gap-2 ps-0'>
        {[...Array(4)].map((_, index) => (
          <li
            key={index}
            className='rounded-circle border'
            style={{
              width: "20px",
              height: "20px",
              backgroundColor: "#ccc",
            }}
          ></li>
        ))}
      </ul>
    </div>
  );
};

export default Color;
