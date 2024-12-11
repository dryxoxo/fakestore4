import axios from "./axios";

export const getAllProduct = async () => {
    try {
        return await axios.get(`/products`)
    } catch (error) {
        console.log(error)
    }
}