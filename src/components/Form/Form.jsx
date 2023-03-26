
const Form = (props) => {

  const {label, children, formPadding, action, method, bgColor, modifier, onSubmit} = props

  return (
          <>
  
          <form className={`
          
          flex
          flex-col
          ${bgColor}
          ${formPadding}
          ${modifier}
          rounded-2xl
          gap-3
          bg-gray-400
          dark:bg-neutral 
          
          `}
          
          action={action}
          method={method}
          onSubmit={onSubmit}
          >
            <h2 className={`
                text-4xl 
                m-4 
                font-bold
                text-white
                dark:text-gray-600
               
                `
                }  >{label}</h2>
            {children}

          </form>

          </>
          )
};


Form.defaultProps = {

  formPadding: "p-8",
  label: "Form"
  
}

export default Form;
