import React from "react";
import "../styles/TradeTable.css";
export default function Table(props) {
  return (
    <>
      <tr>
        <th scope="row">{props.id}</th>

        <td className="Company">
          <a className="platform" href={props.link}>
            {props.platform}
          </a>
        </td>
        <td>
          <h4>{props.LTP}</h4>
        </td>
        <td>
          <h4>{props.BSP}</h4>
        </td>
        <td className="diff">
          <h4>{props.Diff}</h4>
        </td>
        <td className="save">
          <h4>{props.save}</h4>
        </td>
      </tr>
    </>
  );
}
