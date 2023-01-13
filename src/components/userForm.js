import Input from './Input'	
import Button from './Button'
import useFormulario from '../hooks/useFormulario'

const UserForm = ({ submit }) => {
    const [formulario, handleChange, reset] = useFormulario({
        name :'', 
        lastname: '',
        email: ''
    })    
    const handleSubmit = (e) => {
        e.preventDefault()
        submit(formulario)
        reset()
    }
    return(
        <form onSubmit={handleSubmit} >
              <Input 
              label="Nombre" 
              placeholder="Nombre"
              name="name" 
              value={formulario.name} 
              onChange={handleChange} />

              <Input label="Apellido" 
              name="lastname" 
              placeholder="Apellido"
              value={formulario.lastname} 
              onChange={handleChange} />

              <Input label="Correo" 
              name="email" 
              placeholder="Correo"
              value={formulario.email} 
              onChange={handleChange} />

              <Button>Enviar</Button>
         </form>
    )
}

export default UserForm