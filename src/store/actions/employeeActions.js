import { FETCH_EMPLOYEES_SUCCESS } from "../types/actionTypes";

// Dummy JSON data for employees
const dummyEmployees = [
  {
    id: 1,
    date: "2025-03-29",
    name: "John Doe",
    noFact: "FCT-001",
    montSTVA: 1200,
    montTVA: 200,
    total: 1400,
    user: "Admin",
    avatar: "https://i.pravatar.cc/40?img=3",
  },
  {
    id: 2,
    date: "2025-03-28",
    name: "Jane Smith",
    noFact: "FCT-002",
    montSTVA: 2500,
    montTVA: 500,
    total: 3000,
    user: "Manager",
    avatar: "https://i.pravatar.cc/40?img=4",
  },
  {
    id: 3,
    date: "2025-03-27",
    name: "Mike Johnson",
    noFact: "FCT-003",
    montSTVA: 1800,
    montTVA: 300,
    total: 2100,
    user: "HR",
    avatar: "https://i.pravatar.cc/40?img=5",
  },
];

// Action Creator: Fetch Employees
export const fetchEmployees = () => ({
  type: FETCH_EMPLOYEES_SUCCESS,
  payload: dummyEmployees,
});
