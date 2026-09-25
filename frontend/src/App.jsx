import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import DashboardLayout from './layouts/DashboardLayout';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Rangers from './pages/Rangers';
import Patrols from './pages/Patrols';
import PatrolRoutes from './pages/PatrolRoutes';
import Incidents from './pages/Incidents';
import Animals from './pages/Animals';
import RiskZones from './pages/RiskZones';
import Alerts from './pages/Alerts';
import Reports from './pages/Reports';
import Settings from './pages/Settings';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route element={<DashboardLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/rangers" element={<Rangers />} />
            <Route path="/patrols" element={<Patrols />} />
            <Route path="/patrol-routes" element={<PatrolRoutes />} />
            <Route path="/incidents" element={<Incidents />} />
            <Route path="/animals" element={<Animals />} />
            <Route path="/risk-zones" element={<RiskZones />} />
            <Route path="/alerts" element={<Alerts />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/settings" element={<Settings />} />
          </Route>
        </Route>
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
