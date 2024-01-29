import { Card, Col } from "antd";
import { Link, useNavigate } from "react-router-dom";

function CardInfoCompany(props) {
  const { company } = props;
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/company/${id}`, { state: { company: company } });
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Col xs={8}>
        <Card
          title={company.companyName}
          hoverable
          onClick={() => handleClick(company.id)}
        >
          <div>
            <span>Số điện thoại: </span>
            <strong>{company.phone}</strong>
          </div>

          <div>
            <span>Email: </span>
            <strong>{company.email}</strong>
          </div>

          <div>
            <span>Số nhân sự: </span>
            <strong>{company.quantityPeople}</strong>
          </div>

          <div>
            <span>Địa chỉ: </span>
            <br />
            <strong>{company.address}</strong>
          </div>

          <div>
            <span>Thời gian làm việc: </span>
            <br />
            <strong>{company.workingTime}</strong>
          </div>

          <div>
            <span>Website: </span>
            <strong>
              <Link to={company.website} target="_blank">
                {company.website}
              </Link>
            </strong>
          </div>
        </Card>
      </Col>
    </>
  );
}

export default CardInfoCompany;
