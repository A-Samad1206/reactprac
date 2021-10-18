import { useSnackbar, SnackbarProvider } from 'notistack';

const MyButton = () => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const handleClick = () => {
    enqueueSnackbar('I love hooks');
  };

  return (
    <App>
      <Button onClick={handleClick}>Show snackbar</Button>
    </App>
  );
};

const App = ({ children }) => <SnackbarProvider>{children}</SnackbarProvider>;
export default MyButton;
