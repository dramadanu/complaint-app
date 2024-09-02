import { Routes, Route } from 'react-router-dom';

import Navbar from './components/NavbarComponent';
import Footer from './components/FooterComponent';

import HomePage from './pages/HomePage';
import LayananPage from './pages/LayananPage';
import LaporanPage from './pages/LaporanPage';
import BantuanPage from './pages/BantuanPage';
import SignInPage from './pages/SignInPage';
import CreateAccountPage from './pages/CreateAccountPage';
  
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/layanan" element={<LayananPage />} />
        <Route path="/contact" element={<LaporanPage />} />
        <Route path="/bantuan" element={<BantuanPage />} />
        <Route path="/signIn" element={<SignInPage />} />
        <Route path="/create" element={<CreateAccountPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
