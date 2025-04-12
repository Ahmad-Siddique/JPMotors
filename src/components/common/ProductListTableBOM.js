import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBomData } from "../../store/actions/bomActions";
import DataTable from "../common/DataTable";
// import ProductReferenceModal from "../modals/ProductReferenceModal";

const ProductTableBOM = () => {
  const dispatch = useDispatch();
    const products = useSelector((state) => state.bom.list);
    const gg = useSelector((state) => state);
    console.log("STATE",gg)
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    dispatch(fetchBomData());
  }, [dispatch]);

//   const handleLinkClick = (productCode) => {
//     setSelectedProduct(productCode);
//     setModalOpen(true);
//   };

  const handleModalClose = () => {
    setModalOpen(false);
    dispatch(fetchBomData()); // Reload product table on modal close
  };

  // Updated column headers
  const columns = [
    { id: "checkbox", label: "", type: "checkbox" },
    { id: "bomNo", label: "BOM No." },
    { id: "currentDate", label: "Current Date" },
    { id: "articleName", label: "Article Name" },
    { id: "quantity", label: "Quantity" },
    { id: "costPrice", label: "Cost Price" },
    { id: "notes", label: "Notes" },
    { id: "createdBy", label: "Created By" },
  ];

  return (
    <>
      <DataTable
        columns={columns}
        rows={products}
        // onLinkClick={handleLinkClick}
      />
      {/* <ProductReferenceModal
        open={modalOpen}
        onClose={handleModalClose}
        productCode={selectedProduct}
      /> */}
    </>
  );
};

export default ProductTableBOM;
