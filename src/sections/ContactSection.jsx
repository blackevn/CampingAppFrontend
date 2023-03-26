import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Button, Input, Slider, TextArea } from "../components";
import { Link } from "react-router-dom";

const ContactSection = () => {
  return (<>

            <div className="hero ">
              <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                  <h1 className="text-5xl font-bold">Ask a question</h1>
                  <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl ">
                  <div className="card-body">

                    <div className="form-control">
                    
                      <Input type="text" placeholder="Name" modifier="input input-bordered" />

                    </div>

                    <div className="form-control">
                      
                      <TextArea cols="6" type="text" placeholder="Ask question" modifier="input h-10 input-bordered" />
                     
                    </div>

                    <div className="form-control ">

                      <Button text="Send" icon={faArrowAltCircleRight} modifier="btn btn-primary"/>

                    </div>
                    <div className="w-full grid place-items-center">

                      <Link>
                        Privacy Policy
                      </Link>

                    </div>



                  </div>
                </div>
              </div>
            </div>
  
         </>)
};

export default ContactSection;
