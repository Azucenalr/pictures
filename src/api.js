import axios from 'axios'

const searchImage = async(term) => {
    const url='https://api.unsplash.com/search/photos/?client_id=YG5oyDCqaXSHyA0KheHEDS4Qvg3XVN8q_6TLzy37cqA'

    const response = await axios.get(url, {
        params:{
            query: term
        }
    })

    console.log(term)
    console.log(response.data.results)
    return response.data.results
}

export default searchImage


