import { Button, Card, Col, Form, Input, Row, Select, message } from "antd";
import TextArea from "antd/es/input/TextArea";
import { postFormApply } from "../../services/formApplyService";
import { dateNow } from "../../helpers/dateNow";

function FormApply(props) {
  const { job, company } = props;
  const [messageApi, contextHolder] = message.useMessage();

  const success = () => {
    messageApi.open({
      type: "success",
      content: "Ứng tuyển thành công",
    })
  }

  const error = () => {
    messageApi.open({
      type: "error",
      content: "Ứng tuyển không thành công",
    })
  }

  const rules = [
    {
      required: true,
      message: "Bắt buộc!",
    },
  ];

  let optionsCity = [];
  for (let i = 0; i < job.city.length; i++) {
    optionsCity.push({
      key: job.city[i],
      value: job.city[i],
    });
  }

  const handleFinish = async (values) => {
    const linkProject = values.linkProject?.split("\n").filter(line => line.trim() !== '') || [];

    const newData = {
      idCompany: company.id,
      idJob: job.id,
      statusRead: false,
      createAt: dateNow,
      ...values,
      description: values.description || "",
      linkProject: linkProject
    }
    
    const response = await postFormApply(newData);
    if (response) {
      success();
    } else {
      error();
    }
  };

  return (
    <>
      {contextHolder}
      <Card title="Ứng tuyển ngay">
        <Form
          id="form"
          layout="vertical"
          name="inputApply"
          onFinish={handleFinish}
        >
          <Row gutter={[10, 10]}>
            <Col xs={6}>
              <Form.Item name="name" label="Họ tên" rules={rules}>
                <Input />
              </Form.Item>
            </Col>

            <Col xs={6}>
              <Form.Item name="phone" label="Số điện thoại" rules={rules}>
                <Input type="number" />
              </Form.Item>
            </Col>

            <Col xs={6}>
              <Form.Item name="email" label="Email" rules={rules}>
                <Input type="email" />
              </Form.Item>
            </Col>

            <Col xs={6}>
              <Form.Item name="city" label="Thành phố" rules={rules}>
                <Select options={optionsCity} />
              </Form.Item>
            </Col>

            <Col xs={24}>
              <Form.Item name="description" label="Giới thiệu bản thân">
                <TextArea style={{ height: "150px" }} />
              </Form.Item>
            </Col>

            <Col xs={24}>
              <Form.Item
                name="linkProject"
                label="Danh sách link project đã làm"
              >
                <TextArea style={{ height: "150px" }} />
              </Form.Item>
            </Col>

            <Col xs={24}>
              <Button type="primary" htmlType="submit">
                Gửi yêu cầu
              </Button>
            </Col>
          </Row>
        </Form>
      </Card>
    </>
  );
}

export default FormApply;
