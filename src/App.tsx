import { Card } from "react-bootstrap";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";

import RoutedTabs from "./components/RoutedTabs";

import AboutPage from "./pages/AboutPage";
import AcknowledgePage from "./pages/AcknowledgePage";
import PhononsPage from "./pages/PhononsPage";

import "./App.scss";

const urlBase = "";

function App() {
  const pages: { key: string; title: string }[] = [
    { key: "phonons", title: "Phonons" },
    { key: "about", title: "About" },
    { key: "acknowledgments", title: "Acknowledgments" },
  ];
  const defaultTab = "phonons";
  return (
    <div className="m-3">
      <Router>
        <Card.Header>
          <RoutedTabs urlBase={urlBase} tabs={pages} defaultTab={defaultTab} />
        </Card.Header>
        <Card.Body id="main-card" className="p-4">
          <Routes>
            <Route path={urlBase}>
              <Route path="phonons/*" element={<PhononsPage />} />
              <Route path="about" element={<AboutPage />} />
              <Route path="acknowledgments" element={<AcknowledgePage />} />
              <Route path="" element={<Navigate replace to={defaultTab} />} />
            </Route>
          </Routes>
        </Card.Body>
      </Router>
    </div>
  );
}

export default App;
