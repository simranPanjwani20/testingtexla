import React,{useState} from "react"
import Label from "../../../components/label"
import {alpha,styled, useTheme} from '@mui/material/styles';
import { Container, Typography } from "@mui/material"

export default function Expense()
{

    const theme=useTheme()
    return(
        <Container>
        <Typography variant="h4">Hello</Typography>
        <Label variant="subtitle1" sx={{backgroundColor:alpha(theme.palette.primary.main,0.2),color:"primary.main"}} >WELCOME</Label>
        </Container>
    )
}