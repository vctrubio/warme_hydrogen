import '../css/Footer.css'

export const MyFooter = () => {
    return (
        <flex className='footer'>
            <div className='footer-box'>
                <div>Acerca</div>
                <div>Calculador</div>
                <div>Producto</div>
                <div>Contacto</div>
            </div>
            <div className='footer-null'>
                <div>Términos y condiciones</div>
                <div>Privicidad</div>
                <div>Cookies</div>
            </div>
        </flex>
    )
}