import { useState } from 'react'
import { CustomerContext } from './context/customer';
import { GlobalStyle } from './GlobalStyles'
import Rotas from './routes'


export interface Submit{
  name: string;
  email: string;
}

function App() {
  const [name,setName] = useState("");
  const  [email, setEmail] = useState("");
 

  const handleSubmit = ({name, email}:Submit) => {
    console.log(name, email)

    setEmail(email);
    setName(name);
  }
  return (
    <>
      <CustomerContext.Provider value={{name, email}}>
        <GlobalStyle />
        <Rotas />
      </CustomerContext.Provider>
    </>
  )
}

export default App
