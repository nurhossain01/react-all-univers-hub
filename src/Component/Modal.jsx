import React from 'react';

const Modal = ({ details }) => {
  const { pricing, description, image_link, features, integrations, input_output_examples } = details;
  // console.log(Object.values(features || {}))
  console.log(details)
  return (
    <>
      <input type="checkbox" id="my-modal-5" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <div className='flex'>
            <div>
              <h3 className="font-bold text-lg">{description ? description : "Not found"}</h3>
              <h4 className='flex justify-around py-12'>
                {
                  pricing?.map(price =>
                    <p className='text-center bg-red-200 p-4 m-2 rounded'>
                      {price.plan} <br />
                      {price.price == 0 ? 'free of cost' : price.price}
                    </p>)
                }
              </h4>
              <div className='flex justify-around'>
                <div>
                  <h3 className='font-bold'>Features:</h3>
                  {
                    Object.values(features || {}).map(value =>
                      <p>{value.feature_name}</p>)
                  }
                </div>
                <div>
                  <h3 className='font-bold'>Integrations:</h3>
                  {
                    integrations?.map(info =>
                      <p>{info}</p>)
                  }
                </div>
              </div>
            </div>
            <div className='text-center'>
              <img className='h-auto' src={image_link && image_link[0]} alt="" />
              <div className='pt-4'>
                <h3 className='font-bold'>{input_output_examples && input_output_examples[0].input}</h3>
                <h5 className='pt-4'>{input_output_examples && input_output_examples[0].output}</h5>
              </div>
            </div>
          </div>
          <div className="modal-action">
            <label htmlFor="my-modal-5" className="btn">ok</label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;