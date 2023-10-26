import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

    export const shazamCoreApi = createApi ({
        reducePath: 'shazamCoreApi',
        baseQuery: fetchBaseQuery({
            baseUrl: 'https://billboard-api2.p.rapidapi.com',
            prepareHeaders:(headers) => {
                headers.set('X-RapidAPI-Key','43f60b7267mshdbf9ab94d3f8297p1d1db2jsn9cf810cebc2e')
                return headers;
            },
        }),
        endpoints: (builder) => ({ 
            getTopCharts: builder.query ({ query: () => '/hot-trending-songs-powered-by-twitter?date=2021-11-06&range=1-10'}),
        })
    });
    export const {
        useGetTopChartsQuery,
    } = shazamCoreApi;