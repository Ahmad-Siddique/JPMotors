import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setHeaderCard } from "../store/actions/headerCardActions";
import HeaderCard from "../components/common/HeaderCard";
import { Box } from "@mui/material";
import { AddClientButton, ModifyClientButton, SelectClientButton } from "../components/buttons/ButtonComponents";
import CustomerSearch from "../components/customer/CustomerSearch";
import SearchComponent from "../components/modals/Customers/SearchComponent";
import { Link } from "react-router-dom";

const Customer = () => {
    const dispatch = useDispatch();
    const [cartOpen, setCartOpen] = useState(false);

    useEffect(() => {
        dispatch(setHeaderCard("Customers", "Search Your Clients Detail", ["File", "Customer"]));
    }, [dispatch]);


    return (
        <Box>
            <HeaderCard />
            <Box display="flex" gap={2} padding={2} alignItems="center">
                <Link to="/file/customer/AddClient" style={{ textDecoration: "none" }}>
                    <AddClientButton />
                </Link>
                <ModifyClientButton />
                <SelectClientButton />
                <Box display="flex" alignItems="center" ml={2} style={{ marginLeft: 'auto' }}>
                    <input type="checkbox" id="vcheck" name="vcheck" />
                    <label htmlFor="vcheck" style={{ marginLeft: "8px", color: "gray" }}>Vision Client suprimers</label>
                </Box>

            </Box>
            <CustomerSearch />
            <SearchComponent />
        </Box>
    );
};

export default Customer;
