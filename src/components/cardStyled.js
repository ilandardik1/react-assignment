import styled, { css } from "styled-components";
import * as cssGlobals from "../utils/cssUtils";

export const CardItem = styled.div`
  box-sizing: border-box;
  display: flex;
  height: 100%;
  max-height: 150px;
  position: relative;
  background-color: ${cssGlobals.secondaryGrayColor};
  background-color: rgba(255, 255, 255, 1);
  box-shadow: 1px 1px 3px 1px rgba(12, 82, 109, 0.25);
  box-sizing: border-box;
  -webkit-flex: 668 0 auto;
  -ms-flex: 668 0 auto;
  flex: 668 0 auto;
  height: -webkit-fit-content;
  height: -moz-fit-content;
  height: fit-content;
  -webkit-box-pack: space-around;
  -webkit-justify-content: space-around;
  -ms-flex-pack: space-around;
  justify-content: space-around;
  margin-bottom: 1.625rem;
  margin-left: 0;
  max-width: 100%;
  padding: 0 1rem 0.5rem 0;
  width: 100%;
  align-items: center;
  flex-direction: column;
`;

export const PropsLabel = styled.div`
  color: grey;
  font-size: ${cssGlobals.fontSize12px};
  padding: 5px;
`;

export const Summary = styled.div`
  line-height: 1.25rem;
  overflow: hidden;
  position: relative;
`;

export const ProperyList = styled.div`
  display: flex;
  flex-direction: row;
`;

export const CardDetailsStyle = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  flex-direction: column;
  background-color: ${cssGlobals.secondaryGrayColorWith25Opacity};
  > div {
    margin-bottom: 1rem;
  }
`;

export const CardDetailsSummary = styled.div`
  line-height: 1.25rem;
  font-size: 2rem;
  text-align: center;
`;

export const CardDetailsDescription = styled.div`
  line-height: 1.25rem;
  font-size: 1.5rem;
  text-align: center;
`;

export const CardDetailsImpact = styled.div`
  line-height: 1.25rem;
  font-size: 1.5rem;
  text-align: center;
`;
