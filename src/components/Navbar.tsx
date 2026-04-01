import { Box, HStack, Link } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const NavItem = ({
  to,
  children,
}: {
  to: string;
  children: React.ReactNode;
}) => (
  <NavLink
    to={to}
    style={({ isActive }) => ({ fontWeight: isActive ? 600 : 400 })}
  >
    <Link px={2}>{children}</Link>
  </NavLink>
);

export default function Navbar() {
  return (
    <Box
      as="header"
      bg="gray.50"
      py={4}
      borderBottom="1px solid"
      borderColor="gray.200"
    >
      <HStack spacing={4} maxW="container.lg" mx="auto" px={4}>
        <NavItem to="/">Home</NavItem>
        <NavItem to="/projects">Projects</NavItem>
        <NavItem to="/contact">Contact</NavItem>
      </HStack>
    </Box>
  );
}
