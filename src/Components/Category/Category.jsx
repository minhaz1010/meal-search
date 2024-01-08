import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CategoryFoods from '../CategoryFoods/CategoryFoods';

const Category = () => {
  const category = useLoaderData();
  // console.log(category.categories);
  const arr= category.categories;
  // console.log(category.meals,Array.isArray(category.meals));
  return (
    <div className='grid grid-cols-3 gap-4 container mx-auto mb-12  '>
      {arr.map((item,idx) => <CategoryFoods
      key={idx}
      details={item}></CategoryFoods>)}
    </div>
  );
};

export default Category;