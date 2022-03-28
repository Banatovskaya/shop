import { useCallback} from "react";

export const useHttp = () => {

    const request = useCallback(async (url, method = 'GET', body = null, headers = {'Content-Type': 'application/json'}) => {

        try {
            const response = await fetch(url, {method, body,headers})
            if (!response.ok) {
                throw new Error(`Could not fetch ${url}, status: ${response.status}`);
            }

            const data = await response.json();

            return data;

        } catch (e) {
            throw e;
        }

    }, []);

    return request
}

// GET /:entity[?param1=...&param2=...] — списочный get

// Простой случай: в случае успеха сервер возвращает 200 OK 
// с массивом объектов в формате JSON в теле ответа (т.е. ответ начинается с [ и заканчивается ]).