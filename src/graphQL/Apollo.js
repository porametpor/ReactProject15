import React from 'react';
import { ApolloClient, ApolloProvider, useQuery, gql, InMemoryCache, useMutation } from '@apollo/client';

const client = new ApolloClient({
    uri: 'https://api-ap-northeast-1.graphcms.com/v2/cl46pkrs229wm01z326bo0104/master',
    cache: new InMemoryCache()
});

const vocabs = gql`
        query VocabsQuery {
            vocabs {
                meaning
                vocab
                id
            }
        }
    `

const createVocab = gql`
    mutation MyMutation {
        createVocab(data: {vocab: "kick", meaning: "get out"}) {
            id
        }
    }
`

const Apollo = () => {
    return (
        <ApolloProvider client={client}>
            <div className="App">
                <h1>Hello</h1>
                <h2>GraphQL</h2>
                <MutationCreate />
                <VocabList/>
            </div>
        </ApolloProvider>
    );
};

const MutationCreate = () => {
    const [caeateVocab] = useMutation(createVocab)
    return (
        <form onSubmit={e=>{
            e.preventDefault();
            caeateVocab();
        }}>
            <button type='submit'>update</button>
        </form>
    );
}

const VocabList = () => {
    const { loading, error, data } = useQuery(vocabs);
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