import http from "../http-common";
import { useEffect, useState } from "react";
import axios from "axios";

export const useFetch = (dataUrl) => {
    
    const [res, setRes] = useState(null);
    const [fetchError, setFetchError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        let isMounted = true;
        const source = axios.CancelToken.source();

        const fetchData = async (url) => {
            setIsLoading(true);
            try {
                const response = await http.get(url, {
                    cancelToken: source.token
                });

                if (isMounted) {
                    setRes(response.data);
                    setFetchError(null)
                }
            } catch (err) {
                if (isMounted) {
                    setFetchError(err);
                    setRes(null);
                }
            } finally {
                isMounted && setIsLoading(false);
            }
        }

        fetchData(dataUrl);

        const cleanUp = () => {
            isMounted = false;
            source.cancel();
        }

        return cleanUp;
    }, [dataUrl]);

    return { res, fetchError, isLoading };
}