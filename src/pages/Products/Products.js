import React from "react";
import { InfoSection } from "../../components";
import { homeObjFour, homeObjThree, homeObjTwo } from "./Data";

const Products = () => {
  return (
    <>
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
      <InfoSection {...homeObjFour} />
    </>
  );
};

export default Products;
