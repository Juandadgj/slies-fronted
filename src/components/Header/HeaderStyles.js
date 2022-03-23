import { makeStyles } from '@material-ui/styles';

export const headerStyles = makeStyles((theme) => ({
  root: {
    boxSizing: 'border-box',
    height: 100,
    width: '100%',
    backgroundColor: theme.palette.fullWhite,
    borderRadius: 4,
  },
  info: {
    paddingLeft: 100,
    borderLeft: '3px solid #eee',
    display: 'flex',
    alignItems: 'center',
    float: 'right',
    margin: '10px 30px',
  },
  image: {
    marginRight: 20,
    height: 80,
    width: 80,
    borderRadius: '50%',
  },
  info__titles: {
    color: theme.palette.headerColor,
  },
}));
