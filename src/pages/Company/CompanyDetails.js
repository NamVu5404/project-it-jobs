import { Link, useLocation } from "react-router-dom";
import GoBack from "../../components/GoBack";
import { useEffect, useState } from "react";
import { getListJob } from "../../services/searchService";
import CardInfoJob from "../../components/CardInfoJob";
import { Row } from "antd";
import ScrollToTop from "../../components/ScrollToTop";

function CompanyDetails() {
  const location = useLocation();
  const { company } = location.state;
  const [job, setJob] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const response = await getListJob();
      setJob(response.filter((item) => item.idCompany === company.id).reverse());
    };
    fetchApi();
  }, [company.id]);

  return (
    <>
      <GoBack step={-1} name="Trở lại" />

      <div className="company-detail">
        <h2 className="company-detail__title">{company.companyName}</h2>

        <div className="company-detail__content">
          <strong>Địa chỉ: </strong>
          <span>{company.address}</span>
        </div>

        <div className="company-detail__content">
          <strong>Số lượng nhân sự: </strong>
          <span>{company.quantityPeople}</span>
        </div>

        <div className="company-detail__content">
          <strong>Thời gian làm việc: </strong>
          <span>{company.workingTime}</span>
        </div>

        <div className="company-detail__content">
          <strong>Link website: </strong>
          <span>
            <Link to={company.website} target="_blank">
              {company.website}
            </Link>
          </span>
        </div>

        <div className="company-detail__content">
          <strong>Mô tả ngắn: </strong>
          <br />
          <span>{company.description}</span>
        </div>

        <div className="company-detail__content">
          <strong>Mô tả chi tiết: </strong>
          <br />
          <span>{company.detail}</span>
        </div>

        <h4 className="company-detail__list">Danh sách các job:</h4>
        {job.length ? (
          <>
            <Row gutter={[15, 15]}>
              {job.map((item) => (
                item.status && <CardInfoJob item={item} company={[company]} key={item.id} />
              ))}
            </Row>
          </>
        ) : (
          <strong>Chưa có dữ liệu!</strong>
        )}
      </div>

      <ScrollToTop />
    </>
  );
}

export default CompanyDetails;
