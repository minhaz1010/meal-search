import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Foods from '../Foods/Foods';

const Home = () => {
  const allFoods = useLoaderData();
  console.log(allFoods.meals);
  return (
    <div className='grid md:grid-cols-3 gap-y-5 container mx-auto mt-4 '>
       {allFoods.meals.map((food) => <Foods 
       key={food.id}
       food={food}></Foods>)}
    </div>
  );
};

export default Home;