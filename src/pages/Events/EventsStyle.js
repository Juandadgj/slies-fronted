import { makeStyles } from '@material-ui/core/styles';
import { AdbRounded } from '@material-ui/icons';

export const useEventsStyle = makeStyles({
  root: {
    display: 'grid',
    gridTemplateRows: 'repeat(3, 1fr)',
  },
  card: {
    margin: 20,
  },
});
