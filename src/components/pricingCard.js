import React from "react";

function packagePrice(period, amount, currency) {
  if (period == "none") {
    return <span>{`${currency}${amount}`}</span>;
  } else {
    return <span>{`${currency}${amount}/${period}`}</span>;
  }
}

const pricingCard = ({
  title,
  amount,
  currency,
  period,
  features,
  button,
  to,
  primaryColor,
}) => {
  return (
    <div className="col-md-4">
      <div className="card card__small">
        <div className="card__side card__side--front">
          <div className={`card__picture card__picture-${primaryColor}`}>
            &nbsp;
          </div>
          <h4 className="card__heading ">
            <span className="card__heading-span card__heading-span--1">
              {title}
            </span>
          </h4>
          <div className="card__details">
            <ul>
              {features.map((obj) => {
                return <li>{obj.feature}</li>;
              })}
            </ul>
          </div>
        </div>
        <div className="card__side card__side--back card__side--back-1">
          <div className="card__cta">
            <div className="card__price-box">
              {/* <p className="card__price-only">Only</p> */}
              <p className="card__price-value">
                <span>{`${currency}${amount}`}</span>
                {/* <span>{`${currency}${amount}/${period}`}</span> */}
              </p>
            </div>
            <a
              href={`${to}`}
              target="_blank"
              className="btn btn-primary"
              title=""
            >
              {button}
            </a>
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
