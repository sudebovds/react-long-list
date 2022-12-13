import React, { useEffect, useState } from 'react';
import { FixedSizeList as List } from 'react-window';
import { IDataInterface } from './types';
import fetchData from './api';
import Header from './components/Header/Header';
import ContentItem from './components/ContentItem/ContentItem';
import Main from './components/Main/Main';

function App() {
  const [data, setData] = useState<IDataInterface[] | null>(null);

  useEffect(() => {
    fetchData()
      .then((fetchedData) => setData(fetchedData))
      .catch((error) => new Error('This is the error: ', error));

    return () => setData(null);
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <Main>
        {data ? (
          <List
            className="List"
            height={850}
            itemCount={data.length}
            itemSize={450}
            width={850}
          >
            {({ index, style }) => {
              const optimData = data[index];

              return (
                <ContentItem
                  optimData={optimData}
                  style={style}
                  index={index}
                  setChangedData={setData}
                  wholeData={data}
                />
              );
            }}
          </List>
        ) : null}
      </Main>
    </div>
  );
}

export default App;
