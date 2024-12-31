import { createSlice } from '@reduxjs/toolkit'
import Swal from'sweetalert2'

const initialState = {
    cartItems: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const existingItem = state.cartItems.find(item => item._id === action.payload._id);
            if (!existingItem) {
                state.cartItems.push(action.payload);
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Product Added to Cart",
                    showConfirmButton: false,
                    timer: 1500
                  });
            } else (
                Swal.fire({
                    title: "Already added to Cart!",
                    icon: "warning",
                    confirmButtonColor: "#3085d6",
                    confirmButtonText: "Ok!"
                })
            )
        }
    }
})

// export the actions
export const { addToCart } = cartSlice.actions;

// export the reducer
export default cartSlice.reducer;