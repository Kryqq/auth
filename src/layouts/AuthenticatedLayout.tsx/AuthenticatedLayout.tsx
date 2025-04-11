import { Outlet } from "react-router-dom";

export const AuthenticatedLayout = () => {
  return (
    <div>
      <h1>TESTS</h1>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
