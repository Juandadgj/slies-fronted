import { makeStyles } from '@material-ui/styles';

export const drawerStyles = makeStyles((theme) => ({
  root: {
    width: '300px',
    display: 'flex',
    height: '100vh',
    overflow: 'auto',
    position: 'fixed',
  },

  header__drawer: {
    textAlign: 'center',
    marginTop: 20,
  },
  arrow: {
    position: 'absolute',
    top: 18,
    left: 220,
    cursor: 'pointer',
  },
  hr: {
    border: `1px solid ${theme.palette.secondary.main}`,
    width: 100,
  },
  ancho: {
    width: '100%',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.inactive,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'start',
    alignItems: 'center',
  },
  lista: {
    width: '100%',
  },
  items: {
    margin: '4px 0',
    color: theme.palette.lightGray,

    '&:focus, .icons': {
      color: theme.palette.lightGray,
      borderLeft: `5px solid ${theme.palette.secondary.main}`,
      borderRadius: '4px',
    },
  },
  icons: {
    color: theme.palette.inactive,
  },
  titulos: {
    color: theme.palette.secondary.main,
    marginBottom: '10px',
    fontSize: 60,
    fontWeight: 'bold',
  },
  nombre: {
    color: '#f5a801',
    fontSize: 10,
    fontWeight: 'bold',
    width: 250,
  },
  root__closed: {
    width: '50px',
    display: 'flex',
    height: '100vh',
    position: 'fixed',
  },
  closed: {
    width: 50,
    height: '100%',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.inactive,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'start',
    alignItems: 'center',
  },
  icons__closed: {
    marginLeft: 15,
    color: theme.palette.inactive,
  },
  icons__container: {
    marginTop: 80,
  },
  arrow__closed: {
    position: 'absolute',
    top: 18,
    left: 13,
    marginBottom: 20,
    cursor: 'pointer',
  },
  divider: {
    width: 40,
    border: `1px solid ${theme.palette.inactive}`,
  },
}));
