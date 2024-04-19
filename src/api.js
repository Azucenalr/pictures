import axios from 'axios'


const searchImage = async(term) => {
    const url = 'https://api.unsplash.com/search/photos/?client_id=BIiMd_Gt4geQYl4M-Z4bzy_AfY0mAvD1ach2UL3IG4Q'
    
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

