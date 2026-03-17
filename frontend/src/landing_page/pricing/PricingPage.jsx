import React from "react";
import Hero from "./Hero";
import Brokerage from "./Brokerage";
import OpenAccount from "../OpenAccount";
function PricingPage() {
  return (
    <>
      <Hero></Hero>
      <OpenAccount />
      <Brokerage></Brokerage>
    </>
  );
}

export default PricingPage;
