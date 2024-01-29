import { Button, Card, Checkbox, Col, Form, Input, message } from "antd";
import { checkLogin } from "../../services/loginService";
import { setCookie } from "../../helpers/cookies";
import { generateToken } from "../../helpers/generateToken";
import { useDispatch } from "react-redux";
import { isLogin } from "../../actions";
import { useNavigate } from "react-router-dom";

function Login() {
  const [messageApi, contextHolder] = message.useMessage();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const success = () => {
    messageApi.open({
      type: "success",
      content: "Đăng nhập thành công!",
    });
  };
  const error = () => {
    messageApi.open({
      type: "error",
      content: "Tài khoản hoặc mật khẩu không chính xác!",
    });
  };

  const onFinish = async (values) => {
    const response = await checkLogin(values.email, values.password);

    if (response.length) {
      success();
      dispatch(isLogin(true));
      navigate(`/`);
      setCookie("companyId", response[0].id, 2);
      if (values.remember) {
        setCookie("email", values.email, 2);
        setCookie("token", generateToken(), 2);
      }
    } else {
      error();
    }
  };

  return (
    <>
      {contextHolder}
      <Col xs={12} style={{ margin: "auto" }}>
        <Card title="Đăng nhập">
          <Form
            name="login"
            initialValues={{
              remember: true,
            }}
            layout="vertical"
            onFinish={onFinish}
          >
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

            <Form.Item name="remember" valuePropName="checked">
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Đăng nhập
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Col>
    </>
  );
}

export default Login;
