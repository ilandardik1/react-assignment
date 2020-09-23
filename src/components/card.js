import { CardItem, ProperyList, PropsLabel, Summary } from "./cardStyled";
import React, { Component } from "react";

export const Card = ({
  id,
  summary,
  urgency,
  impact,
  resourceType,
  region,
}) => {
  return (
    <CardItem isActive={false}>
      <Summary>{summary || "Exercitation est esse sit magna dolor."}</Summary>
      <ProperyList>
        <PropsLabel>decription here</PropsLabel>
        <PropsLabel>urgency here</PropsLabel>
        <PropsLabel>region here</PropsLabel>
      </ProperyList>
    </CardItem>
  );
};
