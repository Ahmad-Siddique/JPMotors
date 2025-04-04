import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEmployees } from "../../store/actions/employeeActions";
import DataTable from "../common/DataTable";

const EmployeeListTableSalary = () => {
  const dispatch = useDispatch();
  const employees = useSelector((state) => state.employees.list);

  useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);

  // Define column headers
  const columns = [
    { id: "checkbox", label: "", type: "checkbox" },
    { id: "metrics", label: "Metrics" },
    {
      id: "image",
      label: "Image",
      type: "image",
      demoImage: "https://i.pravatar.cc/150?img=1", // Default image if needed
    },
    { id: "name", label: "Employee Name" },
    { id: "absentPercentage", label: "Absent %", type: "number" },
    { id: "function", label: "Function" },
    { id: "telephone", label: "Telephone", type: "tel" },
    { id: "quinzaine", label: "Quinzaine", type: "number" },
    { id: "salaryBase", label: "Salary Base", type: "number" },
    { id: "jours", label: "Jours", type: "number" },
    { id: "trans", label: "Trans", type: "number" },
    { id: "malade", label: "Malade", type: "number" },
    { id: "absent", label: "Absent", type: "number" },
    { id: "late", label: "Late", type: "number" },
    { id: "rejoint", label: "Rejoint", type: "date" },
    { id: "prime", label: "Prime" },
  ];

  // Dummy JSON data for employees with working images
  const dummyEmployees = [
    {
      id: 1,
      metrics: "Performance",
      image: "https://i.pravatar.cc/150?img=3", // Working dummy image
      name: "John Doe",
      absentPercentage: 5,
      function: "Developer",
      telephone: "123-456-7890",
      quinzaine: 2,
      salaryBase: 4000,
      jours: 22,
      trans: 100,
      malade: 2,
      absent: 1,
      late: 3,
      rejoint: "2024-01-15",
      prime: "Bonus",
    },
    {
      id: 2,
      metrics: "Attendance",
      image: "https://i.pravatar.cc/150?img=5", // Working dummy image
      name: "Jane Smith",
      absentPercentage: 2,
      function: "Manager",
      telephone: "987-654-3210",
      quinzaine: 3,
      salaryBase: 6000,
      jours: 24,
      trans: 200,
      malade: 1,
      absent: 0,
      late: 1,
      rejoint: "2023-09-10",
      prime: "Commission",
    },
    {
      id: 3,
      metrics: "Efficiency",
      image: "https://i.pravatar.cc/150?img=7", // Working dummy image
      name: "Mike Johnson",
      absentPercentage: 8,
      function: "HR",
      telephone: "555-555-5555",
      quinzaine: 1,
      salaryBase: 4500,
      jours: 20,
      trans: 150,
      malade: 3,
      absent: 2,
      late: 4,
      rejoint: "2022-06-20",
      prime: "Allowance",
    },
  ];

  return <DataTable columns={columns} rows={dummyEmployees} />;
};

export default EmployeeListTableSalary;
