import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setHeaderCard } from "../store/actions/headerCardActions";
import HeaderCard from "../components/common/HeaderCard";
import { Box } from "@mui/material";


import MainSearch from "../components/salary/mainsearch";
import EmployeeListTableSalary from "../components/common/EmployeeListTableSalary";
import {ButtonSection, AdditionalSection} from "../components/salary/buttons";

const Salary = () => {
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(
      setHeaderCard(
        "Salary",
        "Employee Salary Details",
        ["File", "Salary"]
      )
    );
  }, [dispatch]);
  return (
    <Box>
      <HeaderCard />
          <MainSearch />
          <EmployeeListTableSalary />
          <ButtonSection />
          <AdditionalSection />
    </Box>
  );
};

export default Salary;
