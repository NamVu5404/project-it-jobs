import { Button, Col, Form, Modal, Row, message } from "antd";
import JobForm from "./JobForm";
import { useForm } from "antd/es/form/Form";
import { useState } from "react";
import { createJob } from "../../services/companyService";
import { getCookie } from "../../helpers/cookies";
import { dateNow } from "../../helpers/dateNow";

function CreateJobManage(props) {
  const { onReload } = props;
  const companyId = +getCookie("companyId");
  const [form] = useForm();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();

  const success = () => {
    messageApi.open({
      type: "success",
      content: "Tạo mới thành công!",
    });
  };
  const error = () => {
    messageApi.open({
      type: "error",
      content: "Tạo mới không thành công!",
    });
  };
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleSubmit = async (values) => {
    const response = await createJob({
      ...values,
      idCompany: companyId,
      description: values.description || "",
      createAt: dateNow,
      status: values.status === false ? false : true,
    });
    if (response) {
      success();
      setIsModalOpen(false);
      onReload();
      form.resetFields();
    } else {
      error();
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    form.resetFields();
  };

  return (
    <>
      {contextHolder}
      <Button
        type="primary"
        ghost
        style={{ marginBottom: "30px" }}
        onClick={showModal}
      >
        + Thêm mới
      </Button>

      <Modal
        title="Tạo job mới"
        open={isModalOpen}
        onCancel={handleCancel}
        style={{ minWidth: "50%" }}
        footer={null}
      >
        <Form layout="vertical" form={form} onFinish={handleSubmit}>
          <Row gutter={[15]}>
            <JobForm />

            <Col xs={24}>
              <div style={{ display: "flex", flexDirection: "row-reverse" }}>
                <Button type="primary" htmlType="submit">
                  Tạo mới
                </Button>
              </div>
            </Col>
          </Row>
        </Form>
      </Modal>
    </>
  );
}

export default CreateJobManage;
