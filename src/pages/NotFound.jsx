import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <>
      <h1>صفحه مورد نظر پیدا شد!</h1>
      <br />
      <Button
        style={{
          display: 'block',
          marginInline: 'auto',
          backgroundColor: 'var(--color-button)',
        }}
        variant="contained"
      >
        <Link
          style={{
            color: 'var(--gray-200)',
          }}
          to="/"
        >
          بازگشت به صفحه اصلی
        </Link>
      </Button>
    </>
  );
}

export default NotFound;
