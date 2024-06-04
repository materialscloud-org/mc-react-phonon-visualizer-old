import { Tab, Tabs } from "react-bootstrap";


import AboutPage from "./pages/about/AboutPage";
import AcknowledgePage from "./pages/AcknowledgePage";
import PhononsPage from "./pages/PhononsPage";

import "./App.scss";

function App() {
  const defaultTab = "phonons";
  return (
    <Tabs defaultActiveKey={defaultTab}>
      <Tab eventKey="phonons" title="Phonons">
        <PhononsPage />
      </Tab>
      <Tab eventKey="about" title="About">
        <AboutPage />
      </Tab>
      <Tab eventKey="acknowledge" title="Acknowledgements">
        <AcknowledgePage />
      </Tab>
    </Tabs>
  );
}

export default App;
