import { Outlet} from "react-router-dom";

function AdminLayout() {
  return (
    <div>
      <header>
          {/*<Link to="/admin/dashboard">Dashboard</Link>*/}
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default AdminLayout;
