import { getCookie } from "../../helpers/cookies";
import { useEffect, useState } from "react";
import { getListCv, getListJob } from "../../services/searchService";
import { Button, Space, Table, Tag, Tooltip } from "antd";
import { EyeOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { editStatusReadCv } from "../../services/companyService";
import DeleteCvManage from "./DeleteCvManage";

function CVManage() {
  const companyId = +getCookie("companyId");
  const [cv, setCv] = useState();
  const [job, setJob] = useState();
  const navigate = useNavigate();

  const fetchApi = async () => {
    const responseCv = await getListCv();
    setCv(responseCv.filter((item) => item.idCompany === companyId).reverse());

    const responseJob = await getListJob();
    setJob(responseJob.filter((item) => item.idCompany === companyId));
  };

  useEffect(() => {
    fetchApi();
  }, []);

  const handleReload = () => {
    fetchApi();
  }

  const handleReadCv = async (id) => {
    await editStatusReadCv(id, {
      statusRead: true,
    });
  };

  const data =
    cv &&
    cv.map((item) => ({
      ...item,
      key: item.id,
    }));

  const columns = [
    {
      title: "Tên job",
      key: "nameJob",
      render: (_, record) =>
        job && job.find((item) => item.id === record.idJob).name,
    },
    {
      title: "Họ tên",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Số điện thoại",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Ngày gửi",
      dataIndex: "createAt",
      key: "createAt",
    },
    {
      title: "Trạng thái",
      key: "statusRead",
      render: (_, record) =>
        record.statusRead ? (
          <Tag color="gray">Đã đọc</Tag>
        ) : (
          <Tag color="green">Chưa đọc</Tag>
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
              onClick={() => {
                navigate(`/cv-manage/${record.id}`, { state: { record, job } });
                handleReadCv(record.id);
              }}
            />
          </Tooltip>
          <DeleteCvManage record={record} onReload={handleReload} />
        </Space>
      ),
    },
  ];

  return (
    <>
      <h2 style={{ color: "#000" }}>Danh sách CV</h2>
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

export default CVManage;
