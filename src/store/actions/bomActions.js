import { FETCH_BOM_SUCCESS } from "../types/actionTypes";

// BOM Dummy JSON data
const dummyBomData = [
  {
    id: 1,
    bomNo: "BOM001",
    currentDate: "Thursday, April 10, 2025, 09:34 PM PKT",
    articleName: "Battery Pack",
    quantity: 10,
    costPrice: 150.75,
    notes: "High capacity battery pack",
    createdBy: "John Doe",
    avatar: "https://i.pravatar.cc/40",
  },
  {
    id: 2,
    bomNo: "BOM002",
    currentDate: "Thursday, April 10, 2025, 09:34 PM PKT",
    articleName: "Solar Panel",
    quantity: 5,
    costPrice: 300.5,
    notes: "High efficiency solar panel",
    createdBy: "Jane Smith",
    avatar: "https://i.pravatar.cc/40?img=2",
  },
  {
    id: 3,
    bomNo: "BOM003",
    currentDate: "Thursday, April 10, 2025, 09:34 PM PKT",
    articleName: "Inverter",
    quantity: 2,
    costPrice: 500.0,
    notes: "Durable and reliable inverter",
    createdBy: "Alice Johnson",
    avatar: "https://i.pravatar.cc/40?img=3",
  },
];

// Action Creator: Fetch BOM Data
export const fetchBomData = () => ({
  type: FETCH_BOM_SUCCESS,
  payload: dummyBomData,
});
