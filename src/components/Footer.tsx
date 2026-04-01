import { Box, Container, Link, Stack, Text } from "@chakra-ui/react";

interface FooterProps {
  email: string;
  instagram: string;
  twitter: string;
}

export default function Footer({ email, instagram, twitter }: FooterProps) {
  return (
    <Box
      as="footer"
      bg="gray.50"
      py={6}
      borderTop="1px solid"
      borderColor="gray.200"
      mt="auto"
    >
      <Container maxW="container.lg">
        <Stack
          direction={["column", "row"]}
          justify="space-between"
          align="center"
        >
          <Text fontSize="sm">
            Contacto: <Link href={`mailto:${email}`}>{email}</Link>
          </Text>
          <Stack direction="row" spacing={4}>
            <Link href={instagram} isExternal>
              Instagram
            </Link>
            <Link href={twitter} isExternal>
              Twitter
            </Link>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
