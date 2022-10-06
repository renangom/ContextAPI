import React, { useState } from 'react'
import { Submit } from '../../App';
import './styles'


interface onSubmit {
  onSubmit: Function;
}
export default function Register({onSubmit}:onSubmit) {

  const [name,setName] = useState("");
  const  [email, setEmail] = useState("");

  const handleSubmit = (e:Event | any) => {
    e.preventDefault();
    console.log("dados", {name, email});

    onSubmit(name, email);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Nome:</label>
        <input type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} />

        <label htmlFor="email">Email:</label>
        <input type="text" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <button type="submit">Enviar</button>
      </form>
    </div>
  )
}
