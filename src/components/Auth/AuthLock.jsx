
const AuthLock = ({modifier, children}) => {

  return <>
  
                <span className={`badge p-4 ${modifier}`} >{children}</span>

        </>
}

export default AuthLock;
