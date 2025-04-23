import { TabBar } from "antd-mobile";
import { useState, useEffect } from "react";

interface TabItem {
  key: string;
  title: string;
  icon: React.ReactNode;
}

interface TabProps {
  tabs: TabItem[];
  activeTab?: string;
  changeTab?: (key: string) => void;
}

const Tab: React.FC<TabProps> = ({ tabs, activeTab, changeTab }) => {
  const [currentTab, setCurrentTab] = useState<string>(
    activeTab || tabs[0]?.key
  );
  useEffect(() => {
    if (activeTab !== undefined) {
      setCurrentTab(activeTab);
    }
  }, [activeTab]);

  const handleChange = (key: string) => {
    return changeTab ? changeTab(key) : setCurrentTab(key);
  };

  return (
    <>
      <TabBar
        className="bottom-tabbar"
        activeKey={currentTab}
        onChange={handleChange}
      >
        {tabs.map((item) => (
          <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
        ))}
      </TabBar>
    </>
  );
};

export default Tab;
