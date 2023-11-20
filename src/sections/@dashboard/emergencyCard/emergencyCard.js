import React from 'react'
import { Card, CardContent } from '@mui/material';
import {Box, Button, Stack, Typography} from '@mui/material';
import Iconify from '../../../components/iconify/Iconify';



const EmergencyCard = ({day, month, date}) => {
        const cardStyle = {
          border: '1px solid green',
          borderRadius: '20px',
          width:'fit-content'
        };

        const emergency = {
          border: "none",
    borderRadius: "50px",
    width: "fit-content",
    padding: "4px 8px",
    color: "red",
    backgroundColor:"#ffe4e4",
    textAlign: "center",
    fontSize: "small",
        };
  return (
    <Card style={cardStyle}>
      <CardContent>
    <Stack direction="row" justifyContent="space-between" >
      <Stack direction="column"  alignItems="center" justifyContent="center" sx={{mx:1,px:1,py:0.3,borderRadius:"6px",backgroundColor:"grey.200"}}>
    <Typography variant="caption" sx={{
        textAlign:"left",
        color:"grey.500",
        fontWeight:600
    }} >
      {day}
    </Typography>

    <Box component="span" sx={{
        fontSize: "12px",
        position:"absolute",
        textAlign:"center",
        width:"15px",
        pl:0.2,
        pt:"14px",
        color:"primary.main",
        fontWeight:700
    }}>
       {date}
    </Box>
    <Iconify icon="lucide:calendar" width="35px" height="35px" sx={{color:"primary.main"}}/>
    <Stack direction="row" sx={{}}>
        <Typography variant="caption" sx={{textAlign:"center",ml:0.2, fontWeight:500}}>
         {month}
        </Typography>
    </Stack>
</Stack>
  <Stack direction="column" gap='10px'>
    <Stack direction="row" alignItems="flex-end" justifyContent="space-between">
    <Typography>Power Shut</Typography>
    <Stack direction="row" alignItems="flex-end" justifyContent="space-between" gap={'5px'}>
      <div style={emergency}>
        Emergency
      </div>
      <Iconify icon="teenyicons:eye-solid" width="25px" height="25px" sx={{color:"#3f3e3e"}}/>
    </Stack>
    </Stack>
    <Stack alignItems='flex-start' fontSize='15px'>
    <div>Tomorrow is an emergency off due to </div> 
    <div>power cut in the office</div>
    </Stack>
  </Stack>
</Stack>
      </CardContent>
    </Card>
  )
}

export default EmergencyCard