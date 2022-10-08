import React, { useEffect, useState } from 'react';
import { Box } from '../../utils/Box';
import { fetchTabs } from '../../functions/fetchTabs';
import { Tab } from '../../functions/fetchTabs';
import * as S from './App.styled';
import Tabs from '../Tabs/Tabs';

const URL = 'https://course-api.com/react-tabs-project';

function App() {
  const [tabs, setTabs] = useState([] as Tab[]);
  const [loading, setLoading] = useState(true);
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  // Sets the current tab index, so that additional information
  // for selected tab could be displayed. Initially the first one is selected.
  const handleTabClick = (id: string) => {
    tabs.filter((t, index) => {
      if (t.id === id) {
        setCurrentTabIndex(index);
        return null;
      }
    });
  };

  useEffect(() => {
    fetchTabs(URL)
      .then((res) => {
        setTabs(res as Tab[]);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
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
    <S.App>
      <Box as='section'>
        <Tabs
          tabs={tabs}
          currentTabIndex={currentTabIndex}
          handleTabClick={handleTabClick}
        />
      </Box>
    </S.App>
  );
}

export default App;
