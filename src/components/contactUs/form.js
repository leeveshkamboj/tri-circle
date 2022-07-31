import React from "react";

import "./form.css";

export const Form = () => {
  return (
    <div className="form-control">
      <div>
        Name: <input />
      </div>
      <div>
        Email: <input />
      </div>
      <div>
        Message: <textarea />
      </div>
      <div>
        <div>
          <input type="submit" className="submit-btn" />
        </div>
      </div>
    </div>
  );
};
