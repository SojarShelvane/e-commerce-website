import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getProducts, getProductsByFilter } from "./productAPI";

// First, create the thunk
export const fetchProducts = createAsyncThunk(
  "product/fetchProducts",
  async () => {
    const response = await getProducts();
    return response.data;
  }
);

// First, create the thunk
export const filterProducts = createAsyncThunk(
  "product/filterProducts",
  async (searchString) => {
    const response = await getProductsByFilter(searchString);
    return response.data;
  }
);

const initialState = {
  status: "idel",
  products: [],
  productDetails: null,
  error: null,
};

/* dispatchEvent(getProductsDetails(5)); */
export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getProductsDetails: (state, action) => {
      console.log("insde dtl fun,", state.products);
      let dtl = state.products.filter((prod) => prod.id === action.payload);
      if (dtl.length) {
        state.productDetails = dtl[0];
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.status = "successed";
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.error = action.payload;
        state.status = "failed";
      });

    builder
      .addCase(filterProducts.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(filterProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.status = "successed";
      })
      .addCase(filterProducts.rejected, (state, action) => {
        state.error = action.payload;
        state.status = "failed";
      });
  },
});

// Action creators are generated for each case reducer function
export const { getProductsDetails } = productSlice.actions;

export default productSlice.reducer;
