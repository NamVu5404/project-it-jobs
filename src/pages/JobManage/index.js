import { Button, Space, Table, Tag, Tooltip } from "antd";
import { EyeOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import EditJobManage from "./EditJobManage";
import { getCookie } from "../../helpers/cookies";
import { useEffect, useState } from "react";
import { getListJob } from "../../services/searchService";
import DeleteJobManage from "./DeleteJobManage";
import CreateJobManage from "./CreateJobManage";

function JobManage() {
  const navigate = useNavigate();
  const companyId = +getCookie("companyId");
  const [jobs, setJobs] = useState();

  const fetchApi = async () => {
    const responseJob = await getListJob();
    setJobs(
      responseJob.filter((item) => item.idCompany === companyId).reverse()
    );
  };

  useEffect(() => {
    fetchApi();
  }, []);

  const handleReload = () => {
    fetchApi();
  };

  const data =
    jobs &&
    jobs.map((item) => ({
      ...item,
      key: item.id,
    }));

  const columns = [
    {
      title: "Tên job",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Tags",
      key: "tags",
      render: (_, record) =>
        record.tags.map((item, index) => (
          <Tag color="blue" key={index}>
            {item}
          </Tag>
        )),
    },
    {
      title: "Mức lương($)",
      dataIndex: "salary",
      key: "salary",
    },
    {
      title: "Thời gian",
      dataIndex: ["createAt", "updateAt"],
      key: "time",
      render: (_, { createAt, updateAt }) => (
        <>
          <div>
            Ngày tạo: <br />
            {createAt}
          </div>
          {updateAt && (
            <div>
              Cập nhật: <br />
              {updateAt}
            </div>
          )}
        </>
      ),
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
      render: (_, { status }) =>
        status ? (
          <Tag color="green">Đang bật</Tag>
        ) : (
          <Tag color="red">Đang tắt</Tag>
        ),
    },
    {
      title: "Hành động",
      key: "action",
      render: (_, record) => (
        <Space>
          <Tooltip title="Xem chi tiết">
            <Button
              icon={<EyeOutlined />}
              onClick={() =>
                navigate(`/job-manage/${record.id}`, {
                  state: { record },
                })
              }
            />
          </Tooltip>
          <EditJobManage record={record} onReload={handleReload} />
          <DeleteJobManage record={record} onReload={handleReload} />
        </Space>
      ),
    },
  ];

  return (
    <>
      <h2 style={{ color: "#000" }}>Danh sách việc làm</h2>
      <CreateJobManage onReload={handleReload} />
      {data && (
        <Table
          columns={columns}
          dataSource={data}
          pagination={{
            defaultPageSize: 5,
            showSizeChanger: true,
            pageSizeOptions: ["5", "10", "15"],
          }}
        />
      )}
    </>
  );
}

export default JobManage;
