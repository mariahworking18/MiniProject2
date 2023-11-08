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
    // export const shazamCoreApi = createApi ({
    //     reducePath: 'shazamCoreApi',
    //     baseQuery: fetchBaseQuery({
    //         baseUrl: 'https://musicdata-api.p.rapidapi.com',
    //         prepareHeaders:(headers) => {
    //             headers.set('X-RapidAPI-Key','1f0e54abfemsh32fc98376ddcbc2p157a93jsn247364c135a7')
    //             return headers;
    //         },
    //     }),
    //     endpoints: (builder) => ({ 
    //         getTopCharts: builder.query ({ query: () => '/spotify/topsongs/2018'}),
    //     })
    // });

    export const shazamCoreApi = createApi ({
            reducePath: 'shazamCoreApi',
            baseQuery: fetchBaseQuery({
                baseUrl: 'https://shazam.p.rapidapi.com',
                prepareHeaders:(headers) => {
                    headers.set('X-RapidAPI-Key','43f60b7267mshdbf9ab94d3f8297p1d1db2jsn9cf810cebc2e')
                    return headers;
                },
            }),
            endpoints: (builder) => ({ 
                getTopCharts: builder.query ({ query: () => '/charts/track/'}),
            })
        });


    export const {
        useGetTopChartsQuery,
    } = shazamCoreApi;