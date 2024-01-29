import { Outlet } from "react-router-dom";

function Job() {
  return (
    <>
      <div className="bg">
        <Outlet />
      </div>
    </>
  );
}

export default Job;
