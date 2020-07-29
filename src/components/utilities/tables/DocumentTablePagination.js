import React from "react";

export function paginate(data, page, perPage) {
  let from;
  let to;
  from = (page - 1) * perPage;
  var tempTo = page * perPage;
  to = data.length - 1 < tempTo ? data.length : tempTo;
  var paginated = data.slice(from, to);
  return paginated;
}

function DocumentTablePagination(props) {
  const data = props.data;
  const page = props.page;
  const perPage = props.perPage;

  return (
    <div className="pagination">
      {page > 1 && (
        <button onClick={() => props.handlePageChange(page - 1)}>
          Previous
        </button>
      )}
      {page * perPage < data.length - 1 && (
        <button onClick={() => props.handlePageChange(page + 1)}>Next</button>
      )}
    </div>
  );
}

export default DocumentTablePagination;
