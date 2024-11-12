import React from 'react';
import { Box, Skeleton } from '@mui/material';
import ContentTitle from './ui/ContentTitle';
import ContentContainer from './ui/ContentContainer';
import { useTypingAnimation } from 'hooks/useTypingAnimation';
import { createEmptyArray } from 'utils/createEmptyArray';

type Type = 'card' | 'script' | 'prompt';

interface ContentLoaderProps {
  title: string;
  type: Type;
  skeletonSize: number;
}

function ContentLoader({ title, type, skeletonSize }: ContentLoaderProps) {
  const { typingText } = useTypingAnimation({
    text: title,
    delay: 100,
  });

  const generateSkeleton = (length: number) =>
    createEmptyArray(length).map((_, index) => (
      <Skeleton key={index} variant="rounded" height={skeletonSize} />
    ));

  const getSkeletonByType = (type: Type) => {
    switch (type) {
      case 'card':
        return generateSkeleton(5);
      case 'prompt':
        return generateSkeleton(3);
      case 'script':
        return generateSkeleton(1);
      default:
        return;
    }
  };

  return (
    <Box>
      <ContentTitle title={typingText} />
      <ContentContainer>{getSkeletonByType(type)}</ContentContainer>
    </Box>
  );
}

export default ContentLoader;
