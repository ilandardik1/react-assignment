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
      <CardDetailsSummary>
        Proident commodo eiusmod consequat nulla occaecat veniam elit aute.
      </CardDetailsSummary>
      <CardDetailsDescription>
        Qui enim qui laborum culpa esse Lorem sunt ex eiusmod et sit anim
        reprehenderit sint. Quis eiusmod laborum cupidatat officia ad quis
        aliquip adipisicing. In adipisicing exercitation nisi excepteur.
      </CardDetailsDescription>
      <CardDetailsImpact>
        Velit voluptate proident consequat consectetur ea ipsum. Enim non Lorem
        consequat nostrud nulla. Anim tempor id do velit culpa duis. Commodo
        amet pariatur pariatur ipsum ipsum quis veniam eiusmod in magna deserunt
        officia consectetur nulla. Anim nostrud minim aute aliqua. Culpa
        excepteur reprehenderit irure fugiat consequat esse. Eiusmod ea minim
        ullamco officia pariatur sit Lorem.
      </CardDetailsImpact>
    </CardDetailsStyle>
  );
};
