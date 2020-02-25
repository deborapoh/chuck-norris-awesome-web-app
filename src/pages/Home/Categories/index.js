import React, { useEffect, useState } from "react";
import { BoxContainer, ListContainer, Icon } from "./styled";
import constants from "~/utils/constants";
import Services from "~/services";

const Category = ({ icon }) => (
  <BoxContainer>
    <Icon src={icon} />
  </BoxContainer>
);

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(async () => {
    const response = await Services.Categories.get();
    setCategories(response);
  }, []);

  return (
    <ListContainer>
      {categories.map(c => (
        <Category key={`${c}`} icon={constants.CATEGORIES[c]} />
      ))}
    </ListContainer>
  );
};

export default Categories;
