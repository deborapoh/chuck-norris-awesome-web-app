// Node modules imports
import { useState } from "react";

export default () => {
  const [currentJoke, setCurrentJoke] = useState(null);
  const [icon, setIcon] = useState(null);

  return {
    currentJoke,
    setCurrentJoke,
    icon,
    setIcon
  };
};
