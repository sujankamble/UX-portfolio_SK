import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { PasswordProvider } from './context/PasswordContext.jsx';
import Cursor from './components/Cursor/Cursor.jsx';
import Nav from './components/Nav/Nav.jsx';
import HomePage from './pages/HomePage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import Banking1Page from './pages/cases/Banking1Page.jsx';
import Banking2Page from './pages/cases/Banking2Page.jsx';
import AuditPage from './pages/cases/AuditPage.jsx';
import NoCodePage from './pages/cases/NoCodePage.jsx';
import MESPage from './pages/cases/MESPage.jsx';

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/"              element={<HomePage />} />
        <Route path="/about"         element={<AboutPage />} />
        <Route path="/case/banking1" element={<Banking1Page />} />
        <Route path="/case/banking2" element={<Banking2Page />} />
        <Route path="/case/audit"    element={<AuditPage />} />
        <Route path="/case/nocode"   element={<NoCodePage />} />
        <Route path="/case/mes"      element={<MESPage />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <PasswordProvider>
        <Cursor />
        <Nav />
        <AnimatedRoutes />
      </PasswordProvider>
    </BrowserRouter>
  );
}
