import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEmployees } from "../../store/actions/employeeActions";
import DataTable from "../common/DataTable";

const EmployeeListTable = () => {
  const dispatch = useDispatch();
  const employees = useSelector((state) => state.employees.list);

  useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);

  // Define column headers
  const columns = [
    { id: "checkbox", label: "", type: "checkbox" },
    { id: "date", label: "Date" },
    { id: "name", label: "Employee Name" },
    { id: "noFact", label: "No Fact" },
    { id: "montSTVA", label: "Mont. S. TVA" },
    { id: "montTVA", label: "Mont. TVA" },
    { id: "total", label: "Total" },
    { id: "user", label: "USER" },
  ];

  return <DataTable columns={columns} rows={employees} />;
};

export default EmployeeListTable;
