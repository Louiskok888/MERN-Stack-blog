import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import IndexPage from "./pages/IndexPage";
import Loginpage from "./pages/LoginPage";
import Registerpage from "./pages/RegisterPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<IndexPage />} />
        <Route path='/login' element={<Loginpage />} />
        <Route path='/register' element={<Registerpage />} />

      </Route>
    </Routes>
  );
}
export default App;
