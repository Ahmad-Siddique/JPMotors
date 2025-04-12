import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/actions/askaboutPriceActions";
import DataTable from "../common/DataTable";
import ProductReferenceModal from "../modals/ProductReferenceModal";

const ProductTableListAskProductPrice = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.askproductprice.list);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleLinkClick = (value) => {
    setSelectedProduct(value);
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
    dispatch(fetchProducts()); // Reload product table on modal close
  };

  const columns = [
    { id: "checkbox", label: "", type: "checkbox" }, // 1. Select
    { id: "number", label: "Number" }, // 2. Number
    { id: "date", label: "Date", type: "date" }, // 3. Date
    { id: "type", label: "Type" }, // 4. Type
    { id: "clientName", label: "Client Name" }, // 5. Client Name
    { id: "telephone", label: "Telephone" }, // 6. Telephone
    { id: "model", label: "Model" }, // 7. Model
    { id: "vehicle", label: "Vehicle" }, // 8. Vehicle
    { id: "anne", label: "Anne" }, // 9. Anne
    { id: "proforma", label: "Proforma", type: "link", color: "primary" }, // 10. Proforma
  ];

  return (
    <>
      <DataTable
        columns={columns}
        rows={products}
        onLinkClick={handleLinkClick} // handles clicks on the Proforma link
      />
      <ProductReferenceModal
        open={modalOpen}
        onClose={handleModalClose}
        productCode={selectedProduct}
      />
    </>
  );
};

export default ProductTableListAskProductPrice;
