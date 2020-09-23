import risks from "../utils/risks.json";
import risksDetails from "../utils/riskDetails.json";

export const getRisks = () => {
  return new Promise((resolve, reject) => {
    resolve(risks);
  });
};

export const getRiskDetails = () => {
  return new Promise((resolve, reject) => {
    resolve(risksDetails);
  });
};
