import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from './Context/AuthContext';
import toast from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../helpers/Axios.Config';

const Cart = () => {

    const router = useNavigate();

    const id = useParams();
    const [cartProducts, setCartProducts] = useState([]);

    console.log(cartProducts, "cartProducts")

    const {state} = useContext(AuthContext);

    async function getYourProducts() {
        try {
            // console.log(state?.user?.id, "state?.user?.id")
            const response = await api.post('/product/get-cart-product', id)
            //console.log(state?.user?.id, "state?.user?.id")
            if(response.data.success) {
                setCartProducts()
            }
        } catch (error) {
            console.log(error)
            toast.error(error?.response.data.message)
        }
    }

    useEffect(() => {
        if(state?.user && state?.user?.id === undefined) {
            toast.error("please login to access your cart products, redirecting your login page in 3 sec.")
            setTimeout(() => {
                router('/login')
            }, 3000)
        } else {
            if(state?.user?.id) {
                getYourProducts()
            }
        }
    }, [state])
  return (
    <div>
      cart
    </div>
  )
}

export default Cart
