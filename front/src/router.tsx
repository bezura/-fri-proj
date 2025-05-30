import { Route, Routes, Navigate } from 'react-router';
import Register from './pages/Register';
import Verify from './pages/Verify';
import Docs from './pages/Docs';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import Login from './pages/Login';
import Header from './components/Header';
import Description from './components/Description';
import Timeline from './components/Timeline';
import SwotTable from './components/SwotTable';
import FourPTable from './components/FourPTable';
import Diagrams from './components/Diagrams';
import AnalyticsPage from './pages/AnalyticsPage';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/verify" element={<Verify />} />
      <Route path="/docs" element={<Docs />}>
        <Route index element={<Navigate to="intro" replace />} />
        <Route path="intro" element={<Header />} />
        <Route path="description" element={<Description />} />
        <Route path="timeline" element={<Timeline />} />
        <Route path="swot" element={<SwotTable />} />
        <Route path="fourp" element={<FourPTable />} />
        <Route path="diagrams" element={<Diagrams />} />
        <Route path="analytics" element={<AnalyticsPage />} />
      </Route>
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="*" element={<h1>404 Not Found</h1>} />
    </Routes>
  );
}
