import Header from "./components/layout/Header";
import Sidebar from "./components/layout/Sidebar";
import Footer from "./components/layout/Footer";
import styled from "styled-components";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./page/HomePage";
import SettingsPage from "./page/SettingPage";
import LottoPage from "./page/LottoPage";
import SaveLottoPage from "./page/SaveLottoPage";

const App = () => {
  return (
    <AppContainer>
      <Header />
      <MainContent>
        <Sidebar />
        <ContentWrapper>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/lotto" element={<LottoPage />} />
            <Route path="/save_lotto" element={<SaveLottoPage />} />
            <Route path="/setting" element={<SettingsPage />} />
          </Routes>
        </ContentWrapper>
      </MainContent>
      <Footer />
    </AppContainer>
  );
};

export default App;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100vw;
  background: #262626;
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const ContentWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  padding: 20px;
`;
