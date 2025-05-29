
import { Route, Routes, Navigate } from 'react-router';
import Register from './pages/Register';
import Verify from './pages/Verify';
import Docs from './pages/Docs'

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/register" replace />} />
      <Route path="/register" element={<Register />} />
      <Route path="/verify" element={<Verify />} />
      <Route path="/docs" element={<Docs />} />
      <Route path="*" element={<h1>404 Not Found</h1>} />
    </Routes>
  );
}
