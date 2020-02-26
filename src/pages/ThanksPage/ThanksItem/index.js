// Node modules imports
import React from "react";

// Style imports
import { Description, UrlLink } from "./styled";

// Utils imports
// import { translate } from "~/utils/translation";

const ThanksItem = ({ name, url }) => (
  <Description>
    <UrlLink href={url} title={name}>
      {name}
    </UrlLink>
    {" from "}
    <UrlLink href={"https://www.flaticon.com/br/"} title={"www.flaticon.com"}>
      {"www.flaticon.com"}
    </UrlLink>
  </Description>
);

export default ThanksItem;
