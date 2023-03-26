import axios from "axios"

const  url = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'

 export const getPlacesData = async ( sw, ne)  => {

    try {

        const { data: {data}} = await axios.get(url, {

          params: {
          bl_latitude: sw.lat,
          tr_latitude: ne.lat,
          bl_longitude: sw.lng,
          tr_longitude: ne.lng,
        
          },
          headers: {
            'X-RapidAPI-Key': 'e1c5984fefmsh95046d1427a600fp1c53bcjsnc66df6c482a6',
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
          }

        })

        return data
        
    } catch (error) {

        console.log(error);
        
    }

}