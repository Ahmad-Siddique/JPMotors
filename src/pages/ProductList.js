import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setHeaderCard } from "../store/actions/headerCardActions";
import HeaderCard from "../components/common/HeaderCard";
import { Box } from "@mui/material";
import ActionButtons from "../components/common/ActionButtons";
import CheckoutButton from "../components/buttons/CheckoutButton";
import SearchCard from "../components/common/SearchCard";
import TableCardHeader from "../components/common/TableCardHeader"; // Import new component
import ProductListTable from "../components/common/ProductListTable"; // Import new component
import CartModal from "../components/modals/CartModal";

const ProductList = () => {
  const dispatch = useDispatch();
  const [cartOpen, setCartOpen] = useState(false);
  useEffect(() => {
    dispatch(setHeaderCard("Product List", "Find your desired products", ["Product List"]));
  }, [dispatch]);

  const cartItems = [
    { id: 1, productCode: "SB-T5215-KIT" },
    { id: 2, productCode: "SB-T5215" },
    { id: 3, productCode: "SB-T521548-KIT" },
    { id: 4, productCode: "SB-LPI85412-KIT" },
    { id: 5, productCode: "SB-T5215" },
    { id: 6, productCode: "SB-T521548-KIT" },
    { id: 7, productCode: "SB-LPI85412-KIT" },
    { id: 8, productCode: "SB-LPI85412-KIT" },
    { id: 9, productCode: "SB-LPI85412-KIT" },
    { id: 10, productCode: "SB-T5215" },
    { id: 11, productCode: "SB-T521548-KIT" },
    { id: 12, productCode: "SB-LPI85412-KIT" },
  ];

  return (
    <Box>
      <HeaderCard />

      {/* Action Buttons */}
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 24px" }}>
        <ActionButtons />
        <CheckoutButton onClick={() => setCartOpen(true)} />
      </Box>

      <SearchCard />

      <Box
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
          padding: "16px 24px",
          backgroundColor: "#fff",
          boxShadow: 1,
          borderRadius: 2,
          mb: 2, 
          marginTop: "16px",
        }}
      >
        <TableCardHeader title="Product List" description="Search your product in the list" />
        <ProductListTable />
      </Box>

      <Box
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
          padding: "16px 24px",
          backgroundColor: "#fff",
          boxShadow: 1,
          borderRadius: 2,
          mb: 2, 
          marginTop: "16px",
        }}
      >
        <TableCardHeader title="Product References" description="Search your product References in the list" />
        <ProductListTable />
      </Box>

      <CartModal open={cartOpen} onClose={() => setCartOpen(false)} cartItems={cartItems} />

    </Box>
  );
};

export default ProductList;
