import React, { useState, useEffect } from "react";
import axios from "axios";
import "./common.css";
import { useHistory } from "react-router-dom";
const Category = () => {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");

  const history = useHistory();

  const submitData = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/category/add", {
        name: name,
        description: desc,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="container">
      <input
        type="button"
        onClick={() => {
          history.push("/");
        }}
        className="m-2 btn btn-dark"
        value="Home"
      />
      <input
        type="button"
        onClick={() => {
          history.push("/food");
        }}
        className="m-2 btn btn-dark"
        value="Add Food"
      />
      <h3 className="text-info">Add category</h3>
      <form
        className="form"
        onSubmit={(e) => {
          submitData(e);
        }}
      >
        <div className="mb-3">
          <label>Category Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label>Description</label>
          <input
            type="text"
            className="form-control"
            value={desc}
            required
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>

        <input type="submit" value="Add category" className="btn btn-danger" />
      </form>
    </div>
  );
};

export default Category;
