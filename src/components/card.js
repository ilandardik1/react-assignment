import { CardItem, ProperyList, PropsLabel, Summary } from "./cardStyled";
import React, { Component } from "react";

export const Card = ({
  id,
  summary,
  urgency,
  impact,
  isSelected,
  resourceType,
  region,
  handleClick,
}) => {
  return (
    <CardItem isActive={isSelected} onClick={() => handleClick(id)}>
      <Summary>{summary || "Exercitation est esse sit magna dolor."}</Summary>
      <ProperyList>
        <PropsLabel>{resourceType}</PropsLabel>
        <PropsLabel>{urgency}</PropsLabel>
        <PropsLabel>{region}</PropsLabel>
      </ProperyList>
    </CardItem>
  );
};
