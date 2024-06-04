import { useEffect, useState } from "react";
import { Tab, Tabs } from "react-bootstrap";

import AboutPage from "./pages/about/AboutPage";
import AcknowledgePage from "./pages/acknowledge/AcknowledgePage";
import PhononsPage from "./pages/phonons/PhononsPage";

import "./App.scss";

function App() {
  const [currentTab, setCurrentTab] = useState("phonons");
  const [focusSection, setFocusSection] = useState<string | null>(null);

  const showAboutSection = (section: string) => {
    setCurrentTab("about");
    setFocusSection(section);
  };

  useEffect(() => {
    currentTab != "about" && setFocusSection(null);
  }, [currentTab]);

  return (
    <Tabs
      activeKey={currentTab}
      onSelect={(key) => {
        setCurrentTab(key || "phonons");
        setFocusSection(null);
      }}
    >
      <Tab eventKey="phonons" title="Phonons">
        <PhononsPage aboutLinkHandler={showAboutSection} />
      </Tab>
      <Tab eventKey="about" title="About">
        <AboutPage focusSection={focusSection} />
      </Tab>
      <Tab eventKey="acknowledge" title="Acknowledgements">
        <AcknowledgePage />
      </Tab>
    </Tabs>
  );
}

export default App;
