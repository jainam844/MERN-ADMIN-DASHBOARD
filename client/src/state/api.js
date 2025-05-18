import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
    reducerPath: "adminApi",
    tagTypes: ["User", "Products", "Customers", "Transactions", "Geography"],
    endpoints: (builder) => ({
        getUser: builder.query({
            query: (id) => `general/user/${id}`,
            providesTags: ["User"],
        }),
        getProducts: builder.query({
            query: () => "client/products",
            providesTags: ["Products"],
        }),
        getCustomers: builder.query({
            query: () => "client/customers",
            providesTags: ["Customers"],
        }),
        getTransactions: builder.query({
            query: () => "client/transactions",
            providesTags: ["Transactions"],
        }),
        getGeography: builder.query({
            query: () => "client/geography",
            providesTags: ["Geography"],
        }),
    }),
})
export const {
    useGetUserQuery,
    useGetProductsQuery,
    useGetCustomersQuery,
    useGetTransactionsQuery,
    useGetGeographyQuery,
    useGetSalesQuery,
    useGetAdminsQuery,
    useGetUserPerformanceQuery,
    useGetDashboardQuery,
} = api;