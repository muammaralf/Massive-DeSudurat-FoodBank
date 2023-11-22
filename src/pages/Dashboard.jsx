import React from "react";
import Button from "../Components/Button";
import DataPenyaluran from "../Components/DataPenyaluran";
import "../index.css";

const Dashboard = () => {
  return (
    <div className="coba aja ini deh">
      Dashboard
      <Button TextButton="Confirm" />
      <DataPenyaluran />
    </div>
  );
};

export default Dashboard;
