import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/actions/productActions";
import DataTable from "../common/DataTable";
import ProductReferenceModal from "../modals/ProductReferenceModal";

const ProductTable = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.list);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleLinkClick = (productCode) => {
    setSelectedProduct(productCode);
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
    dispatch(fetchProducts()); // Reload product table on modal close
  };

  // Define column headers
  const columns = [
    { id: "checkbox", label: "", type: "checkbox" },
    { id: "manufacturer", label: "Manufacturer" },
    { id: "productCode", label: "Product Code", type: "link", color: "primary" },
    { id: "designation", label: "Designation" },
    { id: "model", label: "Model" },
    { id: "emplacement", label: "Emplacement" },
    { id: "qty", label: "Qty." },
    { id: "lub", label: "Lub" },
    { id: "kuz", label: "KUZ" },
    { id: "usdPrice", label: "USD Price" },
    { id: "fcPrice", label: "FC Price" },
    { id: "onOrder", label: "On Order" },
    { id: "wsQte", label: "Ws Qte" },
    { id: "wsPrice", label: "Ws Price" },
    { id: "fcWsPrice", label: "FC Ws Price" },
    { id: "segment", label: "Segment" },
  ];

  return (
    <>
      <DataTable columns={columns} rows={products} onLinkClick={handleLinkClick} />
      <ProductReferenceModal
        open={modalOpen}
        onClose={handleModalClose}
        productCode={selectedProduct}
      />
    </>
  );
};

export default ProductTable;
