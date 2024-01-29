import { Outlet } from "react-router-dom";
import "./Company.scss";

function Company() {
  return (
    <>
      <div className="bg">
        <Outlet />
      </div>
    </>
  );
}

export default Company;
