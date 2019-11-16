import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { TextBox } from "../../../../shared/components";
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
  const classes = useStyles();
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleInputChange = event => {
    event.persist();
    setValues(values => ({
      ...values,
      [event.target.name]: event.target.value
    }));
    setErrors(validate(values));
  };

  const validate = values => {
    let errors = {};
    if (!values.username) {
      errors.username = "Please enter the username";
    }
    if (!values.password) {
      errors.password = "Please enter the password";
    }
    return errors;
  };
  const handleSubmit = event => {
    if (event) event.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
    if (Object.keys(errors).length === 0 && isSubmitting) {
      console.log("No error you can proceed");
      props.login(values);
    }
  };
  // useEffect(() => {
  //   if (Object.keys(errors).length === 0 && isSubmitting) {
  //     console.log("No error you can proceed");
  //     props.login(values);
  //   }
  // }, [values, isSubmitting, errors]);
  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <AccountCircleIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
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
            handleInputChange={handleInputChange}
            value={values.username || ""}
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
            handleInputChange={handleInputChange}
            value={values.password || ""}
            required={true}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            onClick={handleSubmit}
            color="primary"
          >
            Sign In
          </Button>
        </form>
      </div>
    </Container>
  );
}
