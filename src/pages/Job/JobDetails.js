import { Button, Tag } from "antd";
import { useLocation } from "react-router-dom";
import "./JobDetails.scss";
import FormApply from "../../components/FormApply";
import GoBack from "../../components/GoBack";
import { Link } from "react-scroll";

function JobDetails() {
  const location = useLocation();
  const job = location.state.jobData;
  const company = location.state.company.find(
    (item) => item.id === job.idCompany
  );

  return (
    <>
      <GoBack step={-1} name="Trở lại" />

      <div className="job-detail">
        <h2 className="job-detail__name">{company.companyName}</h2>

        <h1 className="job-detail__title">{job.name}</h1>
        <Link
          activeClass="active"
          to="form"
          spy={true}
          smooth={true}
          offset={-150}
          duration={500}
        >
          <Button type="primary" size="large">
            Ứng tuyển ngay
          </Button>
        </Link>

        <div className="job-detail__content">
          <strong>Ngôn ngữ: </strong>
          {job.tags.map((item, index) => (
            <Tag color="blue" key={index}>
              {item}
            </Tag>
          ))}
        </div>

        <div className="job-detail__content">
          <strong>Thành phố: </strong>
          {job.city.map((item, index) => (
            <Tag color="yellow" key={index}>
              {item}
            </Tag>
          ))}
        </div>

        <div className="job-detail__content">
          <strong>Mức lương: </strong>
          <span>{job.salary}$</span>
        </div>

        <div className="job-detail__content">
          <strong>Địa chỉ công ty: </strong>
          <span>{company.address}</span>
        </div>

        <div className="job-detail__content">
          <strong>Thời gian làm việc: </strong>
          <span>{company.workingTime}</span>
        </div>

        <div className="job-detail__content">
          <strong>Mô tả công việc: </strong>
          <span>{job.description}</span>
        </div>

        <div className="job-detail__content">
          <strong>Thời gian đăng bài: </strong>
          <span>{job.createAt}</span>
        </div>
      </div>

      <FormApply job={job} company={company} />
    </>
  );
}

export default JobDetails;
