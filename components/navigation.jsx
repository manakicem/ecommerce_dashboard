import Link from 'next/link';
function Navigation() {
    return (
        <ul className='d-flex'>
            <li>
                <Link href="/">Ir al Inicio</Link>
            </li>
            <li>
                <Link href="/login">Iniciar Seccion</Link>
            </li>
            <li>
                <Link href="/sing_up">Registrarse</Link>
            </li>
        </ul>
    )
}

export default Navigation;