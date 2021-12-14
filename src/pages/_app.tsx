import { ChakraProvider } from "@chakra-ui/react";
import Layout from "@containers/Layout";
import { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => (
  <ChakraProvider resetCSS>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </ChakraProvider>
);

export default App;
