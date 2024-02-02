import axios, { AxiosPromise } from "axios"
import { FoodData } from "../interface/FoodData";
import { useQuery } from "@tanstack/react-query";


const fetchData = async (): AxiosPromise<FoodData[]> => {
    const response = await axios.get('http://localhost:8080/food')
    return response;

}

export function useFoodData() {
    const query = useQuery({
        queryFn : fetchData,
        queryKey : ['food-data'],
        retry : 2
    })

    return {
        ...query,
        data: query.data?.data
    }
}