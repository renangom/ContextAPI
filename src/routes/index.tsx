import React, { PropsWithChildren, ReactComponentElement, ReactElement } from 'react'
import { Fragment } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'


interface ItemProp{
    Item: any;
}
const Private = ({Item}:ItemProp) => {
    const signed = false;

    return signed ? <Item /> : <Login />
}




export default function Rotas() {
  return (
    <Router>
        <Fragment>
            <Routes>
                <Route  path='/home' element={<Private Item={<Home />} />} />
                <Route  path='/' element={<Login />} />
                <Route  path='/register' element={<Register />} />
                <Route  path='*' element={<Login />} />
            </Routes>
        </Fragment>
    </Router>
  )
}
