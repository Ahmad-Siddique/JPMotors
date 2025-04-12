import { FETCH_ASK_ABOUT_PRICE_SUCCESS } from "../types/actionTypes";

// Dummy JSON data for Ask About Price table
const dummyProducts = [
  {
    id: 1,
    number: "A-001", // Number
    date: "2025-04-10", // Date
    type: "Retail", // Type
    clientName: "John Doe", // Client Name
    telephone: "+1234567890", // Telephone
    model: "Corolla 2020", // Model
    vehicle: "Toyota", // Vehicle
    anne: "2020", // Anne
    proforma: "PF-1001", // Proforma
  },
  {
    id: 2,
    number: "A-002",
    date: "2025-04-09",
    type: "Wholesale",
    clientName: "Jane Smith",
    telephone: "+9876543210",
    model: "Civic 2019",
    vehicle: "Honda",
    anne: "2019",
    proforma: "PF-1002",
  },
  {
    id: 3,
    number: "A-003",
    date: "2025-04-08",
    type: "Retail",
    clientName: "Alex Johnson",
    telephone: "+1122334455",
    model: "Fortuner",
    vehicle: "Toyota",
    anne: "2021",
    proforma: "PF-1003",
  },
];

// Action Creator: Fetch Products (Ask About Price version)
export const fetchProducts = () => ({
  type: FETCH_ASK_ABOUT_PRICE_SUCCESS,
  payload: dummyProducts,
});
