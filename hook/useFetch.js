import axios from 'axios';
import { useEffect, useState } from "react"
import { logger } from "react-native-logs";

const useFetch = (endpoint, query) => {

  const log = logger.createLogger({
    transportOptions: {
      colors: {
        info: "blueBright",
        warn: "yellowBright",
        error: "redBright",
        debug: "white",
      },
    },
  });

  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  // import {RAPID_API_KEY} from '@env'


  const options = {
    method: 'GET',
    url: `https://zoopla4.p.rapidapi.com/${endpoint}`,
    headers: {
      'X-RapidAPI-Key': '37ba8c1b1fmsh4eedbbc48cab0fap1047e2jsnf7d1d31197b0',
      'X-RapidAPI-Host': 'zoopla4.p.rapidapi.com'
    },
    params: {
      ...query
    },

  };


  const fetchData = async () => {
    setIsLoading(true)

    try {
      const response = await axios.request(options)
      log.warn("This is some test warning in App.js");
      log.info("res:**************************", response.data.data)
      setData(response.data.data)
      setIsLoading(false)
    }
    catch (error) {
      setError(error)
      alert("There is an error")
    }
    finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const refetch = () => {
    setIsLoading(true)
    fetchData()
  }

  return { data, isLoading, error, refetch }


}
export default useFetch