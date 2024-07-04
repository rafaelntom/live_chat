import { Outlet } from "react-router-dom";
import "./App.css"; // You can remove this if not needed
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <div className="h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 via-blue-600 to-blue-900">
        <Toaster />
        <Outlet />
      </div>
    </>
  );
}

export default App;
