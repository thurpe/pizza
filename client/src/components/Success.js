import React from "react";

function Success({ message }) {
  return (
    <div
      className="alert alert-success alert-dismissible fade show"
      role="alert"
    >
      {message}
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  );
}

export default Success;
