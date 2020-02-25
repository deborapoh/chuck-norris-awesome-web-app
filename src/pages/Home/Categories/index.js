import React from "react";
import { BoxContainer, ListContainer } from "./styled";
import constants from "~/utils/constants";

const Category = () => <BoxContainer></BoxContainer>;

const Categories = () => (
  <ListContainer>
    {constants.CATEGORIES.map(c => (
      <Category key={`${c}`} icon={c} />
    ))}
  </ListContainer>
);

export default Categories;
