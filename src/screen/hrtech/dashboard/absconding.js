import { Breadcrumbs } from '@mui/material'
import React from 'react'
import CustomBreadcrumbs from '../../../components/custom-breadcrumbs'
import { Container, Typography } from "@mui/material"
import EmployeeType from '../../../sections/@dashboard/employeeType/employeeType'

const AbscondingSetup = () => {
  return (
    <>
    <Container >
         {/* <CustomBreadcrumbs
                    heading="Absconding Setup"
                    links={[
                        {name: 'SetUp', href:'#'},
                        {name: 'Warning Setup', href: '#'},
                    ]}
                /> */}
         <EmployeeType/>
        </Container>
    </>
  )
}

export default AbscondingSetup