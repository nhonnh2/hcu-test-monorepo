import TextField, { TextFieldProps } from '@mui/material/TextField';

type GeneralTextFieldProps = {} & TextFieldProps;

export const GeneralTextField = (props: GeneralTextFieldProps) => {
  return (
    <TextField
      {...props}
      variant="outlined"
      fullWidth
      sx={{
        '& .MuiOutlinedInput-root': {
          borderRadius: '50px',
          backgroundColor: '#f9fafb',
          height: '100%',
        },
      }}
    />
  );
};
