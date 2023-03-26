import React from "react";

const Toast = ({ value, children, modifier }) => {

  return <>
            <div className="toast toast-start z-[87]">

            <div className={`alert ${modifier}`}>

                <div>

                <span>{value}</span>

                <div className="ml-4">
                
                  {children}
                </div>

                </div>

            </div>
            
            </div>
        </>
}

export default Toast;
