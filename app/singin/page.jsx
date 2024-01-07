"use client";
import {useForm} from 'react-hook-form';

function SingIn(){

    const{
        register,
        handleSubmit,
        formState: {errors},
        reset
    } = useForm();
    
    const onSubmit = handleSubmit((datos) => {
        console.log(datos);
        reset();
    });
    

    return(
        <div>
            <h1>Inicia Seccion</h1>
            <form onSubmit={onSubmit}>

                <div className='mx-auto p-2'>
                    <label htmlFor="correo">correo</label>
                    <input type="email" name="correo" {...register("correo", {
                        required: {
                            value: true,
                            message: "El Correo es requerido"
                        },
                        pattern:{
                            value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                            message: "Correo no Valido"
                        }
                    })}/>
                    {errors.correo && <span className="bg-danger">{errors.correo.message}</span>}
                </div>

                <div className='mx-auto p-2'>
                    <label htmlFor="password">Contraseña</label>
                    <input type="password" name="password" {...register("password",{
                        required:{
                            value: true,
                            message: "La Contraseña es requerida"
                        },
                        minLength:{
                            value: 6,
                            message: "la Contraseña debe ser mayor a 6 caracteres"
                        }
                    })}/>
                    {errors.password && <span className="bg-danger">{errors.password.message}</span>}
                </div>
                <button type="submit" className='btn btn-success'>Iniciar</button>
            </form>
        </div>
    )
}

export default SingIn;