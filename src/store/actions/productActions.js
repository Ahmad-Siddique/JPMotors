import { FETCH_PRODUCTS_SUCCESS } from "../types/actionTypes";

// Dummy JSON data
const dummyProducts = [
  {
    id: 1,
    manufacturer: "ABART",
    productCode: "FORCEIONE BATTERIE",
    designation: "BATTERIE",
    model: "OSAKA",
    emplacement: "//",
    qty: "01",
    lub: 0,
    kuz: 0,
    usdPrice: 38.56,
    fcPrice: 229736.65,
    onOrder: 0,
    wsQte: 0,
    wsPrice: 39.25,
    fcWsPrice: 1187545.25,
    segment: "ACCESSORIES",
    avatar: "https://i.pravatar.cc/40",
  },
  {
    id: 2,
    manufacturer: "ABART",
    productCode: "FORCEIONE BATTERIE",
    designation: "BATTERIE",
    model: "OSAKA",
    emplacement: "//",
    qty: "01",
    lub: 0,
    kuz: 0,
    usdPrice: 38.56,
    fcPrice: 229736.65,
    onOrder: 0,
    wsQte: 0,
    wsPrice: 39.25,
    fcWsPrice: 1187545.25,
    segment: "ACCESSORIES",
    avatar: "https://i.pravatar.cc/40?img=2",
  },
  {
    id: 3,
    manufacturer: "ABART",
    productCode: "FORCEIONE BATTERIE",
    designation: "BATTERIE",
    model: "OSAKA",
    emplacement: "//",
    qty: "01",
    lub: 0,
    kuz: 0,
    usdPrice: 38.56,
    fcPrice: 229736.65,
    onOrder: 0,
    wsQte: 0,
    wsPrice: 39.25,
    fcWsPrice: 1187545.25,
    segment: "ACCESSORIES",
    avatar: "https://i.pravatar.cc/40?img=2",
  },
  
];

// Action Creator: Fetch Products
export const fetchProducts = () => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: dummyProducts,
});
