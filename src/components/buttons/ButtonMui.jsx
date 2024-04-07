import Button from '@mui/material/Button';
import './ButtonMui.css';

export default function ButtonMui({ text }) {
  return (
    <Button
      className="button-mui"
      sx={{
        display: 'block',
        backgroundColor: 'var(--color-button)',
        fontFamily: 'inherit',
        padding: '1.6rem 3rem',
        fontSize: '2rem',

        '&:hover': {
          backgroundColor: 'var(--color-button-hover)',
        },
      }}
      variant="contained"
    >
      {text}
    </Button>
  );
}
