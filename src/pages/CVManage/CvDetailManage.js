import { Link, useLocation } from "react-router-dom";
import GoBack from "../../components/GoBack";
import ScrollToTop from "../../components/ScrollToTop";
import { Button, Tag } from "antd";

function CvDetailManage() {
  const location = useLocation();
  const cv = location.state.record;
  const job = location.state.job.find((item) => item.id === cv.idJob);

  return (
    <>
      <div className="bg">
        <GoBack step={-1} name="Trở lại" />
        <ScrollToTop />

        <div className="job-detail">
          <h2 className="job-detail__name">{job.name}</h2>

          <div className="job-detail__content">
            <strong>Trạng thái: </strong>
            {cv.statusRead ? (
              <Tag color="gray">Đã đọc</Tag>
            ) : (
              <Tag color="green">Chưa đọc</Tag>
            )}
          </div>

          <div className="job-detail__content">
            <strong>Thành phố: </strong>
            <Tag color="yellow">{cv.city}</Tag>
          </div>

          <div className="job-detail__content">
            <strong>Họ và tên: </strong>
            {cv.name}
          </div>

          <div className="job-detail__content">
            <strong>Số điện thoại: </strong>
            {cv.phone}
          </div>

          <div className="job-detail__content">
            <strong>Email: </strong>
            {cv.email}
          </div>

          <div className="job-detail__content">
            <strong>Giới thiệu: </strong>
            {cv.description}
          </div>

          <div className="job-detail__content">
            <strong>Danh sách link các project: </strong>
            {cv.linkProject.length &&
              cv.linkProject.map((item, index) => (
                <li key={index}>
                  <Link to={item} target="_blank">
                    {item}
                  </Link>
                </li>
              ))}
          </div>

          <div className="job-detail__content">
            <strong>Ngày gửi: </strong>
            {cv.createAt}
          </div>
        </div>
      </div>
    </>
  );
}

export default CvDetailManage;
