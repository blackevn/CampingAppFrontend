import {useState} from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { useReCaptcha } from '../hooks';
import { ReCaptchaContext } from '../context/ReCaptchaContext';

const ReCaptcha = () => {

   
    const [ response, setResponse ] = useReCaptcha()

    const handleSubmit = (event) => {

      event.preventDefault()

      }
  
      const onChange = (value) => {

        setResponse(value)
        
      }

    console.log(response);

  return <>

        <ReCaptchaContext.Consumer>

            {({response}) => (

            <form onSubmit={handleSubmit} className="w-full">

                <ReCAPTCHA sitekey="6LewhBUkAAAAANG4k1c2qhurZ20pd9qMHybYrtZ-" onChange={onChange} />

            </form>

            )}
        </ReCaptchaContext.Consumer>
  
         </>
};

export default ReCaptcha;

