import { Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  LogoutOutlined,
  LoginOutlined,
  KeyOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { deleteCookie } from "../../helpers/cookies";
import { isLogin } from "../../actions";

function Header() {
  const loginStatus = useSelector((state) => state.loginReducer);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(isLogin(false));
    deleteCookie("email");
    deleteCookie("token");
    deleteCookie("companyId");
  };

  return (
    <>
      <header className="header">
        <Link to="/" className="header__logo">
          IT Jobs
        </Link>

        <div className="header__button">
          {loginStatus ? (
            <>
              <Link to="/dashboard">
                <Button icon={<UserOutlined />}>
                  Quản lý
                </Button>
              </Link>

              <Link to="/login">
                <Button
                  type="primary"
                  icon={<LogoutOutlined />}
                  style={{ marginLeft: "10px" }}
                  onClick={handleLogout}
                >
                  Đăng xuất
                </Button>
              </Link>
            </>
          ) : (
            <>
              <Link to="/login">
                <Button icon={<LoginOutlined />}>Đăng nhập</Button>
              </Link>
              <Link to="/register">
                <Button
                  type="primary"
                  icon={<KeyOutlined />}
                  style={{ marginLeft: "10px" }}
                >
                  Đăng ký
                </Button>
              </Link>
            </>
          )}
        </div>
      </header>
    </>
  );
}

export default Header;
