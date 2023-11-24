import { createContext, useEffect, useReducer } from "react";
import toast from "react-hot-toast";



 export const AuthContext = createContext();

const reducer = (state, action) => {
    switch(action.type) {
        case "LOGIN":
            return {...state, user: action.payload}
        case "LOGOUT":
            return {...state, user: null}
        default: 
            return state;        
    }
}



const ParentAuthContext = ({children}) => {

    const initialState = { user: null }

    const [state, dispatch] = useReducer(reducer, initialState)

    const Login = (data) => {
        dispatch({type: "LOGIN", payload: data})
    }
    const Logout = (data) => {
        dispatch({type: "LOGOUT"})
    }


    useEffect(() => {
        //alert("page is refreshed")

        async function getCurrentUser() {
            try {
                const response = await api.post('/auth/get-current-user', {token})
                 if(response.data.success) {
                    console.log(response.data.user, "response.data.user")
                    Login(response.data.user)
                 }
            } catch (error) {
                toast.error(error, response.data.error)
            }
        }
    }, [])

    return (
        <AuthContext.Provider value={{state, Login, Logout}}>
            {children}
        </AuthContext.Provider>
    )
}


export default ParentAuthContext;