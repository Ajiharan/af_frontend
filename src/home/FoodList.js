import React,{useState,useEffect} from 'react';
import axios from 'axios';
const FoodList = () => {
    const [foodList, setFoodList] = useState([]);
    const [categoryList, setCategoryList] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:5000/food/getAll").then(res => {
           // console.table(res.data)
            setFoodList(res.data);

        }).catch((err) => {
            console.log(err.response.data)
        });
    }, []);

    useEffect(() => {
        axios.get("http://localhost:5000/category/getAll").then(res => {
            console.table(res.data)
            setCategoryList(res.data);

        }).catch((err) => {
            console.log(err.response.data)
        });
    }, [])

    return (
        <div className="container mt-4">
            <div className="top">
                <select>
                    <option value="">All Food</option>
                    {
                        categoryList.map((res) => (
                            <option ke={res._id } value={res._id}>{ res.name}</option>
                        ))
                    }
                </select>
           </div>
            {foodList.map(res => (
                <div className="card p-2 m-2" key={res._id}>
                    <p>{res.name}</p>
                    <p>{ res.amount}</p>
                </div>
            ))}
        </div>
    );
};

export default FoodList;