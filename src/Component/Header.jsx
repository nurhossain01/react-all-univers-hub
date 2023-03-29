import React, { useEffect, useState } from 'react';
import Modal from './Modal';
import Tool from './Tool';

const Header = ({ children }) => {
  const [isLimit, setIslimet] = useState(false);
  const [tools, setTools] = useState([]);
  const [details, setDetails] = useState({});
  const [id, setId] = useState(null);
//  console.log(details)



  useEffect( () =>{
    fetch(`https://openapi.programming-hero.com/api/ai/tool/${id}`)
    .then(res => res.json())
    .then(data => setDetails(data.data))
  },[id]);

  useEffect(() => {
    const loadData = async () => {
      const response = await fetch(`https://openapi.programming-hero.com/api/ai/tools`);
      const data = await response.json();
      // const newData = data.data.tools.slice(0, isLimit?12:8);
      setTools(data.data.tools);
    }
    loadData()
  }, []);

  return (
    <>
      <div className='text-center mt-4 mb-12'>
        <button >{children}</button>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {
          tools?.slice(0, isLimit ? 12 : 6).map(tool => <Tool key={tool.id} tool={tool} setId={setId}></Tool>)
        }
      </div>
      <div className='py-4 flex justify-end'>
        {
          !isLimit &&
          <button disabled={isLimit}
            onClick={() => setIslimet(!isLimit)}
            className="btn btn-accent">
            See all...
          </button>
        }
      </div>
      <Modal details={details}></Modal>
    </>
  );
};

export default Header;