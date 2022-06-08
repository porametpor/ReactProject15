import React, { useState } from 'react';
import { ApolloClient, ApolloProvider, useQuery, gql, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
    uri: 'https://api-ap-northeast-1.graphcms.com/v2/cktefu37f2up601z78q95htoq/master',
    cache: new InMemoryCache()
});

const Apollo = () => {
    const [text, setText] = useState('');
    return (
        <ApolloProvider client={client}>
            <div className="App">
                <h1>Hello CodeSandbox</h1>
                <h2>ตัวอย่างโปรแกรม React เรียกใช้งาน GraphQL</h2>
                <SearchText text={text} setText={setText} />
                <VocabList text={text}/>
            </div>
        </ApolloProvider>
    );
};

const SearchText = ({ text = "", setText }) => {
    return (
      <div>
        <input
          type="text"
          placeholder="ค้นหาศัพท์"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
    );
  };

const VocabList = ({text}) => {
    const vocabs = gql`
        query VocabsQuery {
            vocabs(where: {contains: "${text}"}) {
                id
                vocab
                meaning
            }
        }
    `
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