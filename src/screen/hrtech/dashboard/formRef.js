import {useCallback, useMemo} from 'react';
import PropTypes from 'prop-types';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import {Box, Button, Stack, Typography} from '@mui/material';
import {styled} from '@mui/material/styles';

import CustomModal from '../../../../components/custom-modal';
import FormProvider, {RHFRadioGroup, RHFSelect} from '../../../../components/hook-form';

const StyledGrid = styled('div')(({theme}) => ({
    display: 'grid',
    gap: '24px',
    gridTemplateColumns: "1fr 1fr",
    [theme.breakpoints.down('sm')]: {
        gridTemplateColumns: "1fr",
    },
}));

AddEditLoanDetailsModal.propTypes = {
    open: PropTypes.func,
    onClose: PropTypes.func,
};
export default function AddEditLoanDetailsModal({open, onClose}) {

    const MyDocumentSchema = Yup.object().shape({
        // documentCategory: Yup.string().required('Document category is required').nullable(),
        // idType: Yup.string().required('Document type is required').nullable(),
        // nameOnId: Yup.string().required('Name on id is required'),
        // idNumber: Yup.string().required('Identity number is required'),
        // file: Yup.mixed()
        //     .required('File is required')
        //     .test(
        //         'fileFormat',
        //         'Only png, jpeg and pdf files are allowed',
        //         (value) => {
        //             console.log("value", value)
        //             if (!value) return false;
        //             return ['image/png', 'image/jpeg', 'application/pdf'].includes(value.type);
        //         }
        //     ),
    });

    const defaultValues = useMemo(
        () => ({}),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        []
    );

    const methods = useForm({
        resolver: yupResolver(MyDocumentSchema),
        defaultValues,
    });

    const {
        handleSubmit,
        watch,
        setValue,
        getValues,
        formState: {isSubmitting, errors},
    } = methods;

    const handleDrop = useCallback(
        (acceptedFiles) => {
            const file = acceptedFiles[0];
            if (file) {
                setValue('file', file);
            }
        },
        [setValue]
    );

    return (
        <CustomModal open={open} onClose={onClose}>
            <Typography variant="h6" sx={{color: 'primary.main'}}>Apply Loans & Advances</Typography>

            <FormProvider methods={methods} onSubmit={handleSubmit()}>
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
        </CustomModal>
    )
}
