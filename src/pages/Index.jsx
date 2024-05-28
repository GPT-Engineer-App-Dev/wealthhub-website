import { Box, Container, Flex, Heading, HStack, Image, Link, Stack, Text, VStack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const articles = [
  {
    title: "Breaking News: Market Hits Record Highs",
    description: "The stock market reached new heights today as investors reacted positively to the latest economic data.",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    title: "Tech Giants Release Quarterly Earnings",
    description: "Major tech companies have released their quarterly earnings reports, showing significant growth.",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    title: "Global Politics: New Trade Agreements",
    description: "Countries around the world are entering new trade agreements to boost economic growth.",
    imageUrl: "https://via.placeholder.com/150",
  },
];

const trendingArticles = [
  "Editor's Pick: The Future of Technology",
  "Trending: Renewable Energy Sources",
  "Opinion: The Impact of Globalization",
];

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Flex as="nav" bg="gray.800" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading as="h1" size="lg">
          Financial Times
        </Heading>
        <HStack spacing={4}>
          <Link as={RouterLink} to="/">Home</Link>
          <Link as={RouterLink} to="/world">World</Link>
          <Link as={RouterLink} to="/business">Business</Link>
          <Link as={RouterLink} to="/markets">Markets</Link>
          <Link as={RouterLink} to="/opinion">Opinion</Link>
          <Link as={RouterLink} to="/tech">Tech</Link>
        </HStack>
      </Flex>

      <Flex mt={8} direction={{ base: "column", md: "row" }} spacing={8}>
        <Box flex="3">
          <Heading as="h2" size="xl" mb={4}>Latest News</Heading>
          <VStack spacing={8}>
            {articles.map((article, index) => (
              <Box key={index} borderWidth="1px" borderRadius="lg" overflow="hidden">
                <Image src={article.imageUrl} alt={article.title} />
                <Box p={4}>
                  <Heading as="h3" size="md">{article.title}</Heading>
                  <Text mt={2}>{article.description}</Text>
                </Box>
              </Box>
            ))}
          </VStack>
        </Box>

        <Box flex="1" ml={{ md: 8 }} mt={{ base: 8, md: 0 }}>
          <Heading as="h2" size="lg" mb={4}>Trending</Heading>
          <VStack spacing={4} align="start">
            {trendingArticles.map((title, index) => (
              <Text key={index}>{title}</Text>
            ))}
          </VStack>
        </Box>
      </Flex>

      <Box as="footer" bg="gray.800" color="white" p={4} mt={8}>
        <Flex justifyContent="space-between" alignItems="center">
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