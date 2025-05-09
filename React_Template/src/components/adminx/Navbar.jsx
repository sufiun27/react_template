import { NavLink, Outlet } from 'react-router-dom';

export default function AdminLayout() {
  const navItems = [
    { name: 'Home', path: '/adminx', exact: true },
    { name: 'About', path: '/adminx/about' },
    { name: 'Admin', path: '/adminx/admin' },
    { name: 'Login', path: '/adminx/login' },
  ];

  const navLinkStyle = ({ isActive }) => ({
    marginRight: '1rem',
    textDecoration: isActive ? 'underline' : 'none',
    color: isActive ? 'blue' : 'black',
    fontWeight: isActive ? 'bold' : 'normal',
  });

  return (
    <div>
      <nav style={{ marginBottom: '1rem' }}>
        {navItems.map(({ name, path, exact }) => (
          <NavLink
            key={path}
            to={path}
            style={navLinkStyle}
            end={exact} // ensures "Home" link is only active on exact /adminx
          >
            {name}
          </NavLink>
        ))}
      </nav>

      {/* <main>
        <Outlet />
      </main> */}
    </div>
  );
}
