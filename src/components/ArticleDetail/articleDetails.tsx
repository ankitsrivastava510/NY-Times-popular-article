import React, { useState } from 'react';
import useFetch from '../../hooks/usefetch';
import { articleDetails } from '../../constants/api.config';
import { Box, HStack, IconButton, Image, LinkBox, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

const ArticleDetail: React.FC = () => {
  const { data: articles, loading, error } = useFetch(articleDetails);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5;
  console.log(articles)
  const totalPages = Math.ceil(articles?.results?.length / postsPerPage);
  const handlePreviousPage = () => {
      setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
      setCurrentPage(currentPage + 1);
  };
  const currentPosts = articles?.results?.slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error!</div>;

  return (
    <div>
       <HStack spacing={4} align="stretch" margin={'20px'}>
                {currentPosts.map((article: { media: { "media-metadata": { url: string }[], }[], id: string, title: string }) => (
                    <div key={article.id}>
                        <LinkBox as='article' maxW='sm' p='5' borderWidth='1px' rounded='md'>
                            <Image src={article?.media[0]["media-metadata"][0]?.url} alt={'image'} boxSize='200px' w={'100%'}
                                objectFit='cover' />
                            <Box display='flex' alignItems='baseline' marginTop={'10px'}>
                                <Link key={article.id} to={`/article/${article.id}`}>
                                    <h2>{article.title}</h2>
                                </Link>
                            </Box>
                        </LinkBox>

                    </div>
                ))}
            </HStack>
            <HStack>
                <IconButton
                    aria-label="Previous page"
                    icon={<ChevronLeftIcon />}
                    isDisabled={currentPage === 1}
                    onClick={handlePreviousPage}
                />
                <Text>{currentPage}</Text>
                <IconButton
                    aria-label="Next page"
                    icon={<ChevronRightIcon />}
                    isDisabled={currentPage === totalPages}
                    onClick={handleNextPage}
                />
            </HStack>
    </div>
  );
}

export default ArticleDetail;
