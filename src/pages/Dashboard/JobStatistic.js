import { Card } from "antd";

function JobStatistic(props) {
  const { jobs, navigate } = props;

  const handleClick = () => {
    navigate(`/job-manage`);
    window.scrollTo(0, 0);
  };

  const statusIsTurnOn = jobs.reduce((total, item) => {
    if (item.status) {
      return total + 1;
    } else {
      return total;
    }
  }, 0);

  return (
    <>
      <Card title="Thống kê các Job" hoverable onClick={handleClick}>
        <div>
          <span>Số lượng: </span>
          <strong>{jobs.length}</strong>
        </div>

        <div>
          <span>Đang bật: </span>
          <strong>{statusIsTurnOn}</strong>
        </div>

        <div>
          <span>Đang tắt: </span>
          <strong>{jobs.length - statusIsTurnOn}</strong>
        </div>
      </Card>
    </>
  );
}

export default JobStatistic;
