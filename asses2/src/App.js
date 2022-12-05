import 'bootstrap/dist/css/bootstrap.css'
import { useState, useEffect } from 'react';
import './App.css';

function App() {
     
  const[products,setProducts]=useState([])

  useEffect(()=>{
      fetch(' https://fakestoreapi.com/products?limit=20')
    .then(res=>res.json())
    .then(json=>setProducts(json))

  },[]
  );

  return (
    
    <div className='container'>
      <table className="table table-border">
        <thead>
        <tr>
          <th> product Image</th>
          <th>Product name</th>
          <th>product description</th>
          <th>product ratings</th>
          <th>product category</th>
          <th>product count</th>
        </tr>
        </thead>

        <tbody>
          {
            products.map((value,index)=> (
              <tr>
                <td><img src={value.image} className="img1"/></td>
                <td>{value.title}</td>
                <td>{value.description}</td>
                <td>{value.rating.rate}</td>
                <td>{value.category}</td>
                <td>{value.rating.count}</td>
              </tr>
              

            ))
           
          }
        </tbody>
      </table>

    </div>
  );
}

export default App;
