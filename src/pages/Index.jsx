import { Box, Container, Flex, Heading, HStack, Image, Link, Stack, Text, VStack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const articles = [
  {
    title: "Global Market Rally Continues",
    description: "Stocks around the world are on the rise as investors remain optimistic.",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "Tech Giants Release Earnings",
    description: "Major tech companies have released their quarterly earnings reports.",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "New Policies in the Business World",
    description: "Businesses are adapting to new policies introduced by governments.",
    image: "https://via.placeholder.com/150",
  },
];

const trendingArticles = [
  "Market Trends to Watch",
  "Top Tech Innovations",
  "Economic Policies Impact",
  "Global Trade Agreements",
];

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Flex as="nav" bg="gray.800" color="white" p={4} justifyContent="space-between">
        <HStack spacing={8}>
          <Link as={RouterLink} to="/" fontWeight="bold" fontSize="xl">
            Financial Times
          </Link>
          <HStack spacing={4}>
            <Link as={RouterLink} to="/">Home</Link>
            <Link as={RouterLink} to="/world">World</Link>
            <Link as={RouterLink} to="/business">Business</Link>
            <Link as={RouterLink} to="/markets">Markets</Link>
            <Link as={RouterLink} to="/opinion">Opinion</Link>
            <Link as={RouterLink} to="/tech">Tech</Link>
          </HStack>
        </HStack>
      </Flex>

      <Flex mt={8} direction={{ base: "column", md: "row" }} spacing={8}>
        <Box flex="3">
          <Heading as="h2" size="lg" mb={4}>Latest News</Heading>
          <VStack spacing={8}>
            {articles.map((article, index) => (
              <Box key={index} p={4} borderWidth="1px" borderRadius="md" overflow="hidden">
                <Image src={article.image} alt={article.title} mb={4} />
                <Heading as="h3" size="md" mb={2}>{article.title}</Heading>
                <Text>{article.description}</Text>
              </Box>
            ))}
          </VStack>
        </Box>

        <Box flex="1" ml={{ md: 8 }} mt={{ base: 8, md: 0 }}>
          <Heading as="h2" size="lg" mb={4}>Trending</Heading>
          <VStack spacing={4}>
            {trendingArticles.map((title, index) => (
              <Text key={index}>{title}</Text>
            ))}
          </VStack>
        </Box>
      </Flex>

      <Box as="footer" bg="gray.800" color="white" p={4} mt={8}>
        <Flex justifyContent="space-between">
          <Text>&copy; 2023 Financial Times</Text>
          <HStack spacing={4}>
            <Link as={RouterLink} to="/contact">Contact</Link>
            <Link as={RouterLink} to="/privacy">Privacy Policy</Link>
            <Link as={RouterLink} to="/terms">Terms of Service</Link>
          </HStack>
        </Flex>
      </Box>
    </Container>
  );
};

export default Index;