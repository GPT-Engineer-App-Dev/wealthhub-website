import { Box, Container, Flex, Heading, Image, Link, Text, VStack, HStack, Divider } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const articles = [
  {
    title: "Global Market Rally Continues",
    description: "Stocks around the world are seeing gains as economic optimism rises.",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "Tech Giants Release Earnings",
    description: "Major technology companies have released their quarterly earnings reports.",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "New Policies in the EU",
    description: "The European Union has introduced new policies to tackle climate change.",
    image: "https://via.placeholder.com/150",
  },
];

const trendingArticles = [
  "Market Analysis: What to Expect This Week",
  "Interview with a Leading Economist",
  "The Future of Renewable Energy",
];

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Flex as="nav" bg="gray.100" p={4} mb={4} justifyContent="space-between" alignItems="center">
        <Image src="/images/financial-times-logo.png" alt="Financial Times Logo" boxSize="50px" />
        <HStack spacing={8}>
          <Link as={RouterLink} to="/">Home</Link>
          <Link as={RouterLink} to="/world">World</Link>
          <Link as={RouterLink} to="/business">Business</Link>
          <Link as={RouterLink} to="/markets">Markets</Link>
          <Link as={RouterLink} to="/opinion">Opinion</Link>
          <Link as={RouterLink} to="/tech">Tech</Link>
        </HStack>
      </Flex>

      <Flex direction={{ base: "column", md: "row" }} spacing={4}>
        <Box flex="3" p={4}>
          <Heading as="h2" size="lg" mb={4}>Latest News</Heading>
          <VStack spacing={4} align="stretch">
            {articles.map((article, index) => (
              <Box key={index} borderWidth="1px" borderRadius="lg" overflow="hidden">
                <Image src={article.image} alt={article.title} />
                <Box p={4}>
                  <Heading as="h3" size="md" mb={2}>{article.title}</Heading>
                  <Text>{article.description}</Text>
                </Box>
              </Box>
            ))}
          </VStack>
        </Box>

        <Box flex="1" p={4} bg="gray.50" borderRadius="lg">
          <Heading as="h2" size="lg" mb={4}>Trending</Heading>
          <VStack spacing={4} align="stretch">
            {trendingArticles.map((title, index) => (
              <Text key={index}>{title}</Text>
            ))}
          </VStack>
        </Box>
      </Flex>

      <Divider my={8} />

      <Box as="footer" textAlign="center" p={4} bg="gray.100" borderRadius="lg">
        <HStack spacing={8} justifyContent="center">
          <Link as={RouterLink} to="/contact">Contact</Link>
          <Link as={RouterLink} to="/privacy">Privacy Policy</Link>
          <Link as={RouterLink} to="/terms">Terms of Service</Link>
        </HStack>
      </Box>
    </Container>
  );
};

export default Index;