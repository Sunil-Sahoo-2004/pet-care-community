import React, { useState } from "react";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import PetDisplay from "../../components/PetDisplay/PetDisplay";

const ExploreBuyPet = () => {
  const [category, setCategory] = useState("All");
  return (
    <div>
      <ExploreMenu category={category} setCategory={setCategory} />
      <PetDisplay category={category} />
    </div>
  );
};

export default ExploreBuyPet;
