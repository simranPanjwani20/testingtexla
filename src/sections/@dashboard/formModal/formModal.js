import React from 'react'
import Modal from "@material-ui/core/Modal";
import {styled, useTheme} from '@mui/material/styles';
import Backdrop from "@material-ui/core/Backdrop";
import FormProvider, {RHFRadioGroup, RHFSelect} from '../../../components/hook-form';
import {Box, Button, Stack, Typography} from '@mui/material';

const FormModal = ({ open, handleClose }) => {
  return (
    <Modal
    open={open}
    onClose={handleClose}
    closeAfterTransition
    BackdropComponent={Backdrop}
    BackdropProps={{
      timeout: 500,
    }}
  >
   <Typography variant="h6" sx={{color: 'primary.main'}}>Apply Loans & Advances</Typography>

<FormProvider >
    <Box sx={{my: 3}}>
        <StyledGrid>
            <Stack gap={1}>
                <Typography variant="subtitle2">Category</Typography>
                <RHFSelect
                    size="medium"
                    name="nameOnId"
                    label="Label"
                />
            </Stack>
            <Stack gap={1} justifyContent="space-between">
                <Typography variant="subtitle2">Interest Applicable</Typography>
                <RHFRadioGroup
                    size="medium"
                    name="nameOnId"
                    row
                    options={[
                        {label: 'Yes', value: false},
                        {label: 'No', value: true},
                    ]}
                />
            </Stack>
            <Stack gap={1}>
                <Typography variant="subtitle2">Interest %</Typography>
                <RHFSelect
                    size="medium"
                    name="nameOnId"
                    label="Label"
                />
            </Stack>
            <Stack gap={1}>
                <Typography variant="subtitle2">Minimum no of EMI’s</Typography>
                <RHFSelect
                    size="medium"
                    name="nameOnId"
                    label="Label"
                />
            </Stack>
            <Stack gap={1}>
                <Typography variant="subtitle2">Maximum no of EMI’s</Typography>
                <RHFSelect
                    size="medium"
                    name="nameOnId"
                    label="Label"
                />
            </Stack>
            <Stack gap={1} justifyContent="space-between">
                <Typography variant="subtitle2">Eligible on multiplies of basic?</Typography>
                <RHFRadioGroup
                    size="medium"
                    name="nameOnId"
                    row
                    options={[
                        {label: 'Yes', value: false},
                        {label: 'No', value: true},
                    ]}
                />
            </Stack>
            <Stack gap={1} justifyContent="space-between">
                <Typography variant="subtitle2">Eligible on multiplies of gross?</Typography>
                <RHFRadioGroup
                    size="medium"
                    name="nameOnId"
                    row
                    options={[
                        {label: 'Yes', value: false},
                        {label: 'No', value: true},
                    ]}
                />
            </Stack>
            <Stack gap={1}>
                <Typography variant="subtitle2">Base Multiplier</Typography>
                <RHFSelect
                    size="medium"
                    name="nameOnId"
                    label="Label"
                />
            </Stack>
            <Stack gap={1}>
                <Typography variant="subtitle2">Gross Multiplier</Typography>
                <RHFSelect
                    size="medium"
                    name="nameOnId"
                    label="Label"
                />
            </Stack>
        </StyledGrid>
    </Box>

    <Stack direction="row" spacing={3} justifyContent='end' mt={3}>
        <Button onClick={onClose} variant="outlined" color="error" sx={{px: 2}}>Cancel</Button>
        <Button variant="contained">Submit</Button>
    </Stack>
</FormProvider>
  </Modal>
     )
}

export default FormModal