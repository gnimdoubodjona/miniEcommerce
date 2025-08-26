import { Outlet} from "react-router-dom";

function ClientLayout() {
  return (
    <div>
      <header>
          {/*<Link to="/">Acceuil</Link>*/}
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default ClientLayout;
