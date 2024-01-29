import DefaultLayout from "../Layout/DefaultLayout";
import LayoutAdmin from "../Layout/LayoutAdmin";
import Search from "../components/Search";
import CVManage from "../pages/CVManage";
import Company from "../pages/Company";
import CompanyAll from "../pages/Company/CompanyAll";
import CompanyDetails from "../pages/Company/CompanyDetails";
import CompanyManage from "../pages/CompanyManage";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import Job from "../pages/Job";
import JobDetails from "../pages/Job/JobDetails";
import JobManage from "../pages/JobManage";
import JobDetailManage from "../pages/JobManage/JobDetailManage";
import Login from "../pages/Login";
import Register from "../pages/Register";

export const routes = [
  {
    // public router
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        index: true,
        path: "/",
        element: <Home />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/job",
        element: <Job />,
        children: [
          {
            path: ":id",
            element: <JobDetails />,
          },
        ],
      },
      {
        path: "/company",
        element: <Company />,
        children: [
          {
            path: "/company",
            element: <CompanyAll />,
          },
          {
            path: ":id",
            element: <CompanyDetails />,
          },
        ],
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  // end public router

  // private router
  {
    path: "/",
    element: <LayoutAdmin />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "info-company",
        element: <CompanyManage />,
      },
      {
        path: "job-manage",
        element: <JobManage />,
      },
      {
        path: "cv-manage",
        element: <CVManage />,
      },
      {
        path: "job-detail",
        element: <JobDetailManage />,
        children: [
          {
            path: ":id",
            element: <JobDetailManage />
          }
        ]
      },
    ],
  },
  // end private router
];
