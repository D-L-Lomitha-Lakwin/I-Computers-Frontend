import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductCard from './components/productCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <ProductCard name="Laptop" price="100,000" image="https://tse3.mm.bing.net/th/id/OIP.L12A9cgd7dCHFZFd8BTPKwHaHZ?rs=1&pid=ImgDetMain&o=7&rm=3" />

      <ProductCard name="Phone" price="70,000" image="https://tse2.mm.bing.net/th/id/OIP.BQhwKHwVYvkFSiV6jwk_RAHaHj?rs=1&pid=ImgDetMain&o=7&rm=3"/>

      <ProductCard name="Watch" price="5,000" image="https://tse2.mm.bing.net/th/id/OIP.8Js70CPlVBwuwX8HTrJBfAHaG6?rs=1&pid=ImgDetMain&o=7&rm=3"/>


    </>
  )
}

export default App
