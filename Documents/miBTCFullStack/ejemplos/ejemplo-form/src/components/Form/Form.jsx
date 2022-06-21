import React, {useState} from "react"

const Form = props => {
    let [datos, setDatos] = useState({
        user: "",
        pass: "",
        genero: "0",
        isUser: true
    })

    //renderizado condicional
    const usuario = () => {
        if (datos.isUser){
            return  (
                <div>
                    <label>Usuario:</label>
                    <input type="text" value={datos.user} onChange={handleChange} name="user" />
                    {datos.user}
                </div>
            )
        } else{
            return (<span>No user</span>)
        }
        
    }

    const handleChange = (event) => {
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
    }

    const handleSelectChange = (event) => {
        setDatos({
            ...datos,
            [event.target.name]: event.target.selectedOptions[0].value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(datos)
    }

    return (
        <form onSubmit={handleSubmit}>
            <p>{datos.isUser ? "Bienvenido" : "No user"}</p>
            {datos.isUser &&
                <div>
                    <label>Usuario:</label>
                    <input type="text" value={datos.user} onChange={handleChange} name="user" />
                    {datos.user}
                </div>
            }

            <div>
                <label>Contraseña:</label>
                <input type="password" value={datos.pass} onChange={handleChange} name="pass" />
                {datos.pass}
            </div>
            <div>
                <label>Género</label>
                <select name="genero" onChange={handleSelectChange} value={datos.genero}>
                    <option value="0">Elige un género</option>
                    <option value="M">Mujer</option>
                    <option value="H">Hombre</option>
                    <option value="O">Otro</option>
                </select>

                {datos.genero}
            </div>
            <input type="submit" value="Enviar" />
        </form>
    )
}

export default Form