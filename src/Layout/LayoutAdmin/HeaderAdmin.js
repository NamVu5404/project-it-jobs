import { useDispatch } from "react-redux";
import { isLogin } from "../../actions";
import { deleteCookie } from "../../helpers/cookies";
import { Link } from "react-router-dom";
import { Button } from "antd";
import {
  HomeOutlined,
  LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import "./HeaderAdmin.scss";

function HeaderAdmin(props) {
  const { collapsed, setCollapsed } = props;
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(isLogin(false));
    deleteCookie("email");
    deleteCookie("token");
    deleteCookie("companyId");
  };

  return (
    <>
      <header className="header header-admin">
        <div className="header-admin__nav">
          {collapsed ? (
            <Link
              to="/dashboard"
              className="header__logo header-admin__logo header-admin__logo--sub"
            >
              IT
            </Link>
          ) : (
            <Link to="/dashboard" className="header__logo header-admin__logo">
              IT Admin
            </Link>
          )}

          {collapsed ? (
            <MenuUnfoldOutlined
              className="header-admin__icon"
              onClick={() => setCollapsed(!collapsed)}
            />
          ) : (
            <MenuFoldOutlined
              className="header-admin__icon"
              onClick={() => setCollapsed(!collapsed)}
            />
          )}
        </div>

        <div className="header__button header-admin__button">
          <Link to="/">
            <Button icon={<HomeOutlined />}>Trang chủ</Button>
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
        </div>
      </header>
    </>
  );
}

export default HeaderAdmin;
