import { makeStyles } from '@material-ui/styles';

export const appRouterStyles = makeStyles(() => ({
  root: {
    display: 'flex',
  },
  mainContent: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    padding: '5px',
    marginLeft: '300px',
  },
}));
