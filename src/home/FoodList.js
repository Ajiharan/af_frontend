import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory} from 'react-router-dom';
const FoodList = () => {
    const history = useHistory();
  const [foodList, setFoodList] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const [category, setCategory] = useState("");
  useEffect(() => {
    axios
      .get("http://localhost:5000/food/getAll")
      .then((res) => {
        setFoodList(res.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }, []);

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
  useEffect(() => {
    console.log(category);
      if (category === "") {
        axios
        .get("http://localhost:5000/food/getAll")
        .then((res) => {
          setFoodList(res.data);
        })
        .catch((err) => {
          console.log(err.response.data);
        });
    } else {
      axios
        .get(`http://localhost:5000/food/get/${category}`)
        .then((res) => {
          console.table(res.data);
          setFoodList(res.data);
        })
        .catch((err) => {
          console.log(err.response.data);
        });
    }
  }, [category]);

  return (
    <div className="container mt-4">
      <div className="top">
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">All Food</option>
          {categoryList.map((res) => (
            <option key={res._id} value={res._id}>
              {res.name}
            </option>
          ))}
              </select>
              <input type='button' onClick={()=>{history.push("/category")}} className="m-2 btn btn-dark" value="Add category" />
              <input type='button' onClick={()=>{history.push("/food")}} className="m-2 btn btn-dark" value="Add Food"/>
      </div>
      <h2 className="text-danger p-2">Food list</h2>
      {foodList.map((res) => (
        <div className="card p-2 m-2" key={res._id}>
          <p>{res.name}</p>
          <p>{res.code}</p>
          <p>{res.amount}</p>
          <p>{res.size}</p>
        </div>
      ))}
    </div>
  );
};

export default FoodList;
