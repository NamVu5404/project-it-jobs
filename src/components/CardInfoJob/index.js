import { Card, Col, Tag } from "antd";
import { useNavigate } from "react-router-dom";

function CardInfoJob(props) {
  const { item, company } = props;
  const navigate = useNavigate();

  const handleClick = (id, jobData) => {
    navigate(`/job/${id}`, { state: { jobData, company } });
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Col xs={8}>
        <Card
          title={item.name}
          hoverable
          onClick={() => handleClick(item.id, item)}
        >
          <div className="search-result__item">
            <span>Ngôn ngữ: </span>
            {item.tags.map((tag, index) => (
              <Tag color="blue" key={index}>
                {tag}
              </Tag>
            ))}
          </div>

          <div className="search-result__item">
            <span>Thành phố: </span>
            {item.city.map((city, index) => (
              <Tag color="yellow" key={index}>
                {city}
              </Tag>
            ))}
          </div>

          <div className="search-result__item">
            <span>Lương: </span>
            <strong>{item.salary}$</strong>
          </div>

          <div className="search-result__item">
            <span>Công ty: </span>
            <strong>
              {
                company?.find(
                  (itemCompany) => itemCompany.id === item.idCompany
                ).companyName
              }
            </strong>
          </div>

          <div>
            <span>Ngày tạo: </span>
            <strong>{item.createAt}</strong>
          </div>
        </Card>
      </Col>
    </>
  );
}

export default CardInfoJob;
