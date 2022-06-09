import React from 'react';
import { ApolloClient, ApolloProvider, useQuery, gql, InMemoryCache, useMutation } from '@apollo/client';

const client = new ApolloClient({
    uri: 'https://api-ap-northeast-1.graphcms.com/v2/cl46pkrs229wm01z326bo0104/master',
    cache: new InMemoryCache()
});

const Apollo = () => {
    return (
        <ApolloProvider client={client}>
            <div className="App">
                <h1>Hello</h1>
                <h2>GraphQL</h2>
                <VocabList/>
            </div>
        </ApolloProvider>
    );
};


const VocabList = () => {
    const vocabs = gql`
        query VocabsQuery {
            vocabs {
                meaning
                vocab
                id
            }
        }
`

const { loading, error, data } = useQuery(vocabs);
console.log(data);
if(loading) return <p>Loading</p>;
if(error) return <p>Error</p>;
return (
    <div>
        <h3>รายการคำศัพท์</h3>
        <div>
            {
                data && data.vocabs.map((item)=>{
                    return <p key={item.id}>
                        {item.vocab} = {item.meaning}
                    </p>
                })
            }
        </div>
    </div>
    )
}

export default Apollo;