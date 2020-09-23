import React from "react";
import "../App.css";
import { Card } from "../components/card";
import { CardDetails } from "../components/cardDetails";
import { getRisks, getRiskDetails } from "../sdk/risks";

export const CardView = () => {
  //TODO this class should manage the state of both cards and card details
  //TODO 1. Use Risks sdk to get list of risks and display them
  //TODO 2. onClick on one of the cards mark the relevant risk as active with the following css border-left: 8px solid rgba(25, 129, 170, 1)
  //TODO 3. onClick display the relevant riskDetails data on the CardDetails component
  //TODO 4. implement the uncommented sort by date, urgency, region

  return (
    <div className="App">
      <div>
        {/* <div className="button">Sort by Date</div>
        <div className="button">Sort by Urgency</div>
        <div className="button">Sort by Region</div> */}
      </div>
      <div className="Cards">
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
      <div style={{ width: "30%", height: "100%" }}>
        <CardDetails />
      </div>
    </div>
  );
};
