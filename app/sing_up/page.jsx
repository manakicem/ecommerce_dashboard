function SingUp() {
    return (
        <div>
            <h1>Registro</h1>
            <form>
                <div className='mx-auto p-2'>
                    <label htmlFor="nombre">Nombre</label>
                    <input type="text" />
                </div>
                <div className='mx-auto p-2'>
                    <label htmlFor="apellido">Apellido</label>
                    <input type="text" />
                </div>
                <div className='mx-auto p-2'>
                    <label htmlFor="correo">Correo</label>
                    <input type="email" />
                </div>
                <div className='mx-auto p-2'>
                    <label htmlFor="contrasena">Contrasena</label>
                    <input type="password" />
                </div>
                <div className='mx-auto p-2'>
                    <label htmlFor="contrasena">Contrasena</label>
                    <input type="password" />
                </div>

                <button type="submit" className='btn btn-success'>Registrarse</button>

            </form>
        </div>
    )
}

export default SingUp;