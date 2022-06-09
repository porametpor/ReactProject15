import React from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache, useQuery, gql, NetworkStatus, useMutation } from "@apollo/client";

const client = new ApolloClient({
    uri: 'https://48p1r2roz4.sse.codesandbox.io',
    cache: new InMemoryCache()
})

const incrementCounter = gql`
    mutation IncrementCounter {
        currentValue
    }
`

const Apollo2 = () => {
    return (
        <ApolloProvider client={client}>
            <h1>show query with graphql</h1>
            <ExchangeRates />
        </ApolloProvider>
    );
};

const ExchangeRates = () => {
    const {loading, error, data, refetch, networkStatus} = useQuery(
        queryData,
        {
            notifyOnNetworkStatusChange: true
        }
        // {
        //     pollInterval: 100,
        // }
    )
    if(loading) return <p>Loading...</p>
    if(networkStatus === NetworkStatus.refetch) return <p>Referching...</p>
    if(error) return <p>{error.message}</p>
    return (
        <>
            <button onClick={()=>refetch()}>refresh</button>
            {
                data.rates.map((item, id)=>{
                    return (
                        <p key={id}>{item.currency} = {item.rate}</p>
                    );
                })
            }
        </>
    );
};

export default Apollo2;


const queryData = gql`
    {
        rates(currency: "USD") {
            currency,
            rate
        }  
    }
`