import { Button, Space, Table, Tag, Tooltip } from "antd";
import { EyeOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import EditJobManage from "./EditJobManage";

function JobManage() {
  const jobs = JSON.parse(sessionStorage.getItem("jobs"));
  const data = jobs.map((item) => ({
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
      dataIndex: "tags",
      key: "tags",
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
          <div>Ngày tạo: {createAt}</div>
          <div>Cập nhật: {updateAt}</div>
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
            <Link to="/job-detail" record={record}>
              <Button icon={<EyeOutlined />} />
            </Link>
          </Tooltip>
          <Tooltip title="Chỉnh sửa">
            <EditJobManage record={record} />
          </Tooltip>
          <Tooltip title="Xóa">
            <Button danger icon={<DeleteOutlined />} />
          </Tooltip>
        </Space>
      ),
    },
  ];

  return (
    <>
      <h2 style={{ color: "#000" }}>Danh sách việc làm</h2>
      <Button type="primary" ghost style={{ marginBottom: "30px" }}>
        + Thêm mới
      </Button>
      <Table columns={columns} dataSource={data} />
    </>
  );
}

export default JobManage;
