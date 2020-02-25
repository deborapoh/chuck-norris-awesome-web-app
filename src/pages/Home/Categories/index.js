import React, { useEffect, useState } from "react";
import { BoxContainer, ListContainer, Icon } from "./styled";
import constants from "~/utils/constants";
import Services from "~/services";

const Category = ({ icon, description }) => {
  icon = icon ? icon : constants.CATEGORIES.newCategory;

  return (
    <BoxContainer>
      <Icon src={icon} />
      {description}
    </BoxContainer>
  );
};

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await Services.Categories.get();
      setCategories(response);
    };
    fetchData();
  }, []);

  return (
    <ListContainer>
      {categories.map(c => (
        <Category key={c} icon={constants.CATEGORIES[c]} description={c} />
      ))}
    </ListContainer>
  );
};

export default Categories;
