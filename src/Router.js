import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LoginHyuk from './pages/donghyuk/Login/Login';
import MainHyuk from './pages/donghyuk/Main/Main';
import LoginHeejun from './pages/heejun/Login/Login';
import MainHeejun from './pages/heejun/Main/Main';
import LoginWon from './pages/hyungwon/Login/Login';
import MainWon from './pages/hyungwon/Main/Main';
import LoginBeom from './pages/jeunbeom/Login/Login';
import MainBeom from './pages/jeunbeom/Main/Main';
import LoginSeung from './pages/sseung/Login/Login';
import MainSeung from './pages/sseung/Main/Main';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login-donghyuk" element={<LoginHyuk />} />
        <Route path="/main-donghyuk" element={<MainHyuk />} />
        <Route path="/login-heejun" element={<LoginHeejun />} />
        <Route path="/main-heejun" element={<MainHeejun />} />
        <Route path="/login-hyungwon" element={<LoginWon />} />
        <Route path="/main-hyungwon" element={<MainWon />} />
        <Route path="/login-jeunbeom" element={<LoginBeom />} />
        <Route path="/main-jeunbeom" element={<MainBeom />} />
        <Route path="/login-sseung" element={<LoginSeung />} />
        <Route path="/main-sseung" element={<MainSeung />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
