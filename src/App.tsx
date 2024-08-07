import { MantineProvider } from '@mantine/core';
import MainPage from './components/MainPage';
import '@mantine/core/styles.css';

const App = () => {
  return (
    <MantineProvider forceColorScheme='dark'>
      <MainPage />
    </MantineProvider>
  );
};

export default App;
