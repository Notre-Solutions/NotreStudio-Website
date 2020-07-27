import React from "react";
import AppleStoreSVG from "../img/app-store-apple.inline.svg";
import GooglePlaySVG from "../img/google-play.inline.svg";

const AppStore = ({store}) => {
  if (store === "google") {
    return <GooglePlaySVG className="img-responsive" />;
  } else if (store === "apple") {
    return <AppleStoreSVG className="img-responsive" />;
  }
};

const AppStoreCard = ({store, line1, line2, link}) => {
  console.log(store)
  return (
    <div className="col-md-6 ">
      <div className="download-card ">
        <p>
          {line1} <br />
          {line2}{" "}
        </p>
        <br />
        <a href={link} title="">
          {" "}
          <AppStore store={store}/>
        </a>
      </div>
    </div>
  );
};

export default AppStoreCard;
