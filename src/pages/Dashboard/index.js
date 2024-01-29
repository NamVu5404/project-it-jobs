import { Col, Row } from "antd";
import JobStatistic from "./JobStatistic";
import { getCookie } from "../../helpers/cookies";
import { useEffect, useState } from "react";
import {
  getListCompany,
  getListCv,
  getListJob,
} from "../../services/searchService";
import CVStatistic from "./CVStatistic";
import { useNavigate } from "react-router-dom";
import InfoCompanySub from "./InfoCompanySub";

function Dashboard() {
  const companyId = +getCookie("companyId");
  const [jobs, setJobs] = useState([]);
  const [cv, setCv] = useState([]);
  const [company, setCompany] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchApi = async () => {
      const responseJob = await getListJob();
      setJobs(responseJob.filter((item) => item.idCompany === companyId));

      const responseCv = await getListCv();
      setCv(responseCv.filter((item) => item.idCompany === companyId));

      const responseCompany = await getListCompany();
      setCompany(responseCompany[companyId - 1]);
    };
    fetchApi();
  }, [companyId]);

  return (
    <>
      <h2 style={{ color: "#000" }}>Tổng quan</h2>

      <Row gutter={[12, 12]}>
        <Col xs={8}>
          {company && <InfoCompanySub company={company} navigate={navigate} />}
        </Col>
        <Col xs={8}>
          {jobs && <JobStatistic jobs={jobs} navigate={navigate} />}
        </Col>
        <Col xs={8}>{cv && <CVStatistic cv={cv} navigate={navigate} />}</Col>
      </Row>
    </>
  );
}

export default Dashboard;
