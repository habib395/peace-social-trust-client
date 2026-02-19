import { Outlet } from "react-router";
import CommonLayout from "./components/ui/layout/CommonLayout";

function App() {
  return (
    <CommonLayout>
      <Outlet />
    </CommonLayout>
  );
}

export default App;
