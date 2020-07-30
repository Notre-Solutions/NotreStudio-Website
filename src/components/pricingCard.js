import React from "react";
import { Link } from "gatsby";
const pricingCard = ({
  title,
  amount,
  currency,
  period,
  features,
  to,
  primaryColor,
}) => {
  return (
    <div className="col-md-4">
      <div class="card">
        <div class="card__side card__side--front">
          <div class={`card__picture card__picture-${primaryColor}`}>
            &nbsp;
          </div>
          <h4 class="card__heading ">
            <span class="card__heading-span card__heading-span--1">
              {title}
            </span>
          </h4>
          <div class="card__details">
            <ul>
              {features.map((obj) => {
                return <li>{obj.feature}</li>;
              })}
            </ul>
          </div>
        </div>
        <div class="card__side card__side--back card__side--back-1">
          <div class="card__cta">
            <div class="card__price-box">
              <p class="card__price-only">Only</p>
              <p class="card__price-value">
                <span>{`${currency}${amount}/${period}`}</span>
              </p>
            </div>
            <Link to={`/${to}`} className="btn btn-primary" title="">
              Subscribe
            </Link>
          </div>
        </div>
      </div>
    </div>

    // <div className="col-md-4">
    //   <div className={`pricing-card pricing-primary-${primaryColor} `}>
    //     <h3>{title}</h3>
    //     <h6 className="price">
    //       {amount} <span>{`${currency}/${period}`}</span>
    //     </h6>
    //   </div>
    //   <div className="pricing-features">
    //     <ul className="features">
    //       {features.map(obj=>{
    //         return(
    //           <li>{obj.feature}</li>
    //         )
    //       })}
    //     </ul>
    //     <Link to={`./${to}`}className="btn btn-primary" title="">
    //       Subscribe
    //     </Link>
    //   </div>
    // </div>
  );
};

export default pricingCard;
