import React from 'react';
import { Box, Card, CardContent, CardMedia } from '@mui/material';

interface ProductInfoCardProps {
  item: any;
  cardSize: number;
}

function ProductInfoCard({ item, cardSize }: ProductInfoCardProps) {
  return (
    <Card sx={{ display: 'flex', height: cardSize }}>
      <CardMedia
        image="https://mui.com/static/images/cards/live-from-space.jpg"
        component="img"
        sx={{ width: cardSize }}
      />
      <CardContent sx={{ display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ fontWeight: '600' }} fontSize="medium">
          {item.title}
        </Box>
        <Box fontSize="small">{item.originPrice}</Box>
        <Box fontSize="small">{item.totalPrice}</Box>
        <Box fontSize="small">{item.discountRate}</Box>
        <Box fontSize="small">{item.salesCount}</Box>
      </CardContent>
    </Card>
  );
}

export default ProductInfoCard;
