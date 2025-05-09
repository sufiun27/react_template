// Router.jsx
import { BrowserRouter, useLocation } from 'react-router-dom';
import AdminRoutes from './adminx/AdminRoutes';
import UserRoutes from './userx/UserRoutes';
// import more route groups as needed
// import EmployeeRoutes from './EmployeeRoutes';

function InnerRouter() {
  const location = useLocation();
  const pathname = location.pathname;

  switch (true) {
    case pathname.startsWith('/adminx'):
      return <AdminRoutes />;
    case pathname.startsWith('/userx'):
      return <UserRoutes />;
    // case pathname.startsWith('/employee'):
    //   return <EmployeeRoutes />;
    default:
      return <div>404 - Route not found</div>;
  }
}

export default function Router() {
  return (
    <BrowserRouter>
      <InnerRouter />
    </BrowserRouter>
  );
}
