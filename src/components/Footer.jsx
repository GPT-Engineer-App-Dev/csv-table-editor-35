import { Box, Text, Link, Flex } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box as="footer" py={4} bg="gray.800" color="white">
      <Flex direction="column" align="center" justify="center">
        <Text mb={2}>© 2023 Your Company. All rights reserved.</Text>
        <Flex>
          <Link href="#" mx={2} color="teal.200">
            Privacy Policy
          </Link>
          <Link href="#" mx={2} color="teal.200">
            Terms of Service
          </Link>
          <Link href="#" mx={2} color="teal.200">
            Contact Us
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;