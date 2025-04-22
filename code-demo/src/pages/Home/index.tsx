import { Button, List, NavBar, TabBar, Space, Image } from "antd-mobile";
import {
  SetOutline,
  ScanningOutline,
  AppOutline,
  BankcardOutline,
  SendOutline,
  ReceivePaymentOutline,
} from "antd-mobile-icons";
import "./style.css";
import Wallet from "@/pages/Wallet";
import logo from "@/assets/logo.png";

const Home = () => {
  const right = (
    <div style={{ fontSize: 24 }}>
      <Space style={{ "--gap": "16px" }}>
        <ScanningOutline />
      </Space>
    </div>
  );

  const left = (
    <div style={{ fontSize: 24 }}>
      <Space style={{ "--gap": "16px" }}>
        <SetOutline />
      </Space>
    </div>
  );

  const tabs = [
    { key: "wallet", title: "Wallet", icon: <BankcardOutline /> },
    { key: "defi", title: "DeFi", icon: <AppOutline /> },
  ];

  return (
    <div className="wallet-container">
      <NavBar back={null} className="nav-bar" right={right} left={left} />
      <div className="content-wrapper">
        <div className="balance-section">
          <div className="logo">
            <Image
              src={logo}
              width={32}
              height={32}
              style={{ marginRight: 8 }}
              fit="contain"
            />
            <div>crypto.com | DEFI WALLET</div>
          </div>
          <div className="balance-amount">
            $<span className="balance">36.68</span>USD
          </div>
        </div>
        <div className="action-buttons">
          <div className="button-left">
            <Button block shape="rounded" color="primary" className="set-btn">
              <Space>
                <SendOutline />
              </Space>
            </Button>

            <div className="set-btn-text">Send</div>
          </div>
          <div className="button-right">
            <Button block shape="rounded" color="primary" className="set-btn">
              <Space>
                <ReceivePaymentOutline />
              </Space>
            </Button>

            <div className="set-btn-text">Receive</div>
          </div>
        </div>

        <Wallet />
      </div>

      <TabBar className="bottom-tabbar">
        {tabs.map((item) => (
          <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
        ))}
      </TabBar>
    </div>
  );
};

export default Home;
