// Node modules imports
import React, { useEffect, useState } from "react";

// Style imports
import { ListContainer } from "./styled";

// Components imports
import Category from "~/components/Category";

// Utils imports
import constants from "~/utils/constants";

// Services imports
import Services from "~/services";

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
