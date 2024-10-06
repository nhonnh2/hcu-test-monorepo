// @mui
import { GlobalStyles as MUIGlobalStyles } from '@mui/material';

// ----------------------------------------------------------------------

const robotoFont = `
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
`;

export default function GlobalStyles() {
  const inputGlobalStyles = (
    <>
      <style>{robotoFont}</style>
      <MUIGlobalStyles
        styles={{
          '*': {
            boxSizing: 'border-box',
          },
          html: {
            margin: 0,
            padding: 0,
            width: '100%',
            height: '100%',
            WebkitOverflowScrolling: 'touch',
          },
          body: {
            margin: 0,
            padding: 0,
            width: '100%',
            height: '100%',
            fontFamily: 'Roboto, sans-serif',
            backgroundColor: 'hsl(340, 91%, 95%)',
            fontSize: '16px',
          },
          '#root': {
            width: '100%',
            height: '100%',
          },
          input: {
            '&[type=number]': {
              MozAppearance: 'textfield',
              '&::-webkit-outer-spin-button': {
                margin: 0,
                WebkitAppearance: 'none',
              },
              '&::-webkit-inner-spin-button': {
                margin: 0,
                WebkitAppearance: 'none',
              },
            },
          },
          img: {
            display: 'block',
            maxWidth: '100%',
          },
          ul: {
            margin: 0,
            padding: 0,
          },
        }}
      />
    </>
  );

  return inputGlobalStyles;
}
