import React from "react";

import "./Default.scss";

function DefaultLayout({ children }) {
  return <div className="layout-container">{children}</div>;
}

export default DefaultLayout;
