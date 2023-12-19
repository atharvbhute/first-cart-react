import { useState } from 'react'
import { Sidebar } from './components/index'
import { productService } from './appwrite/productService';


function App() {
  const [data, setData] = useState("");

  function createProduct(){
    productService.getProductByCategory({
      category_id : "sdasdf35asd2",
    }).then((response)=> { console.log(response); setData(response)}).catch((err)=> alert(err));
  }

  return (
    <>
    <div>
      <button onClick={createProduct}>click to add</button>
      <p>{data.documents[0].name}</p>
    </div>
     
    </>
  )
}

export default App
