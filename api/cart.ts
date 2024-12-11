import axios from "./axios";

export const getUserCart = async (userId: number) => {
    try {
        return await axios.get(`/carts/user/${userId}`)
    } catch (error) {
        console.log(error)
    }
}