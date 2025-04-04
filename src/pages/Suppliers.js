import React, {useEffect, useState} from 'react'
import { useDispatch } from "react-redux";
import { setHeaderCard } from "../store/actions/headerCardActions";
import HeaderCard from "../components/common/HeaderCard";
import { Box } from "@mui/material";
import {
  AddClientButton,
  CancelButton,
  ModifyClientButton,
  SaveButton,
  SelectClientButton,
} from "../components/buttons/ButtonComponents";
import CustomerSearch from "../components/customer/CustomerSearch";
import SearchComponent from "../components/modals/Customers/SearchComponent";
import { Link } from "react-router-dom";
import PersonalDetailComponent from '../components/customer/addClient/PersonalDetailComponent';
import ClientCategoryComponent from '../components/customer/addClient/ClientCategoryComponent';
import PersonalandClientForm from '../components/suppliers/PersonalandClientForm';

const Suppliers = () => {
    const dispatch = useDispatch();
    const [cartOpen, setCartOpen] = useState(false);

    useEffect(() => {
      dispatch(
        setHeaderCard("Suppliers", "Add Client Details", [
          "File",
          "Suppliers",
        ])
      );
    }, [dispatch]);
  return (
    <Box>
      <HeaderCard />
      
      <PersonalandClientForm />
      <Box display="flex" gap="8px" justifyContent="flex-end">
        <CancelButton />
        <SaveButton />
      </Box>
    </Box>
  );
}

export default Suppliers