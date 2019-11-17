import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { TextBox } from "../../../../shared/components";
import useForm from "./useForm";
const useStyles = makeStyles(theme => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

export function LoginWrapper(props) {
  // Define your state schema
  const stateSchema = {
    username: {
      value: "",
      error: ""
    },
    password: { value: "", error: "" }
  };
  // Create your own validationStateSchema
  // stateSchema property should be the same in validationStateSchema
  // in-order a validation to works in your input.
  const stateValidatorSchema = {
    username: {
      required: true,
      validator: {
        func: value => /^[a-zA-Z]+$/.test(value),
        error: "Invalid first name format."
      }
    },
    password: {
      required: true,
      validator: {
        func: value => /^[a-zA-Z]+$/.test(value),
        error: "Invalid last name format."
      }
    }
  };

  const classes = useStyles();
  const { values, errors, handleOnChange, handleOnSubmit, disable } = useForm(
    stateSchema,
    stateValidatorSchema,
    onSubmitForm
  );
  function onSubmitForm(state) {
    if (state.username !== "" && state.password !== "") {
      props.login(state);
      props.history.push("/planets");
    }
  }

  const { username, password } = values;
  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <AccountCircleIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleOnSubmit}>
          <TextBox
            error={!!errors.username}
            variant="outlined"
            margin="normal"
            required={true}
            fullWidth={true}
            id="username"
            label="Username"
            name="username"
            helperText={errors.username}
            handleInputChange={handleOnChange}
            value={username}
          />
          <TextBox
            error={!!errors.password}
            variant="outlined"
            margin="normal"
            fullWidth={true}
            id="password"
            label="Password"
            name="password"
            type="password"
            helperText={errors.password}
            handleInputChange={handleOnChange}
            value={password}
            required={true}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            disabled={disable}
          >
            Sign In
          </Button>
        </form>
      </div>
    </Container>
  );
}
