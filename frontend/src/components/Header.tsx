import { Flex, Heading } from '@chakra-ui/react';
import ConnectMetamask from './ConnectMetamask';

export default function Header() {
  return (
    <Flex
      direction="row"
      justifyContent="space-between"
      align="center"
      px={8}
      py={8}
    >
      <Heading as="h1" style={{ marginLeft: 400 }}>
        Basic Dutch Auction
      </Heading>
      <ConnectMetamask />
    </Flex>
  );
}
