import PropTypes from "prop-types";

const Items = (props) => {
    
    const {children, alt, listImage} = props

  return (<>
            

            <div>

                <img className="h-8 w-8" src={listImage} alt={alt} />   

                <div>

                </div>
            </div>        
            
          </>)
};

Items.propTypes = {
    listImage: PropTypes.any.isRequired
    
};

Items.defaultProps = {
    listImage: ""
}

export default Items;
