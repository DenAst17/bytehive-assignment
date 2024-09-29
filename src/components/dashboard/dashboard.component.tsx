import { Box, Typography, Card, CardContent } from '@mui/material';
import { useGetApiProducts  } from '../../services/products/products';

const DashboardComponent = () => {
  const { data: products, isLoading } = useGetApiProducts();

  if (isLoading) return <p>Loading...</p>;

  return (
    <Box>
      <Typography variant="h4">E-commerce Dashboard</Typography>
      <Card>
        <CardContent>
          <Typography variant="h6">Top Selling Products</Typography>
          {products?.map((product) => (
            <p key={product.id}>{product.title} - {product.purchasesQuantity} sales</p>
          ))}
        </CardContent>
      </Card>
    </Box>
  );
};

export default DashboardComponent;
