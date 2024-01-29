import { Card } from "antd";

function CVStatistic(props) {
  const { cv, navigate } = props;

  const handleClick = () => {
    navigate(`/cv-manage`);
    window.scrollTo(0, 0);
  };

  const totalCvRead = cv.reduce((total, item) => {
    if (item.statusRead) {
      return total + 1;
    } else {
      return total;
    }
  }, 0);

  return (
    <>
      <Card title="Thống kê CV" hoverable onClick={handleClick}>
        <div>
          <span>Số lượng: </span>
          <strong>{cv.length}</strong>
        </div>

        <div>
          <span>Chưa đọc: </span>
          <strong>{cv.length - totalCvRead}</strong>
        </div>

        <div>
          <span>Đã đọc: </span>
          <strong>{totalCvRead}</strong>
        </div>
      </Card>
    </>
  );
}

export default CVStatistic;
