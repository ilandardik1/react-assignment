import React, { useState, useEffect } from "react";
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
  const [risks, setRisks] = useState([]);
  const [selectedRiskId, setSelectedRiskId] = useState(0);
  const [risksDetails, setRiskDetails] = useState({
    description: [""],
    summary: "",
    impact: "",
  });
  useEffect(() => {
    const reciveRisks = async () => {
      const { risks } = await getRisks();
      const { details } = await getRiskDetails();
      setRisks(risks);
      const reduceDetails = details.reduce((cacheDetails, rd) => {
        cacheDetails[rd.id] = rd;
        return cacheDetails;
      }, {});
      setRiskDetails(reduceDetails);

      risks.length && setSelectedRiskId(risks[0].id);
    };
    reciveRisks();
  }, []);

  const handleSelect = (id) => {
    setSelectedRiskId(id);
  };

  return (
    <div className="App">
      <div className="Cards">
        {risks.map((risk, i) => (
          <Card
            {...risk}
            key={risk.id}
            handleClick={handleSelect}
            isSelected={selectedRiskId ? selectedRiskId === risk.id : false}
          />
        ))}
      </div>
      <div style={{ width: "30%", height: "100%" }}>
        <CardDetails {...risksDetails[selectedRiskId]} />
      </div>
    </div>
  );
};
