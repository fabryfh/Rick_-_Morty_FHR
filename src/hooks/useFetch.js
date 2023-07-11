import { useState } from "react";
import axios from "axios"

const useFetch = ( url ) => {

    const [infoApi, setInfoApi ] = useState()
    const [hasError, setHasError] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    const getApi = () => {
        setIsLoading(true)
        axios.get(url)
        .then(resp => {
            setInfoApi(resp.data)
            setHasError(false)
        })
            
        .catch(error => {
            console.error(error)
            setHasError(true)
        })
        .finally(() => 
            setIsLoading(false)
        )
    }

    return [ infoApi, getApi, hasError, isLoading ]

}

export default useFetch