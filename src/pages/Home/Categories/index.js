// Node modules imports
import React, { useEffect, useState, useContext } from "react";
import { useHistory } from "react-router";
import PropTypes from "prop-types";

// Style imports
import { BoxContainer, ListContainer, Icon } from "./styled";

// Utils imports
import constants from "~/utils/constants";
import { translate } from "~/utils/translation";

// Services imports
import Services from "~/services";

// Context imports
import AppContext from "~/store/AppContext";

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

Category.propTypes = {
  description: PropTypes.string,
  icon: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
    PropTypes.func
  ])
};

Category.defaultProps = {
  description: "Category not found"
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
      {categories.length > 0 &&
        categories.map(c => (
          <Category key={c} icon={constants.CATEGORIES[c]} description={c} />
        ))}
    </ListContainer>
  );
};

export default Categories;
