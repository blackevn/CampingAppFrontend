import useCookies from "../hooks/useCookies";

const Cookies = () => {

    const [ closeCookies, cookies, denyCookies, acceptCookies ] = useCookies()

    console.log(cookies);

  return <>

{ cookies && <div className="z-[100] card w-96 bg-gray-200 text-gray-600 dark:text-gray-200 dark:bg-neutral fixed bottom-0 left-0 m-4">
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Cookies!</h2>
                            <p>We are using cookies for no reason.</p>
                            <div className="card-actions justify-end">
                            <button className="btn btn-primary" onClick={acceptCookies}>Accept</button>
                            <button className="btn btn-ghost" onClick={denyCookies}>Deny</button>
                            </div>
                        </div>
                        </div>}
  
        </>
};

export default Cookies;
