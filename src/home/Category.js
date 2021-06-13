import React,{useState,useEffect} from 'react';
import axios from 'axios';
const Category = () => {
    const [name, setName] = useState('');
    const [desc, setDesc] = useState("");

    

    const submitData = (e) => {
        e.preventDefault();
        axios.post("http://localhost:5000/category/add", { name: name, description: desc }).then(res => {
            console.log(res.data);
        }).catch(err => {
            console.log(err);
      })
    }
    return (
        <div className="container">
            <h3 className="text-info">Add category</h3>
            <form onSubmit={(e)=>{submitData(e)}}>   
                <label>Category Name</label>
                <input type="text" value={name} required onChange={(e) => setName(e.target.value)} />
                <br /><br />
                <label>Description</label>
                <input type="text" value={desc} required onChange={(e) => setDesc(e.target.value)} />
                <br /><br />
                <input type="submit"  value="Add category" className="btn btn-danger"/>
            </form>
        </div>
    );
};

export default Category;