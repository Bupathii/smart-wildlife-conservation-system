import { NavLink, Outlet } from 'react-router-dom';

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
  return (
    <div className="min-h-screen flex bg-gray-50">
      <aside className="w-60 shrink-0 bg-green-900 text-white p-4">
        <h1 className="text-lg font-semibold mb-6">Wildlife Conservation</h1>
        <nav className="flex flex-col gap-1">
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
      </aside>
      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
}

export default DashboardLayout;
