import { useState } from "react";

export default () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return {
    selectedCategory,
    setSelectedCategory
  };
};
