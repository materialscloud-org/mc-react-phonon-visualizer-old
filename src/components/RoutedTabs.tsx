import { useEffect, useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";

interface RoutedTabsProps {
  urlBase: string;
  tabs: { key: string; title: string }[];
  defaultTab: string;
  className?: string;
}

const RoutedTabs = ({ urlBase, tabs, defaultTab, className }: RoutedTabsProps) => {
  const [active, setActive] = useState("efficiency");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const route = location.pathname.split(`${urlBase}/`)[1];
    const firstFragment = route.split("/")[1];
    setActive(firstFragment || route);
  }, [location, urlBase]);

  return (
    <Tabs
      className={className}
      defaultActiveKey={defaultTab}
      activeKey={active}
      onSelect={(key) => navigate(`${urlBase}/${key}`)}
    >
      {tabs.map((tab) => (
        <Tab key={tab.key} eventKey={tab.key} title={tab.title} />
      ))}
    </Tabs>
  );
};

export default RoutedTabs;
