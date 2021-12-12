import { ChakraProvider } from "@chakra-ui/react";
import Layout from "@containers/Layout";

function App({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default App;
