import { Button, Card, Col, Form, Input, Row, message } from "antd";
import "./CompanyManage.scss";
import { useEffect, useState } from "react";
import { useForm } from "antd/es/form/Form";
import { editInfoCompany } from "../../services/companyService";
import { getCookie } from "../../helpers/cookies";
import { getListCompany } from "../../services/searchService";

function CompanyManage() {
  const companyId = +getCookie("companyId");
  const [disabled, setDisabled] = useState(true);
  const [form] = useForm();
  const [messageApi, contextHolder] = message.useMessage();
  const [company, setCompany] = useState();

  useEffect(() => {
    const fetchApi = async () => {
      const responseCompany = await getListCompany();
      setCompany(responseCompany[companyId - 1]);
    };
    fetchApi();
  }, [companyId]);

  const success = () => {
    messageApi.open({
      type: "success",
      content: "Cập nhật thành công!",
    });
  };

  const error = () => {
    messageApi.open({
      type: "error",
      content: "Cập nhật không thành công!",
    });
  };

  const rules = [
    {
      required: true,
      message: "Bắt buộc!",
    },
  ];

  const handleClick = () => {
    setDisabled(!disabled);
  };

  const handleCancle = () => {
    form.resetFields();
    setDisabled(true);
  };

  const handleFinish = async (values) => {
    const response = await editInfoCompany(company.id, values);
    if (response) {
      success();
      setDisabled(true);
    } else {
      error();
    }
  };

  return (
    <>
      {contextHolder}
      <Card>
        <div className="company-manage">
          <h2 className="company-manage__title">Thông tin công ty</h2>
          {disabled ? (
            <Button onClick={handleClick}>Chỉnh sửa</Button>
          ) : (
            <Button onClick={handleCancle}>Hủy</Button>
          )}
        </div>

        {company && <Form
          name="info-company"
          form={form}
          layout="vertical"
          onFinish={handleFinish}
          disabled={disabled}
          initialValues={company}
        >
          <Row gutter={[12]}>
            <Col xs={24}>
              <Form.Item name="companyName" label="Tên công ty" rules={rules}>
                <Input />
              </Form.Item>
            </Col>

            <Col xs={8}>
              <Form.Item name="email" label="Email" rules={rules}>
                <Input />
              </Form.Item>
            </Col>

            <Col xs={8}>
              <Form.Item name="phone" label="Số điện thoại" rules={rules}>
                <Input type="number" />
              </Form.Item>
            </Col>

            <Col xs={8}>
              <Form.Item name="address" label="Địa chỉ">
                <Input />
              </Form.Item>
            </Col>

            <Col xs={8}>
              <Form.Item name="quantityPeople" label="Số lượng nhân sự">
                <Input type="number" />
              </Form.Item>
            </Col>

            <Col xs={8}>
              <Form.Item name="workingTime" label="Thời gian làm việc">
                <Input />
              </Form.Item>
            </Col>

            <Col xs={8}>
              <Form.Item name="website" label="Link website">
                <Input />
              </Form.Item>
            </Col>

            <Col xs={24}>
              <Form.Item name="description" label="Mô tả ngắn">
                <Input.TextArea style={{ minHeight: "100px" }} />
              </Form.Item>
            </Col>

            <Col xs={24}>
              <Form.Item name="detail" label="Mô tả chi tiết">
                <Input.TextArea style={{ minHeight: "150px" }} />
              </Form.Item>
            </Col>

            {!disabled && (
              <>
                <Col xs={2}>
                  <Button type="primary" htmlType="submit">
                    Cập nhật
                  </Button>
                </Col>
                <Col xs={2}>
                  <Button onClick={handleCancle}>Hủy</Button>
                </Col>
              </>
            )}
          </Row>
        </Form>}
      </Card>
    </>
  );
}

export default CompanyManage;
