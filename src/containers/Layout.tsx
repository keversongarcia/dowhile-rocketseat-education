import { Box } from '@chakra-ui/react';
import Header from '@components/Header';

const Layout = ({ children }) => {
  return (
    <Box>
      <Header />
      {children}
    </Box>
  );
};

export default Layout;
