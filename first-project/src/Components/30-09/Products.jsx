import { useEffect, useState } from "react";
import  toast  from "react-hot-toast";
import axios from "axios";

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        //toast.success("page rendered on browser")

        async function getProducts () {
            try {
            const { data } = await axios.get('https://fakestoreapi.com/products')
            //console.log(data, "data here")
            setProducts(data)
            } catch (error) {
                toast.error("error.message")
            }
        }
        getProducts()
    }, [])
    return (
        <div>{products?.length ? <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around" }}>
            {products.map((pro) => (
                <div style={{  width: "18%", height: "500px", marginBottom: "50px", boxShadow: "5px 5px 5px 5px gray" }}>
                    <img style={{ width: "80%", height: "250px", paddingTop: "20px" }} src={pro.image} />
                    <h1 style={{fontSize: "18px"}}>Name :{pro.title}</h1>
                    <h3>Price : {pro.price} $</h3>
                    <button style={{width: "120px", height: "40px", border: "3px solid black"}}>Add to cart</button>
                </div>
            ))}
        </div> : <div>Loading...</div>}</div>
    )
}

export default Products;