import React from "react";
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { v4 as uuidv4 } from 'uuid';

const useStyles = makeStyles((theme) => ({
  gridSpacing: {
    margin: theme.spacing(1),
  },
  formControl: {
    minWidth: 120,
  },
}));

const BootstrapInput = withStyles((theme) => ({
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 2,
    },
  },
}))(InputBase);

const Form = ({ inputText, setInputText, todos, setTodo, setState }) => {
  const classes = useStyles();
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitTodoHandler = e => {
    e.preventDefault();
    setTodo([...todos, { text: inputText, completed: false, id: uuidv4() },
    ]);
    setInputText("");
  };

  const stateHandler = (e) => {
    setState(e.target.value);
  }

  return (
    <Grid container
      justify="center"
      alignItems="center">
      <Paper
        square
        className="form-container">
        <form onSubmit={submitTodoHandler}>
          <Grid item className={classes.gridSpacing}>
            <TextField
              id="standard-basic"
              label="Todo"
              value={inputText}
              onChange={inputTextHandler}
              type="text"
            />
          </Grid>
          <Grid item className={classes.gridSpacing}>
            <FormControl variant="outlined" className={classes.formControl}>
              <NativeSelect
                label="State"
                onChange={stateHandler}
                input={<BootstrapInput />}>
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
              </NativeSelect>
            </FormControl>
          </Grid>
        </form>
      </Paper>
    </Grid>
  );
};

export default Form;
