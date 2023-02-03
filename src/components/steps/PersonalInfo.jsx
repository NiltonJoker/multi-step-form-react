import React from "react";

export default function PersonalInfo() {
  return (
    <div className="form-fields fade-in">
      <div className="form-group">
        <label htmlFor="">Name</label>
        <input type="text" placeholder="e.g. Stephen King" />
      </div>
      <div className="form-group">
        <label htmlFor="">Email Address</label>
        <input type="text" placeholder="e.g. stephenking@lorem.com" />
      </div>
      <div className="form-group">
        <label htmlFor="">Phone Number</label>
        <input type="text" placeholder="e.g. +1 234 567 890" />
      </div>
    </div>
  );
}
