import { NavLink, Outlet, useNavigate } from 'react-router-dom';

const navItems = [
  { to: '/dashboard', label: 'Dashboard' },
  { to: '/rangers', label: 'Rangers' },
  { to: '/patrols', label: 'Patrols' },
  { to: '/patrol-routes', label: 'Patrol Routes' },
  { to: '/incidents', label: 'Incidents' },
  { to: '/animals', label: 'Animals' },
  { to: '/risk-zones', label: 'Risk Zones' },
  { to: '/alerts', label: 'Alerts' },
  { to: '/reports', label: 'Reports' },
  { to: '/settings', label: 'Settings' },
];

function DashboardLayout() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user') || 'null');

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <div className="min-h-screen flex bg-gray-50">
      <aside className="w-60 shrink-0 bg-green-900 text-white p-4 flex flex-col">
        <h1 className="text-lg font-semibold mb-1">Wildlife Conservation</h1>
        {user && (
          <p className="text-xs text-green-200 mb-6">
            {user.name} · {user.role}
          </p>
        )}
        <nav className="flex flex-col gap-1 flex-1">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `px-3 py-2 rounded text-sm ${
                  isActive ? 'bg-green-700 font-medium' : 'hover:bg-green-800'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <button
          onClick={handleLogout}
          className="mt-6 px-3 py-2 rounded text-sm text-left hover:bg-green-800"
        >
          Log Out
        </button>
      </aside>
      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
}

export default DashboardLayout;
