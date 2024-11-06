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

  const getSkeletonByType = (type: Type) => {
    switch (type) {
      case 'card':
        return createEmptyArray(5).map((_, index) => (
          <Skeleton key={index} variant="rounded" height={skeletonSize} />
        ));
      case 'prompt':
        return createEmptyArray(3).map((_, index) => (
          <Skeleton key={index} variant="rounded" height={skeletonSize} />
        ));
      case 'script':
        return <Skeleton variant="rounded" height={skeletonSize} />;
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
