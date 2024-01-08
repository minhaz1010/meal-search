import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CCountryItem from '../CCountryItem/CCountryItem';

const Country = () => {
  const list = useLoaderData();
  console.log(list.meals);
  return (
    <div className='grid grid-cols-3 container mx-auto mt-5 mb-10 gap-4'>
      {
        list.meals.map((item,idx) => <CCountryItem key={idx} details={item}></CCountryItem> )
      }
    </div>
  );
};

export default Country;