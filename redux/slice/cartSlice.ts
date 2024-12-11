import { getUserCart } from '@/api/cart';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { selectProduct } from './productSlice';
import { RootState } from '../store';

interface Product {
    id: number,
    title: string,
    price: string,
    category: string,
    description: string,
    image: string
    quantity: number
}

interface Cart {
    id: number,
    userId: number,
    date: string,
    products: Product[]
}

interface CartState {
    cart: Cart | null;
    loading: boolean
    error: string | null;
}

const initialState: CartState = {
    cart: null,
    loading: true,
    error: null
}

const fetchCartWithProducts = createAsyncThunk(
    'cart/fetchCartWithProduct',
    async (userId: number, { getState }) => {
        const state = getState() as RootState;
        const productsState = selectProduct(state);

        const response = await getUserCart(userId)
        const products = response?.data?.products?.map(({ productId, quantity }: { productId: number, quantity: number }) => {
            const productDetail = productsState.find((product) => { product.id === productId })
            console.log("dari state find", productDetail)
            return {
                ...productDetail,
                quantity
            }
        })
        console.log("data dari Productstate 1", products)
        return {
            ...response?.data,
            products
        }
    }
)

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchCartWithProducts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchCartWithProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.cart = action.payload;
            })
            .addCase(fetchCartWithProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch cart data';
            });
    },
})

export { fetchCartWithProducts }
export default cartSlice.reducer