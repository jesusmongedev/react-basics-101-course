import React from "react";

const Greetings = () => {
    const [name, setName ] = React.useState("");
    return (
        <div>
            {/* Emparejar un Evento con una funcion es igual que en HTML pero en Jsx usamos camelCase - onChange - onClick
            Aqui usamos onChange para que nos de el valor del input cuando cambie  
            Con React no usamos addEventListener usamos los eventos como onClick onChange */}
            {/* SyntheticBaseEvent => ev = evento que nos da React con la informacion de lo que acaba de suceder */}
            {/* <input type="text" onChange={(ev)=> console.log(ev)} /> => ver la informacion del evento */}
            <input type="text" onChange={(ev)=> setName(ev.target.value.toUpperCase())} />
            <p> Hola {name} </p>
            {/* <a href="#" onClick={(ev) => ev.preventDefault() } > Go </a> */}
        </div>
    )
}

export { Greetings };