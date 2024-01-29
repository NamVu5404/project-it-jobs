import { Button, Popconfirm, Tooltip } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { deleteCv } from "../../services/companyService";

function DeleteCvManage(props) {
  const { record, onReload } = props;

  const handleConfirm = async () => {
    const response = await deleteCv(record.id);
    response && onReload();
  };

  return (
    <>
      <Popconfirm
        title="Xóa CV"
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

export default DeleteCvManage;
