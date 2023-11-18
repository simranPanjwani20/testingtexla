import { Breadcrumbs } from '@mui/material'
import React from 'react'
import CustomBreadcrumbs from '../../../components/custom-breadcrumbs'
import { Container, Typography } from "@mui/material"

const AbscondingSetup = () => {
  return (
    <>
    <Container >
         <CustomBreadcrumbs
                    heading="Absconding Setup"
                    links={[
                        {name: 'SetUp', href:'#'},
                        {name: 'Warning Setup', href: '#'},
                    ]}
                />

        </Container>
    </>
  )
}

export default AbscondingSetup