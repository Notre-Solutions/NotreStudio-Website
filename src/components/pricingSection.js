import React from "react";
import PricingCard from "./pricingCard";
const pricingSection = ({ title, cards, description,  color }) => {
  var icon;
  if (title === "Web Development") {
    icon = "fas fa-laptop-code";
  } else if (title === "Hosting") {
    icon = "fas fa-server";
  } else if (title === "Web Design") {
    icon = "fas fa-palette";
  }
  return (
    <div>
      <div className="col-md-8 col-md-offset-2 text-center white-text-container">
        <h2>{title}</h2>
      </div>
      <i className={`${icon} col-md-8 col-md-offset-2 text-center white-text-container pricing-icon`}></i>
      <div className="row">
        {cards.map((obj) => {
          return (
            <PricingCard
              title={obj.title}
              amount={obj.amount}
              currency={obj.currency}
              period={obj.period}
              features={obj.features}
              to={obj.to}
              primaryColor={color}
            />
          );
        })}
      </div>
      <br />
      <div className="col-md-8 col-md-offset-2 text-center white-text-container">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default pricingSection;
