import { ChakraProvider } from '@chakra-ui/react';
import Layout from '@containers/Layout';

const App = ({ Component, pageProps }) => (
  <ChakraProvider resetCSS>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </ChakraProvider>
);

export default App;
