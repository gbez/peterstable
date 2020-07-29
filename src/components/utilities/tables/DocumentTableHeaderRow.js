import React from "react";

function DocumentTableHeaderRow(props) {
  const fields = props.fields;
  return (
    <tr>
      {fields.map((field) => (
        <th>{field}</th>
      ))}
    </tr>
  );
}

export default DocumentTableHeaderRow;
