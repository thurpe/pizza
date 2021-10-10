import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Filter() {
  const dispatch = useDispatch();
  return (
    <div className="container">
      <div className="row justify-content-center bs">
        <div className="col-md-3 w-100">
          <input
            type="text"
            className="form-control"
            placeholder="search pizzas"
          />
        </div>
        <div className="col-md-3 w-100">
          <select className="form-control">
            <option value="all">All</option>
            <option value="veg">Veg</option>
            <option value="nonveg">Non-veg</option>
          </select>
        </div>
        <div className="col-md-3">
          <button className="btn btn-danger w-100 mt-1">FILTER</button>
        </div>
      </div>
    </div>
  );
}
