// src/Redux/features/food.api.ts

import { baseApi } from '../baseApi'

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addFood: builder.mutation({
      query: (foodInfo) => ({
        url: '/restaurant/add-food',
        method: 'POST',
        data: foodInfo,
      }),
    }),    
  }),
})

export const {
  useAddFoodMutation,
} = authApi
