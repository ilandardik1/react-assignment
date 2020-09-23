import React from "react";
import {
  CardDetailsStyle,
  CardDetailsDescription,
  CardDetailsSummary,
  CardDetailsImpact,
} from "./cardStyled";

export const CardDetails = ({ description, summary, impact }) => {
  return (
    <CardDetailsStyle>
      <CardDetailsSummary>{summary}</CardDetailsSummary>
      {/* <CardDetailsDescription>{description[0]}</CardDetailsDescription> */}
      <CardDetailsImpact>{impact}</CardDetailsImpact>
    </CardDetailsStyle>
  );
};
