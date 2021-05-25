import { Avatar, Flex, Box, Text } from '@chakra-ui/react'

interface ProfileProps {
  showProfileData: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      { showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Eldon Costa</Text>
          <Text color="gray.300" fontSize="smal">
            eldoncosta1@gmail.com
        </Text>
        </Box>
      )}
      <Avatar size="md" name="Eldon Costa" src="https://github.com/eldoncosta1.png" />
    </Flex>
  )
}