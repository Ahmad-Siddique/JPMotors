import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Box, Typography } from "@mui/material";
import { setHeaderCard } from "../store/actions/headerCardActions";
import HeaderCard from "../components/common/HeaderCard";
import PersonalDetailComponent from "../components/customer/addClient/PersonalDetailComponent";
import ClientCategoryComponent from "../components/customer/addClient/ClientCategoryComponent";
import { CancelButton, SaveButton } from "../components/buttons/ButtonComponents";
const AddClient = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(
            setHeaderCard(
                "Client(ADD)",
                "Add Client details",
                ["File", "Customer", "Add Client"]
            )
        );
    }, [dispatch]);
    return (
        <Box>
            <HeaderCard />
            <PersonalDetailComponent />
            <ClientCategoryComponent />
            <Box display="flex" gap="8px"  justifyContent="flex-end">
                <CancelButton />
                <SaveButton />
            </Box>

        </Box>

    )
};

export default AddClient;
