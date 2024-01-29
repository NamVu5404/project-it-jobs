import { useLocation } from "react-router-dom";
import GoBack from "../../components/GoBack";
import { Tag } from "antd";
import ScrollToTop from "../../components/ScrollToTop";

function JobDetailManage() {
  const location = useLocation();
  const record = location.state.record;

  return (
    <>
      <div className="bg">
        <GoBack step={-1} name="Trở lại" />
        <ScrollToTop />

        <div className="job-detail">
          <h2 className="job-detail__name">{record.name}</h2>

          <div className="job-detail__content">
            <strong>Trạng thái: </strong>
            {record.status ? (
              <Tag color="green">Đang bật</Tag>
            ) : (
              <Tag color="red">Đang tắt</Tag>
            )}
          </div>

          <div className="job-detail__content">
            <strong>Tags: </strong>
            {record.tags.map((item, index) => (
              <Tag color="blue" key={index}>
                {item}
              </Tag>
            ))}
          </div>

          <div className="job-detail__content">
            <strong>Thành phố: </strong>
            {record.city.map((item, index) => (
              <Tag color="yellow" key={index}>
                {item}
              </Tag>
            ))}
          </div>

          <div className="job-detail__content">
            <strong>Mức lương: </strong>
            <span>{record.salary}$</span>
          </div>

          <div className="job-detail__content">
            <strong>Ngày tạo: </strong>
            <span>{record.createAt}</span>
          </div>

          <div className="job-detail__content">
            <strong>Cập nhật: </strong>
            <span>{record.updateAt}</span>
          </div>

          <div className="job-detail__content">
            <strong>Mô tả: </strong>
            <br />
            {record.description}
          </div>
        </div>
      </div>
    </>
  );
}

export default JobDetailManage;
