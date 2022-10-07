import React, { useEffect, useState } from 'react';
import { Box } from './utils/Box';
import { GlobalStyle } from './global-styles/GlobalStyle';
import { fetchTabs } from './functions/fetchTabs';
import { ITab } from './functions/fetchTabs';
import Tabs from './components/Tabs';
const URL = 'https://course-api.com/react-tabs-project';

function App() {
  const [tabs, setTabs] = useState([] as ITab[]);
  const [loading, setLoading] = useState(true);
  const [jobIndex, setJobIndex] = useState(0);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchTabs(URL)
      .then((res) => {
        console.log(res);
        setTabs(res as ITab[]);
        setLoading(false);
      })
      .catch(setError);
  }, []);

  if (loading) {
    return (
      <Box
        display='flex'
        alignItems='center'
        justifyContent='center'
        height='100vh'
        fontSize='2.4rem'>
        Loading....
      </Box>
    );
  }

  return (
    <Box as='main'>
      <GlobalStyle />
      <Box as='section'>
        <Tabs tabsData={tabs} />
      </Box>
    </Box>
  );
}

export default App;
