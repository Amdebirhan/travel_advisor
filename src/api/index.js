import axios from "axios";

const url = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';




export const getPlaceData = async (sw, ne) => {
    console.log(sw)
    const options = {
        params: {
            bl_latitude: '11.847676',
            tr_latitude: '12.838442',
            bl_longitude: '109.095887',
            tr_longitude: '109.149359',
            restaurant_tagcategory_standalone: '10591',
            restaurant_tagcategory: '10591',
            limit: '30',
            currency: 'USD',
            open_now: 'false',
            lunit: 'km',
            lang: 'en_US'
        },
        headers: {
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
            'X-RapidAPI-Key': 'bed8637b66msh2872cd6deb12ef6p1e34b6jsnb3c21af16256'
        }
    };

    try {
        const { data: { data } } = await axios.get(url, options);
        console.log(data);
        return data;
    } catch (e) {
        console.log(e)
    }
}


