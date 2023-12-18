import { useState } from 'react'
import { Sidebar } from './components/index'
import { productService } from './appwrite/productService';


function App() {
  const [data, setData] = useState("df");

  function createProduct(){
    productService.createProduct({
      name : "fridge",
      description : "lorem ipsum gebrish",
      brand : "worlpool",
      category_id : "sdasdf35asd2",
      image : "aasdfadflskd254555"
    }).then((response)=> setData(response)).catch((err)=> alert(err));
  }

  return (
    <>
    <div>
      <button onClick={createProduct}>click to add</button>
      <p>{data.name}</p>
    </div>
     
    </>
  )
}

export default App
