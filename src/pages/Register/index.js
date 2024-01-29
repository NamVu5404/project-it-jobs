import { Button, Card, Col, Form, Input, message } from "antd";
import { checkExits, createAccount } from "../../services/loginService";
import { useNavigate } from "react-router-dom";

function Login() {
  const [messageApi, contextHolder] = message.useMessage();
  const navigate = useNavigate();

  const success = () => {
    messageApi.open({
      type: "success",
      content: "Đăng ký thành công!",
    });
  };
  const error = (content) => {
    messageApi.open({
      type: "error",
      content: content,
    });
  };

  const onFinish = async (values) => {
    const checkemail = await checkExits("email", values.email);
    const checkphone = await checkExits("phone", values.phone);

    if (checkemail.length) {
      error("Email đã tồn tại!");
    } else if (checkphone.length) {
      error("SĐT đã tồn tại!");
    } else {
      const response = await createAccount(values);
      if (response) {
        success();
        setTimeout(() => {
          navigate(`/login`);
        }, 2000);
      }
    }
  };

  return (
    <>
      {contextHolder}
      <Col xs={12} style={{ margin: "auto" }}>
        <Card title="Đăng ký">
          <Form
            name="login"
            initialValues={{
              remember: true,
            }}
            layout="vertical"
            onFinish={onFinish}
          >
            <Form.Item
              label="Tên công ty"
              name="companyName"
              rules={[
                {
                  required: true,
                  message: "Please input your company's name!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your email!",
                },
              ]}
            >
              <Input type="email" />
            </Form.Item>

            <Form.Item
              label="Số điện thoại"
              name="phone"
              rules={[
                {
                  required: true,
                  message: "Please input your number phone!",
                },
              ]}
            >
              <Input type="number" />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Đăng ký
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Col>
    </>
  );
}

export default Login;
