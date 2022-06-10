import {
    createApi,
    fetchBaseQuery
} from '@reduxjs/toolkit/query/react';

export const authService = createApi({
    reducerPath: 'authService',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://pokeapi.co/api/v2/'
    }),
    tagTypes: ['Auth'],
    endpoints: (builder) => ({
        getPokemonByName: builder.query<any, string>({
            query: (name) => `pokemon/${name}`
        }) 
    })
})

export const {
    useGetPokemonByNameQuery
} = authService