import { Card } from "antd";

function InfoCompanySub(props) {
  const { company, navigate } = props;

  const handleClick = () => {
    navigate(`/info-company`);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Card title="Thông tin công ty" hoverable onClick={handleClick}>
        <div>
          <span>Tên công ty: </span>
          <strong>{company.companyName}</strong>
        </div>

        <div>
          <span>Email: </span>
          <strong>{company.email}</strong>
        </div>

        <div>
          <span>Số điện thoại: </span>
          <strong>{company.phone}</strong>
        </div>

        <div>
          <span>Số nhân sự: </span>
          <strong>{company.quantityPeople}</strong>
        </div>
      </Card>
    </>
  );
}

export default InfoCompanySub;
