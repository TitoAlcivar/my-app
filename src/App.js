import { Ejercicio1 } from "./components/Ejercicio1";

export const info = {
  type: <i class="fa-brands fa-cc-visa"></i>,
  number: "**** **** **** 0790",
  expirationMonth: "8",
  expirationYear: "24",
  bank: "BBVA",
  owner: "Johan Muñoz",
  cssClass: "aqua"
}



function App() {
  return (
    <>
      <Ejercicio1 info={info}/>

    </>
  )
}

export default App;
