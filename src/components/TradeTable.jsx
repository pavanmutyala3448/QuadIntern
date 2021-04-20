import React from "react";
import table from "./table.js";
import "../styles/TradeTable.css";
import Table from "./Table";

export default function TradeTable() {
  return (
    <div className="container-fluid trade-table">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Platform</th>
            <th scope="col">Last Traded Price</th>
            <th scope="col">Buy / Sell Price</th>
            <th scope="col">Difference</th>
            <th scope="col">Savings</th>
          </tr>
        </thead>
        {table.map((item) => (
          <Table
            id={item.id}
            platform={item.platform}
            LTP={item.LTP}
            BSP={item.BSP}
            Diff={item.Diff}
            save={item.save}
            link={item.link}
          />
        ))}
      </table>
    </div>
  );
}
