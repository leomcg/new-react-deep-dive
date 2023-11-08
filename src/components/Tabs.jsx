import { Fragment } from "react";

const Tabs = ({ children, buttons }) => {
  return (
    <Fragment>
      <menu>{buttons}</menu>
      <div id="tab-content">{children}</div>
    </Fragment>
  );
};

export default Tabs;
