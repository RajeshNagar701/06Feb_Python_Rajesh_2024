import { configureStore } from "@reduxjs/toolkit";

import cartSlicer from "../cart/cartSlicer";

export default configureStore({
    reducer: {
        cart:cartSlicer, // register slicer in reducer 
    },
  })











