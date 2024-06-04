import { BannerDesc, BannerPhoto } from './Banners';
import { Calculator } from './Calculator';
import { ContactForm } from './ContactForm';
import { MyFooter } from './myFooter';

const Divider = () => {
    return (
      <div style={{height: '40vh', width: '100%', backgroundColor: '#666666'}}>
      </div>
    )
  }

  
export const MainPage = () => {
    return (
        <>
            <BannerPhoto />
            <BannerDesc />
            <Calculator /> 
            <Divider />
            <ContactForm />
            <MyFooter />
        </>
    )
}