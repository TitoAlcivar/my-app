import { Ejercicio1 } from "./components/Ejercicio1";

export const info = {
  type: "VISA",
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
      <Ejercicio1 type={info.type} 
                  number={info.number} 
                  expirationMonth={info.expirationMonth}
                  expirationYear={info.expirationYear}
                  bank={info.bank}
                  owner={info.owner}
                  cssClass={info.cssClass}/>

    </>
  )
}

export default App;
