import { Route } from "react-router-dom";
import Dashboard from "../pages/admin/Dashboard";
import Sales from "../pages/admin/Sales";
import Transaction from "../pages/admin/Transaction";
import ProtectedRoute from "./ProtectedRoute";

const routes = [
  { path: "dashboard", name: "dashboard", element: <Dashboard /> },
  { path: "sales", name: "orders", element: <Sales />, auth: true },
  { path: "transaction", name: "orders", element: <Transaction />, auth: true },

  //   { path: "profile", name: "profile", element: Salses, auth: true },
  //   { path: "tickets", name: "tickets", element: Tickets, auth: true },
  //   //prettier-ignore
  //   { path: 'transactions', name: 'transactions', element:Transactions,auth:true },
];

export default routes;
