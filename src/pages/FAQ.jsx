import React from "react";

const FAQ = () => {

    const faqs = [
        
                  {
        
                   q: "What kind of wild swimming and camping experiences do you offer?",
                   a: "We offer a wide range of wild swimming and camping experiences, from guided tours to equipment rentals. Our experiences cater to all skill levels and interests, from secluded and serene swimming holes to rugged and remote camping spots."                
                                
                  },
        
                  {
        
                   q: "Do I need to have experience with wild swimming and camping to participate in your activities?",
                   a: "No, our experiences cater to all skill levels, so whether you're a seasoned outdoor enthusiast or just getting started, we have something for you. Our experienced guides will ensure that you have a safe and enjoyable experience."                
                                
                  },
        
                  {
        
                   q: "What is included in your guided tours?",
                   a: "Our guided tours include transportation to and from the activity location, all necessary equipment, and the guidance of an experienced guide."       
                   
                  },

                  {
        
                   q: "Can I rent equipment from you?",
                   a: "Yes, we offer equipment rental for those who prefer to go on their own wild swimming and camping adventure. Our rental equipment is top-of-the-line and well-maintained."       

                  },

                  {
        
                   q: "What is your cancellation policy?",
                   a: "Our cancellation policy varies depending on the activity and the notice given. Please refer to the specific activity's details on our website or contact us for more information."

                  },

                  {
        
                   q: "Do you offer any discounts for groups?",
                   a: "Yes, we offer group discounts for parties of 8 or more. Please contact us for more information."       

                  },

                  {
        
                   q: "Are there any age restrictions for your activities?",
                   a: "Some of our activities have age restrictions, please refer to the specific activity's details on our website or contact us for more information."       

                  },

                  {
        
                   q: "What should I bring for the wild swimming and camping experience?",
                   a: "We will provide you with a detailed list of what to bring for your specific activity, but in general, we recommend you bring comfortable clothing and footwear, sunscreen, a hat, a reusable water bottle, a towel, a camera, and any personal items you may need (such as medication)."

                  },

                  {
        
                   q: "Do you provide food and drink during the activities?",
                   a: "It depends on the activity, please refer to the specific activity's details on our website or contact us for more information. Some activities include food and drink, while others may require you to bring your own."

                  },

                  {
        
                   q: "Do you provide food and drink during the activities?",
                   a: "It depends on the activity, please refer to the specific activity's details on our website or contact us for more information. Some activities include food and drink, while others may require you to bring your own."

                  },

                  {
        
                   q: "Do you provide food and drink during the activities?",
                   a: "It depends on the activity, please refer to the specific activity's details on our website or contact us for more information. Some activities include food and drink, while others may require you to bring your own."

                  },

                  {

                    q: "Can I bring my own equipment?",
                    a: "You are welcome to bring your own equipment, but please keep in mind that our rental equipment is top-of-the-line and well-maintained."

                  },

                  {
                     
                    q: "Are there any fitness requirements for your activities?",
                    a:" Some of our activities may have fitness requirements, please refer to the specific activity's details on our website or contact us for more information."

                  },

                  {
                     
                    q: "How do I book a wild swimming and camping experience?",
                    a:" You can book a wild swimming and camping experience on our website by selecting the activity you are interested in and following the booking process. You can also contact us for more information or to book over the phone."

                  },

                  {

                    q: "Can I customize my own wild swimming and camping experience?",
                    a: "Yes, we offer customized experiences for groups of 8 or more. Please contact us for more information."

                  }
               
             ]

             const qanda = faqs.map( faq => (

                    <div className="p-4"  key={faq.q}>

                    <h1 className="text-2xl font-semibold my-2">{faq.q}</h1>

                    <p>{faq.a}</p>

                </div>

             ))

  return <>

            <div className="p-4 text-gray-600 dark:text-gray-200">

            <h1 className="text-4xl py-4">Frequently Asked Questions</h1>

            <div>

                {qanda}

            </div>

               
            </div>
  
         </>
};

export default FAQ;
