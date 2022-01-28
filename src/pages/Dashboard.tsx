import { Content } from "../components/Content";
import { Details } from "../components/Details";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";

import "./Dashboard.css";

export function Dashboard() {
  return (
    <main className="dashboard-main">
      <Header title="Cauã Adomaitis" />
      <Sidebar />
      <Content />
      <Details />
    </main>
  );
}
