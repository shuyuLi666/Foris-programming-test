// Wallet.tsx
import { Image, List } from "antd-mobile";
import "./style.css";
import { useWalletStore } from "@/store/wallet";
import { useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";

//support the following currencies: BTC, ETH, and CRO.
const SUPPORTED_CURRENCIES = new Set(["BTC", "ETH", "CRO"]);
interface WalletProps {
  setLastestBalance: (balance: string) => "";
}
const Wallet: React.FC<WalletProps> = ({ setLastestBalance }) => {
  const { balance, liveRate, currencies, fetchData } = useWalletStore();

  // init
  useEffect(() => {
    const loadData = async () => {
      try {
        await fetchData();
      } catch (error) {
        console.error("Fetch data error:", error);
      }
    };
    loadData()
    // setInterval
    const interval = setInterval(() => {
      loadData();
    }, 60_000);

    return () => {
      clearInterval(interval);
    };
  }, [fetchData]);

  // new map
  const dataList = useMemo(() => {
    return balance
      .filter((item) => SUPPORTED_CURRENCIES.has(item.currency))
      .map((walletItem) => {
        const currency = currencies.find((c) => c.code === walletItem.currency);
        const rateTier = liveRate.find(
          (t) =>
            t.from_currency === walletItem.currency && t.to_currency === "USD"
        );
        const rate = rateTier?.rates?.[0]?.rate
          ? parseFloat(rateTier.rates[0].rate)
          : 0;
        const usdValue = walletItem.amount * rate;

        const decimals = currency?.display_decimal ?? 8;
        return {
          currency: walletItem.currency,
          name: currency?.name || walletItem.currency,
          formattedAmount: `${walletItem.amount.toFixed(decimals)} ${
            currency?.symbol || walletItem.currency
          }`,
          usdValue,
          image: currency?.colorful_image_url || "",
        };
      });
  }, [balance, currencies, liveRate]);

  useMemo(() => {
    const totalBalance = dataList
      .reduce((sum, item) => sum + item.usdValue, 0)
      .toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
    setLastestBalance(totalBalance);
    return totalBalance;
  }, [dataList, setLastestBalance]);
  const navigate = useNavigate();
  const handleClick = (currency: string) => {
    navigate(`/details?currency=${currency}`);
  };
  return (
    <div className="card-container">
      <List className="custom-list">
        {dataList.map((item, index) => (
          <List.Item
            key={index}
            className="card-item"
            prefix={
              <Image
                src={item.image}
                style={{ borderRadius: 20 }}
                fit="cover"
                width={40}
                height={40}
                alt={item.name}
              />
            }
            extra={
              <div className="custom-extra">
                <div className="amount">{item.formattedAmount}</div>
                <div className="usd-value">
                  $
                  {item.usdValue.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </div>
              </div>
            }
            onClick={() => handleClick(item.currency)}
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
