// Node modules imports
import React, { useContext } from "react";
import { useHistory } from "react-router";
import PropTypes from "prop-types";

// Style imports
import { BoxContainer, Icon, Container } from "./styled";

// Utils imports
import constants from "~/utils/constants";
import { translate } from "~/utils/translation";

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
    <Container>
      <BoxContainer onClick={_handleClick}>
        <Icon src={icon} />
        {translatedDescription}
      </BoxContainer>
    </Container>
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

export default Category;
