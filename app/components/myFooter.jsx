import '../css/Footer.css'
import { LinksTo } from './NavBars'
export const MyFooter = () => {
    return (
        <flex className='footer'>
           <div className='footer-box'>
                <LinksTo/>
            </div>
            <div className='footer-null'>
                <div>Términos y condiciones</div>
                <div>Privicidad</div>
                <div>Cookies</div>
            </div>
        </flex>
    )
}