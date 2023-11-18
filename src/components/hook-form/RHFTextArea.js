import PropTypes from 'prop-types';
// form
import {Controller, useFormContext} from 'react-hook-form';

import {TextField} from '@mui/material';

// ----------------------------------------------------------------------

RHFTextField.propTypes = {
    name: PropTypes.string,
    helperText: PropTypes.node,
};

export default function RHFTextField({name, helperText, ...other}) {
    const {control} = useFormContext();

    return (
        <Controller
            name={name}
            control={control}
            render={({field, fieldState: {error}}) => (
                <TextField
                    {...field}
                    fullWidth
                    minRows={8}
                    multiline
                    value={typeof field.value === 'number' && field.value === 0 ? '' : field.value}
                    error={!!error}
                    helperText={error ? error?.message : helperText}
                    {...other}
                />
            )}
        />
    );
}