import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
    // billboard
    // export const shazamCoreApi = createApi ({
    //     reducePath: 'shazamCoreApi',
    //     baseQuery: fetchBaseQuery({
    //         baseUrl: 'https://billboard-api5.p.rapidapi.com',
    //         prepareHeaders:(headers) => {
    //             headers.set('X-RapidAPI-Key','1f0e54abfemsh32fc98376ddcbc2p157a93jsn247364c135a7')
    //             return headers;
    //         },
    //     }),
    //     endpoints: (builder) => ({ 
    //         getTopCharts: builder.query ({ query: () => '/api/charts/hot-100?week=2022-10-08'}),
    //     })
    // });

    //spotify
    export const shazamCoreApi = createApi ({
        reducePath: 'shazamCoreApi',
        baseQuery: fetchBaseQuery({
            baseUrl: 'https://musicdata-api.p.rapidapi.com',
            prepareHeaders:(headers) => {
                headers.set('X-RapidAPI-Key','1f0e54abfemsh32fc98376ddcbc2p157a93jsn247364c135a7')
                return headers;
            },
        }),
        endpoints: (builder) => ({ 
            getTopCharts: builder.query ({ query: () => '/spotify/topsongs/2018'}),
        })
    });
    export const {
        useGetTopChartsQuery,
    } = shazamCoreApi;