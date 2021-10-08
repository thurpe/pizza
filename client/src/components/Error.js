import React from "react";

export default function Error({ message }) {
  return (
    <div className="alert alert-danger mt-5" role="alert">
      <strong>Holy guacamole!</strong> {message}
    </div>
  );
}
