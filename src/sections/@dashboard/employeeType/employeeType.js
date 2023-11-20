import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import {Box, Button, Stack, Typography} from '@mui/material';
import FormProvider, {RHFRadioGroup, RHFSelect,RHFSwitch} from '../../../components/hook-form';
import {styled} from '@mui/material/styles';


const EmployeeType = () => {
  const StyledGrid = styled('div')(({theme}) => ({
    display: 'grid',
    gap: '24px',
    gridTemplateColumns: "1fr 1fr",
    [theme.breakpoints.down('sm')]: {
        gridTemplateColumns: "1fr",
    },
}));
  return (
    <Card>
      <CardContent>
      <FormProvider >
                <Box sx={{my: 3}}>
                    <StyledGrid>
                        <Stack gap={1}>
                            <Typography variant="subtitle2">Category</Typography>
                            <RHFSwitch
                            name="nameOnId"
                            size="medium"
                            label="Label"
                            />
                        </Stack>
                        {/* <Stack gap={1} justifyContent="space-between">
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
                        </Stack> */}
                    </StyledGrid>
                </Box>

                <Stack direction="row" spacing={3} justifyContent='end' mt={3}>
                    <Button  variant="outlined" color="error" sx={{px: 2}}>Cancel</Button>
                    <Button variant="contained">Submit</Button>
                </Stack>
            </FormProvider>
      </CardContent>

    </Card>
  );
};

export default EmployeeType;
