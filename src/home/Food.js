import React, { useState, useEffect } from "react";
import axios from "axios";
import "./common.css";
import { useHistory } from "react-router-dom";
const Food = () => {
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [amount, setAmount] = useState("");
  const [size, setSize] = useState("");
  const [categoryList, setCategoryList] = useState([]);
  const [categories, setCategory] = useState([]);
  const history = useHistory();

  const handleChange = (e) => {
    let value = Array.from(e.target.selectedOptions, (option) => option.value);
    setCategory(value);
  };
  useEffect(() => {
    axios
      .get("http://localhost:5000/category/getAll")
      .then((res) => {
        setCategoryList(res.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }, []);

  const submitData = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/food/add", {
        name,
        amount,
        size,
        categories,
        code,
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
          history.push("/category");
        }}
        className="m-2 btn btn-dark"
        value="Add Category"
      />
      <h3 className="text-info">Add Food</h3>
      <form
        className="form"
        onSubmit={(e) => {
          submitData(e);
        }}
      >
        <div className="mb-3">
          <label>Code</label>
          <input
            type="text"
            value={code}
            className="form-control"
            required
            onChange={(e) => setCode(e.target.value)}
          />
        </div>

        <div className="mb-3">
          {" "}
          <label>Name</label>
          <input
            type="text"
            value={name}
            required
            className="form-control"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-3">
          {" "}
          <label>Amount</label>
          <input
            type="number"
            value={amount}
            required
            className="form-control"
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        <div className="mb-3">
          {" "}
          <label>size</label>
          <input
            type="number"
            value={size}
            className="form-control"
            required
            onChange={(e) => setSize(e.target.value)}
          />
        </div>

        <div className="mb-3">
        
          <select value={categories} onChange={(e) => handleChange(e)} multiple>
            <option value="">All Food</option>
            {categoryList.map((res) => (
              <option key={res._id} value={res._id}>
                {res.name}
              </option>
            ))}
          </select>
        </div>

        <input type="submit" value="Add category" className="btn btn-danger" />
      </form>
    </div>
  );
};

export default Food;
