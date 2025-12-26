import React, { useState } from 'react'
import './Home.css'
import ExploreMenu from '../../componetes/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../componetes/FoodDisplay/FoodDisplay';
import Header from '../../componetes/Header/Header';

export default function Home() {
  const [category, setCategory] = useState("All");

  return (
    <>
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category}/>
    </>
  );
}
