import { Button } from "antd";
import { EyeOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";

function EditJobManage(props) {
  const { record } = props;
  console.log(record);

  return (
    <>
      <Button type="primary" ghost icon={<EditOutlined />} />
    </>
  )
}

export default EditJobManage;