import { Header } from "../components"
import { FirstSection, ContactSection, SecondSection, ThirdSection } from "../sections";

const Home = () => {

      
       return (

        <>
            <div className="box-border m-0 p-0 overscroll-x-none text-gray-600 dark:text-gray-200">
             
                    <Header/>
               
                    <SecondSection/> 
                     
                    <ContactSection/>

                             
            </div>

        </>

    )

};

export default Home;
