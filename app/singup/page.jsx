"use client";
import {useForm} from "react-hook-form";

function SingUp() {

    const {register, handleSubmit, reset, formState: {errors}, watch} = useForm();

    const onSubmit = handleSubmit((data)=>{
        console.log(data);
        reset();
        
    });

    return (
        <div>
            <h1>Registro</h1>
            <form onSubmit={onSubmit}>


                <div className='mx-auto p-2'>
                    <label htmlFor="nombre">Nombre</label>
                    <input type="text" name="nombre" {...register("nombre", {
                        required: {
                            value: true,
                            message: "El nombre es requerido"
                        },
                        maxLength: {
                            value: 20,
                            message: "el nombre debe tener menos de dos caracteres"
                        },
                        minLength: {
                            value: 2,
                            message: "el nombre debe tener mas de dos caracteres"
                        }
                    })}/>
                </div>
                {errors.nombre && <span className="bg-danger">{errors.nombre.message}</span>}


                <div className='mx-auto p-2'>
                    <label htmlFor="apellido">Apellido</label>
                    <input type="text" name="apellido" {...register("apellido", {
                        required: {
                            value: true,
                            message: "el apellido es requerido"
                        },
                        maxLength:{
                            value: 20,
                            message: "el apellido debe tener menos de dos caracteres"
                        },
                        minLength: {
                            value: 2,
                            message: "el apellido debe tener mas de dos caracteres"
                        }
                    })} />

                    {errors.apellido && <span className="bg-danger">{errors.apellido.message}</span>}
                </div>


                <div className='mx-auto p-2'>
                    <label htmlFor="correo">Correo</label>
                    <input type="email" name="correo" {...register("correo", {
                        required: {
                            value: true,
                            message: "el correo es requerido"
                        },
                        pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                        message: "correo no valido"
                    })} />
                    {errors.correo && <span className="bg-danger">{errors.correo.message}</span>}


                </div>
                <div className='mx-auto p-2'>
                    <label htmlFor="contraseña">Contraseña</label>
                    <input type="password" name="password" {...register("password", {
                        required: {
                            value: true,
                            message: "la contraseña es requerida"
                        },
                        minLength: {
                            value: 6,
                            message: "la contraseña debe tener mas de 6 caracteres"
                        }
                    })}/>
                    {errors.password && <span className="bg-danger">{errors.password.message}</span>}
                </div>


                <div className='mx-auto p-2'>
                    <label htmlFor="confimarcontraseña">Confirmar Contraseña</label>
                    <input type="password" name="confirmpassword" {...register("confirmpassword", {
                        required: {
                            value: true,
                            message: "debes confirmar la contraña"
                        },
                        validate: value => value == watch("password")? true : "las contraseñas no coinciden"
                    })}/>
                    {errors.confirmpassword && <span class="bg-danger">{errors.confirmpassword.message}</span>}
                </div>

                <button type="submit" className='btn btn-success'>Registrarse</button>

            </form>
        </div>
    )
}

export default SingUp;