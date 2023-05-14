import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "./components/Topbar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import { Routes, Route } from "react-router-dom";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import Invoice from "./pages/Invoice";
import Form from "./pages/Form";
import Calendar from "./pages/Calendar";
import BarChart from "./pages/BarChart";
import Pie from "./pages/PieChart";
import Line from "./pages/Line";
import Geo from "./pages/Geo";
import { theme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="app">
        <Sidebar />
        <main className="content">
          <Topbar />

          <Routes>
            <Route path="/" element={<Dashboard />} />

            <Route path="/team" element={<Team />} />

            <Route path="/contacts" element={<Contact />} />

            <Route path="/invoices" element={<Invoice />} />

            <Route path="/form" element={<Form />} />

            <Route path="/calendar" element={<Calendar />} />

            <Route path="/bar" element={<BarChart />} />

            <Route path="/pie" element={<Pie />} />

            <Route path="/line" element={<Line />} />

            <Route path="/geography" element={<Geo />} />
          </Routes>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
