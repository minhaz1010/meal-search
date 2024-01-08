import React from 'react';
import { useLoaderData } from 'react-router-dom';
import MenuItem from '../MenuItem/MenuItem';

const EachCategory = () => {
  const item = useLoaderData();
  console.log(item.meals);
  return (
    <div className='grid grid-cols-3 container mx-auto gap-4 mt-5'>
      {item.meals.map((item) => <MenuItem
      key={item.idMeal}
      details={item}></MenuItem>)}
    </div>
  );
};

export default EachCategory;