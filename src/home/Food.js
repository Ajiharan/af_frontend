import React, { useState,useEffect } from "react";
import axios from "axios";
const Food = () => {
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [amount, setAmount] = useState("");
  const [size, setSize] = useState("");
  const [categoryList, setCategoryList] = useState([]);
  const [categories, setCategory] = useState([]);

 const handleChange = (e) => {
    let value = Array.from(e.target.selectedOptions, option => option.value);
     setCategory(value);
  }
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
        axios.post("http://localhost:5000/food/add", { name,amount,size,categories,code }).then(res => {
            console.log(res.data);
        }).catch(err => {
            console.log(err);
      })
  };
  return (
    <div className="container">
      <h3 className="text-info">Add category</h3>
      <form
        onSubmit={(e) => {
          submitData(e);
        }}
      >
        <label>Code</label>
        <input
          type="text"
          value={code}
          required
          onChange={(e) => setCode(e.target.value)}
        />
        <br />
        <br />
        <label>Name</label>
        <input
          type="text"
          value={name}
          required
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />
        <label>Amount</label>
        <input
          type="number"
          value={amount}
          required
          onChange={(e) => setAmount(e.target.value)}
        />
        <br />
        <br />
        <label>size</label>
        <input
          type="number"
          value={size}
          required
          onChange={(e) => setSize(e.target.value)}
        />
        <br />
        <br />
       
        <select value={categories} onChange={(e) => handleChange(e)} multiple>
          <option value="">All Food</option>
          {categoryList.map((res) => (
            <option key={res._id} value={res._id}>
              {res.name}
            </option>
          ))}
        </select>
        <input type="submit" value="Add category" className="btn btn-danger" />
      </form>
    </div>
  );
};

export default Food;
