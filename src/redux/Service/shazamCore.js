import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

    export const shazamCoreApi = createApi ({
        reducePath: 'shazamCoreApi',
        baseQuery: fetchBaseQuery({
            baseUrl: 'https://billboard2.p.rapidapi.com',
            prepareHeaders:(headers) => {
                headers.set('X-RapidAPI-Key','1f0e54abfemsh32fc98376ddcbc2p157a93jsn247364c135a7')
                return headers;
            },
        }),
        endpoints: (builder) => ({ 
            getTopCharts: builder.query ({ query: () => '/hot_100?date=2020-03-18'}),
        })
    });
    export const {
        useGetTopChartsQuery,
    } = shazamCoreApi;