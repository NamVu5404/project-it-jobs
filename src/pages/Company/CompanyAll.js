import { useLocation } from "react-router-dom";
import CardInfoCompany from "../../components/CardInfoCompany";
import ScrollToTop from "../../components/ScrollToTop";
import { Row } from "antd";

function CompanyAll() {
  const location = useLocation();
  const { company } = location.state || [];

  return (
    <>
      <h2 style={{ color: "#000" }}>Danh sách các công ty</h2>

      <Row gutter={[15, 15]}>
        {company.map((item) => (
          <CardInfoCompany company={item} key={item.id} />
        ))}
      </Row>

      <ScrollToTop />
    </>
  );
}

export default CompanyAll;
