import { Ejercicio1 } from "./components/Ejercicio1";
import { People } from "./components/People";

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
      <Ejercicio1 info={info} />
      <People/>
    </>
  )
}

export default App;
