import React, { useState, useEffect, useRef } from "react";
import LoginScreen from "./Screens/LoginScreen";
import ForgetPasswordScreen from "./Screens/ForgetPasswordScreen";
import "antd/dist/reset.css";
import "./StyleSheets/App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useLocation,
  useNavigate,
  useSearchParams,
  Outlet,
  Link,
} from "react-router-dom";
import {
  MenuOutlined,
  AppstoreFilled,
  BellFilled,
  BarChartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import logo from "./Assets/logo.webp";
import { Layout, Menu, theme } from "antd";
import CampaingnAddScreen from "./Screens/CampaingnAddScreen";
import CampaignViewScreen from "./Screens/CampaignViewScreen";
import { Footer } from "antd/es/layout/layout";
import DashboardScreen from "./Screens/CampaignDashboardScreen";
import AdAddScreen from "./Screens/AdAddScreen";
import ChannelAddScreen from "./Screens/ChannelAddScreen";
import AdViewScreen from "./Screens/AdViewScreen";
import BrandListScreen from "./Screens/BrandListScreen";
import BrandAddScreen from "./Screens/BrandAddScreen";
import ChannelViewScreen from "./Screens/ChannelViewScreen";
import ChannelEditScreen from "./Screens/ChannelEditScreen";
import DeviceListScreen from "./Screens/DeviceListScreen";
import ChannelCreateScreen from "./Screens/ChannelCreateScreen";
import AplicantDetailsScreen from "./Screens/AplicantDetailsScreen";
import MainDashboardScreen from "./Screens/DashboardScreen";
import ChangePasswordScreen from "./Screens/ChangePasswordScreen";
import { fetchPostToken } from "./Utils/FetchApis";
import ApiNames from "./Constants/ApiNames";
import DashboardChangePassword from "./Components/DashboardChangePassword";
import DashboardChangePasswordScreen from "./Screens/DashboardChangePasswordScreen";

const { Header, Sider } = Layout;

const App: React.FC = () => {
  const [displayValue, setDisplayValue] = useState<string>("none");
  const spanRef = useRef<any>(null);
  const location = useLocation();
  const navigation = useNavigate();
  const [token, setToken] = useState("");
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  useEffect(() => {
    authJWT();
    if (window.innerWidth < 768) {
      setCollapsed(true);
    }
  }, []);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (spanRef.current && !spanRef.current.contains(event.target as Node)) {
        setDisplayValue("none");
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  const authJWT = async () => {
    try {
      let response = await fetchPostToken(ApiNames.generateToken);
      if (response) {
        setToken(response);
      } else {
        console.log("Authentication failed. Please try again.");
      }
    } catch (err) {
      console.log("Authentication failed: " + err);
    }
  };
  const handleLogoutClick = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("email");
    localStorage.removeItem("_grecaptcha");
    localStorage.removeItem("id");
    navigation("");
  };


  return (
    <div>
      {(typeof window != "undefined" && location.pathname.includes("/login")) ||
      location.pathname.includes("/forgotPassword") ||
      location.pathname.includes("/changePassword") ? (
        ""
      ) : (
        <Layout style={{ minHeight: "100vh" }}>
          <Sider
            className="siderContainer"
            trigger={null}
            collapsible
            collapsed={collapsed}
          >
            <div className="logoContainer">
              {collapsed ? (
                <div className="logo-mb" style={{ color: "white" }}>
                  PTB
                </div>
              ) : (
                <img src={logo} className="logo" />
              )}
            </div>
            <Menu
              theme="dark"
              mode="inline"
              defaultSelectedKeys={[window.location.pathname]}
              onClick={({ key }) => {
                let id = localStorage.getItem("id");
                let name = localStorage.getItem("username");
                let email = localStorage.getItem("email");
                if (id && name && email) {
                  navigation(key);
                } else {
                  navigation("/login");
                }
              }}
              items={[
                {
                  key: "/dashboard",
                  icon: <AppstoreFilled />,
                  label: "Dashboard",
                },
                {
                  key: "/campaigns",
                  icon: <BarChartOutlined />,
                  label: "Campaigns",
                  children: [
                    { label: "Dashboard", key: "/campaigns/dashboard" },
                    { label: "View", key: "/campaigns/list" },
                    { label: "Add", key: "/campaigns/add" },
                  ],
                },
                {
                  key: "/channels",
                  icon: <AppstoreFilled />,
                  label: "Channels",
                  children: [
                    { label: "View", key: "/channels/list" },
                    { label: "Add", key: "/channels/create" },
                  ],
                },
                {
                  key: "/ad",
                  icon: <AppstoreFilled />,
                  label: "Ads",
                  children: [
                    { label: "View", key: "/ad/list" },
                    { label: "Add", key: "/ad/add" },
                  ],
                },
                {
                  key: "/brand",
                  icon: <AppstoreFilled />,
                  label: "Brand",
                  children: [
                    { label: "View", key: "/brand/list" },
                    { label: "Add", key: "/brand/add" },
                  ],
                },
                {
                  key: "/device",
                  icon: <AppstoreFilled />,
                  label: "Device",
                  children: [{ label: "View", key: "/device/list" }],
                },
              ]}
            />
          </Sider>
          <Layout className="site-layout">
            {/* <Header style={{ padding: 0, background: colorBgContainer }}>
              <div className="headerContainer">
                {React.createElement(MenuOutlined, {
                  className: "trigger",
                  onClick: () => setCollapsed(!collapsed),
                })}
                <div>
                  {React.createElement(BellFilled, {
                    className: "notification",
                    // onClick: () => setCollapsed(!collapsed),
                  })}
                  {React.createElement(UserOutlined, {
                    className: "notification",
                    // onClick: () => setCollapsed(!collapsed),
                  })}
                </div>
              </div>
            </Header> */}
            <Header style={{ padding: 0, background: colorBgContainer }}>
              <div className="headerContainer">
                {React.createElement(MenuOutlined, {
                  className: "trigger",
                  onClick: () => setCollapsed(!collapsed),
                })}

                <div className="header-icone">
                  {React.createElement(BellFilled, {
                    className: "notification",

                    // onClick: () => setCollapsed(!collapsed),
                  })}

                  <div ref={spanRef}>
                    {React.createElement(UserOutlined, {
                      className: "notification header-user",
                      onClick: () => setDisplayValue("block"),

                      // onClick: () => setCollapsed(!collapsed),
                    })}
                  </div>

                  <div
                    className="dropdown-content"
                    style={{ display: displayValue }}
                  >
                    <Link to="/dashboardChangepassword">Change Password</Link>
                    <Link to="/login">Logout</Link>
                  </div>
                </div>
              </div>
            </Header>
            <div style={{ marginTop: "20px", minHeight: "81vh" }}>
              <Routes>
                <Route path="/dashboard" element={<MainDashboardScreen />} />
                <Route path="/campaigns" element={<Outlet />}>
                  <Route
                    path="/campaigns/add"
                    element={<CampaingnAddScreen />}
                  />
                  <Route
                    path="/campaigns/list"
                    element={<CampaignViewScreen />}
                  />
                  <Route
                    path="/campaigns/dashboard"
                    element={<DashboardScreen />}
                  />
                </Route>
                <Route path="/channels" element={<Outlet />}>
                  <Route
                    path="/channels/list"
                    element={<ChannelViewScreen token={token}/>}
                  />
                  <Route
                    path="/channels/create"
                    element={<ChannelCreateScreen token={token} />}
                  />
                  <Route path="/channels/add" element={<ChannelAddScreen token={token} />} />
                  <Route
                    path="/channels/edit"
                    element={<ChannelEditScreen />}
                  />
                  <Route
                    path="/channels/detail"
                    element={<AplicantDetailsScreen token={token} />}
                  />
                </Route>
                <Route path="/ad" element={<Outlet />}>
                  <Route path="/ad/list" element={<AdViewScreen />} />
                  <Route path="/ad/add" element={<AdAddScreen />} />
                </Route>
                <Route path="/brand" element={<Outlet />}>
                  <Route path="/brand/list" element={<BrandListScreen />} />
                  <Route path="/brand/add" element={<BrandAddScreen token={token} />} />
                </Route>
                <Route path="/device" element={<Outlet />}>
                  <Route path="/device/list" element={<DeviceListScreen />} />
                </Route>
                <Route
                  path="/dashboardChangepassword"
                  element={
                    <DashboardChangePasswordScreen
                      token={token}
                      handleLogoutClick={handleLogoutClick}
                    />}
                  />

              </Routes>
            </div>
            <Footer style={{ backgroundColor: "white" }}>
              Copyright © 2023 Pro Tax Pvt. Ltd. All Rights Reserved.
            </Footer>
          </Layout>
        </Layout>
      )}
      <Routes>
        <Route path="/login" element={<LoginScreen token={token} />} />
        <Route
          path="/forgotPassword"
          element={<ForgetPasswordScreen token={token} />}
        />
        <Route
          path="/changePassword"
          element={<ChangePasswordScreen token={token} />}
        />
        <Route path="/" element={<Navigate replace to={"/login"} />} />
      </Routes>
    </div>
  );
};

// const Content = () => {
//   function movetopages(key: string): void {
//     throw new Error("Function not implemented.");
//   }

//   return (
//     <div style={{ marginTop: "20px", minHeight: "81vh" }}>
//       <Routes>
//         <Route path="/dashboard" element={<div>dashboard</div>} />
//         {/* <Route path="/campaigns" element={<></>} >
//           <Route path="campaigns/add" element={<CampaingnAddScreen/>} />
//           <Route path="campaigns/list" element={<CampaignViewScreen/>} />
//         </Route> */}
//         <Route path="/campaigns/add" element={<CampaingnAddScreen />} />
//         <Route path="/campaigns/list" element={<CampaignViewScreen />} />
//         <Route
//           path="/campaigns/dashboard"
//           element={<DashboardScreen movetopages={movetopages} />}
//         />

//         <Route path="/channels/list" element={<div>list channels</div>} />
//         <Route path="/channels/add" element={<div>Add channels</div>} />
//         <Route path="/categories/list" element={<div>list categories</div>} />
//         <Route path="/categories/add" element={<div>Add categories</div>} />
//       </Routes>
//     </div>
//   );
// };

export default App;
