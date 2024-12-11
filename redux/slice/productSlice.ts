import { getAllProduct } from "@/api/product";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface Product {
    id: number;
    title: string;
    price: string;
    category: string;
    description: string;
    image: string;
}

interface ProductState {
    data: Product[];
    category: string;
    isLoading: boolean;
    error: string | null
}


const initialState: ProductState = {
    data: [],
    category: '',
    isLoading: true,
    error: null
};

const fetchAllProduct = createAsyncThunk(
    'product/fetchAllProduct',
    async () => {
        const response = await getAllProduct()
        return response?.data
    }
)

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchAllProduct.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(fetchAllProduct.fulfilled, (state, action) => {
            state.isLoading = false
            state.data = action.payload
        })
        builder.addCase(fetchAllProduct.rejected, (state, action) => {
            state.isLoading = false
        })
    }
})

export const selectProduct = (state: RootState) => state.product.data

export { fetchAllProduct }
export default productSlice.reducer;