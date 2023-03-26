const Avatar = ({width, modifier, image, alt}) => {

  return (<>

        <div className="avatar">

          <div className={`${width} ${modifier} rounded-full hover:ring ring-primary ring-offset-base-100 ring-offset-2` }>

                <img src={image} alt={alt} />


          </div>

        </div>
  
         </>)
}

Avatar.defaultProps = {
    width: "w-14"
}

export default Avatar;
