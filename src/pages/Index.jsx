import { Box, Container, Flex, Grid, GridItem, Heading, IconButton, Image, Link, Text, VStack } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Header */}
      <Box bg="black" color="white" py={4}>
        <Flex justify="space-between" align="center" px={4}>
          <Heading as="h1" size="lg">
            Manchester United Collectibles
          </Heading>
          <Flex>
            <IconButton aria-label="Facebook" icon={<FaFacebook />} size="lg" variant="ghost" color="white" />
            <IconButton aria-label="Twitter" icon={<FaTwitter />} size="lg" variant="ghost" color="white" />
            <IconButton aria-label="Instagram" icon={<FaInstagram />} size="lg" variant="ghost" color="white" />
            <IconButton aria-label="YouTube" icon={<FaYoutube />} size="lg" variant="ghost" color="white" />
          </Flex>
        </Flex>
      </Box>

      {/* Hero Section */}
      <Box position="relative">
        <Image src="https://images.unsplash.com/photo-1550945160-35ad09cb2186?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtYW5jaGVzdGVyJTIwdW5pdGVkJTIwc3RhZGl1bXxlbnwwfHx8fDE3MTcyNTM2ODB8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Manchester United Stadium" width="100%" />
        <Box position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" color="white" textAlign="center">
          <Heading as="h2" size="2xl" mb={4}>
            Welcome to Manchester United Collectibles
          </Heading>
          <Text fontSize="xl">Explore exclusive memorabilia and collectibles</Text>
        </Box>
      </Box>

      {/* Featured Items */}
      <Box py={10} px={4}>
        <Heading as="h3" size="lg" mb={6} textAlign="center">
          Featured Items
        </Heading>
        <Grid templateColumns="repeat(auto-fit, minmax(300px, 1fr))" gap={6}>
          <GridItem>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="https://images.unsplash.com/photo-1550945160-35ad09cb2186?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtYW5jaGVzdGVyJTIwdW5pdGVkJTIwamVyc2V5fGVufDB8fHx8MTcxNzI1MzY4MHww&ixlib=rb-4.0.3&q=80&w=1080" alt="Manchester United Jersey" />
              <Box p={6}>
                <Heading as="h4" size="md" mb={2}>
                  Manchester United Jersey
                </Heading>
                <Text mb={4}>Official 2023/24 Home Jersey</Text>
                <Link color="teal.500" href="#">
                  View Details
                </Link>
              </Box>
            </Box>
          </GridItem>
          <GridItem>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="https://images.unsplash.com/photo-1615293900442-acf184921db0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtYW5jaGVzdGVyJTIwdW5pdGVkJTIwYmFsbHxlbnwwfHx8fDE3MTcyNTM2ODB8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Manchester United Ball" />
              <Box p={6}>
                <Heading as="h4" size="md" mb={2}>
                  Signed Football
                </Heading>
                <Text mb={4}>Autographed by the 2023/24 Squad</Text>
                <Link color="teal.500" href="#">
                  View Details
                </Link>
              </Box>
            </Box>
          </GridItem>
          <GridItem>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="https://images.unsplash.com/photo-1550945160-35ad09cb2186?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtYW5jaGVzdGVyJTIwdW5pdGVkJTIwc2NhcmZ8ZW58MHx8fHwxNzE3MjUzNjgxfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Manchester United Scarf" />
              <Box p={6}>
                <Heading as="h4" size="md" mb={2}>
                  Manchester United Scarf
                </Heading>
                <Text mb={4}>Limited Edition Supporters Scarf</Text>
                <Link color="teal.500" href="#">
                  View Details
                </Link>
              </Box>
            </Box>
          </GridItem>
        </Grid>
      </Box>

      {/* Footer */}
      <Box bg="black" color="white" py={4} mt={10}>
        <Flex justify="space-between" align="center" px={4}>
          <Text>&copy; 2023 Manchester United Collectibles. All rights reserved.</Text>
          <Flex>
            <Link href="#" mx={2}>
              Privacy Policy
            </Link>
            <Link href="#" mx={2}>
              Terms of Service
            </Link>
            <Link href="#" mx={2}>
              Contact Us
            </Link>
          </Flex>
        </Flex>
      </Box>
    </Container>
  );
};

export default Index;
