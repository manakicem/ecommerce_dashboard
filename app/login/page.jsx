function Login(){
    return(
        <div>
            <h1>Inicia Seccion</h1>
            <form>
                <div className='mx-auto p-2'>
                    <label htmlFor="userName">Nombre del Usuario</label>
                    <input type="text" />
                </div>
                <div className='mx-auto p-2'>
                    <label htmlFor="password">Contraseña</label>
                    <input type="password" />
                </div>
                <button type="submit" className='btn btn-success'>Iniciar</button>
            </form>
        </div>
    )
}

export default Login;