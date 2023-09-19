import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Kanban from "./pages/Kanban"

export const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="cadastro" element={<Register />} />
      <Route path="/kanban" element={<Kanban />} />
    </Routes>
  </BrowserRouter>
)
