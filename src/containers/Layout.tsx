import { Box } from "@chakra-ui/react";
import Header from "@components/Header";
import { ReactElement } from "react";

const Layout = ({ children }: { children: ReactElement }) => {
  return (
    <Box>
      <Header />
      {children}
    </Box>
  );
};

export default Layout;
