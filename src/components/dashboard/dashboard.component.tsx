import { Box, Typography, Card, CardContent } from "@mui/material";
import { useGetApiProducts } from "../../services/products/products";
import { useGetUserProfile } from "../../services/user/user";
import "./dashboard.component.css";

const DashboardComponent = () => {
  // Отримання продуктів
  const { data: products, isLoading: isProductsLoading } = useGetApiProducts();

  // Отримання профілю користувача
  const { data: userProfile, isLoading: isUserLoading } = useGetUserProfile();

  // Показати Loading, якщо дані ще завантажуються
  if (isProductsLoading || isUserLoading) return <p>Loading...</p>;

  // Логування отриманих даних
  console.log("User Profile:", userProfile);
  console.log("Products:", products);

  return (
    <Box className="tableContainer">
      <Typography variant="h4">E-commerce Dashboard</Typography>

      <Card>
        <CardContent>
          <Typography variant="h6">User Profile</Typography>
          <p>
            {userProfile?._id} - {userProfile?.email}
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <Typography variant="h6">Top Selling Products</Typography>
          {products?.map((product) => (
            <p key={product.id}>
              {product.title} - {product.purchasesQuantity} sales
            </p>
          ))}
        </CardContent>
      </Card>
    </Box>
  );
};

export default DashboardComponent;
