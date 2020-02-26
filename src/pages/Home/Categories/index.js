import React, { useEffect, useState, useContext } from "react";
import { useHistory } from "react-router";
import { BoxContainer, ListContainer, Icon } from "./styled";
import constants from "~/utils/constants";
import Services from "~/services";
import AppContext from "~/store/AppContext";
import { translate } from "~/utils/translation";

const Category = ({ icon, description }) => {
  const { setSelectedCategory } = useContext(AppContext);
  const history = useHistory();
  icon = icon ? icon : constants.CATEGORIES.newCategory;

  const translatedDescription =
    constants.CATEGORIES[description] !== undefined
      ? translate({ id: `category.${description}` })
      : description;

  const _handleClick = () => {
    setSelectedCategory(description);
    history.push(`${constants.ROUTES.JOKE}/${description}`);
  };

  return (
    <BoxContainer onClick={_handleClick}>
      <Icon src={icon} />
      {translatedDescription}
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
