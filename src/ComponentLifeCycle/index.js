import React from "react";

const ComponentLifeCycle = () => {
  /* Aqui no debe haber efectos secundarios = Cuallquier afectacion
  a elementos fuera de la funcion del Componente = Por ejemplo si a una
  variable global la cambiamos dentro del componente */
  const [counter, setCounter] = React.useState(0);

  //useEffect para definir funcionalidad en el ciclode vida de un componente
  // Si pasamos un Array vacio como segundo argumento solo se ejecuta 1 vez
  React.useEffect(() => {
      console.log('Se ejecuto el useEffect');
      /* Si la funcion que pasamos como primer argumento retorna una funcion esta se ejecutara cuando el 
      componente valla a ser eliminado */
      return () => {
          console.log('Adios');
      }
  }, [])

  return (
    <button onClick={() => setCounter(counter + 1)} > Click {counter}  </button>
  )
}

  const DeleteButton = () => {
      const [showButton, setShowButton] = React.useState(true);
      return (
        <div>
          <button onClick={() => setShowButton(false)} > Delete Button </button>
          <div>
              {/* showButton by default is true so render the component - when click delete is false so it is not render */}
              {showButton && <ComponentLifeCycle/>}
          </div>
        </div>
      );
  }

export { DeleteButton };