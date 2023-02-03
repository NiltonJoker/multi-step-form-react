import React from "react";
import thankIcon from "../../assets/images/icon-thank-you.svg";

export default function ThankView() {
  return (
    <div className="main__container">
      <div className="main__form">
        <div className="thank-container">
          <img src={thankIcon} alt="Thanks Icon" />

          <p className="thank-title">Thank you!</p>

          <p className="thank-description">
            Thanks for confirming your subscription! We hope you have fun using
            our platform. If you ever need support, please feel free to email us
            at support@loremgaming.com.
          </p>
        </div>
      </div>
    </div>
  );
}
