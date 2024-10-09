import { useState, useEffect } from "react";

// 4 - Custom Hook
export const useFetch = (url) => {
  const [ data, setData ] = useState(null);

  // 5 - Refatorando o POST
  const [config, setConfig] = useState(null);
  const [method, setMethod] = useState(null);
  const [callFetch, setCallFetch] = useState(null);

  // 6 - Loading
  const[loading, setLoading] = useState(false);

  // 7 - Erros
  const [ error, setError ] = useState(null);

  const httpConfig = (data, method) => {
    if(method === "POST"){
      setConfig({
        method,
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(data),
      });

      setMethod(method);
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      // 7 - Tratando erros
      try {
        // 6 - loading
        setLoading(true);

        const res = await fetch(url);
        const json = await res.json();

        setData(json);
      }catch (error){
        console.log(error.message)
        setError("Houve algum erro ao carregar os dados!");
      }
      
      // 6 - loading
      setLoading(false);
    };

    fetchData();

  }, [url, callFetch]);


  // 5 - Refatorando o POST
  useEffect(() => {

    const httpRequest = async() => {
      let json

      if(method === "POST"){
        // 6 - loading
        setLoading(true);

        let fetchOptions = [ url, config ];

        const res = await fetch(...fetchOptions);
        json = await res.json();

        // 6 - loading
        setLoading(false);
      }

      setCallFetch(json);
    };

    httpRequest();
  }, [config, method, url]);

  return { data, httpConfig, loading, error };
}
