// Wallet.tsx
import { Image, List } from "antd-mobile";
import "./style.css"; // 确保引入样式

interface TokenItem {
  name: string;
  amount: string;
  usdValue: string;
  colorful_image_url: string;
}

const Wallet = () => {
  const tokens: TokenItem[] = [
    {
      name: "Basic Attention Token",
      amount: "67.87517775 BAT",
      usdValue: "$18.20",
      colorful_image_url:
        "https://s3-ap-southeast-1.amazonaws.com/monaco-cointrack-production/uploads/coin/colorful_logo/5c1246f55568a400e48ac233/bitcoin.png",
    },
    {
      name: "Ethereum",
      amount: "0.06001 ETH",
      usdValue: "$14.24",
      colorful_image_url:
        "https://s3-ap-southeast-1.amazonaws.com/monaco-cointrack-production/uploads/coin/colorful_logo/5c1246f55568a400e48ac233/bitcoin.png",
    },
    {
      name: "Bitcoin",
      amount: "0 BTC",
      usdValue: "$0",
      colorful_image_url:
        "https://s3-ap-southeast-1.amazonaws.com/monaco-cointrack-production/uploads/coin/colorful_logo/5c1246f55568a400e48ac233/bitcoin.png",
    },
    {
      name: "MCO",
      amount: "0 MCO",
      usdValue: "$0",
      colorful_image_url:
        "https://s3-ap-southeast-1.amazonaws.com/monaco-cointrack-production/uploads/coin/colorful_logo/5c1246f55568a400e48ac233/bitcoin.png",
    },
    {
      name: "Basic Attention Token",
      amount: "67.87517775 BAT",
      usdValue: "$18.20",
      colorful_image_url:
        "https://s3-ap-southeast-1.amazonaws.com/monaco-cointrack-production/uploads/coin/colorful_logo/5c1246f55568a400e48ac233/bitcoin.png",
    },
  ];

  return (
    <div className="card-container">
      <List className="custom-list">
        {tokens.map((item, index) => (
          <List.Item
            key={index}
            className="card-item"
            prefix={
              <Image
                src={item.colorful_image_url}
                style={{ borderRadius: 20 }}
                fit="cover"
                width={40}
                height={40}
              />
            }
            extra={
              <div className="custom-extra">
                <div className="amount">{item.amount}</div>
                <div className="usd-value">{item.usdValue}</div>
              </div>
            }
          >
            <div className="middle-wrapper">
              <div className="name-wrapper">
                <div className="token-name">{item.name}</div>
              </div>
            </div>
          </List.Item>
        ))}
      </List>
    </div>
  );
};

export default Wallet;
