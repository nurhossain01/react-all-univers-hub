import React from 'react';
import { FaArrowCircleRight } from "react-icons/fa";

const Tool = ({ tool, setId }) => {
  const { id, name, description, image, features, published_in } = tool;
  // console.log(id)
  return (
    <>
      <div className="card card-compact w-full bg-base-100 shadow-xl">
        <figure><img src={image} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{description ? description : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam, repellat tempore quo quisquam perferendis voluptas."}</p>
          <div className='pb-5'>
            <h4 className='text-xl font-bold'>Features:</h4>
            <div>
              {
                features?.map((feature, index) =>
                  <p>{index + 1}. {feature}</p>
                )
              }
            </div>
          </div>
          <hr />
          <div className="card-actions justify-between pt-5">
            <h4>{published_in}</h4>
            <label onClick={() => setId(id)} htmlFor="my-modal-5" className="btn">
              <FaArrowCircleRight></FaArrowCircleRight>
            </label>

          </div>
        </div>
      </div>
    </>
  );
};

export default Tool;