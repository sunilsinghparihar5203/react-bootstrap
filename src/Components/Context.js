import React,{createContext} from 'react'

export const CartContext = createContext({
    items:[],
    totalAmount : 0,
    addItem:(item)=>{},
    removeItem:(id)=>{}
})

export const productsContext = createContext([])


export const showCartContext = createContext({
    handleClose: ()=>{},
    handleShow: ()=>{},
})

export const authContext = createContext({
    token:'',
    isLoggin:false,
    login: (token)=>{},
    logout:()=>{}
})

