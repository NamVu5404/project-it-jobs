import { Button, Popconfirm, Tooltip, message } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { deleteJob } from "../../services/companyService";
import { useEffect, useState } from "react";
import { getListCv } from "../../services/searchService";

function DeleteJobManage(props) {
  const { record, onReload } = props;
  const [messageApi, contextHolder] = message.useMessage();
  const [cv, setCv] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const response = await getListCv();
      setCv(response.filter((item) => item.idJob === record.id));
    };
    fetchApi();
  }, []);

  const error = () => {
    messageApi.open({
      type: "error",
      content: "Không thể xóa job này do đã có người ứng tuyển!",
    });
  };

  const handleConfirm = async () => {
    if (cv.length) {
      error();
    } else {
      const response = await deleteJob(record.id);
      response && onReload();
    }
  };

  return (
    <>
      {contextHolder}
      <Popconfirm
        title="Xóa Job"
        description="Chắc chắn xóa?"
        okText="Yes"
        cancelText="No"
        onConfirm={handleConfirm}
      >
        <Tooltip title="Xóa">
          <Button danger icon={<DeleteOutlined />} />
        </Tooltip>
      </Popconfirm>
    </>
  );
}

export default DeleteJobManage;
