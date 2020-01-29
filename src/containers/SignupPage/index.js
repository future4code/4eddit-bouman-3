import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { signup } from "../../action/login";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { routes } from "../Router";
import { push } from "connected-react-router";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Fab from '@material-ui/core/Fab';

const Root = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Banner = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
`

const Image = styled.img`
  width: 50%;
  border-radius: 50%;
  margin-bottom: 15px;
`

const Footer = styled.footer`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 2vh 0;
`

class SignupPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
    }
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { username, email, password } = this.state
    this.props.signup(username, email, password)
  }

  render() {
    return (
      <Root>
        <Container component="main" maxWidth="xs" >
          <div>
            <Banner>
              <Image src={require('../../logo.png')} />
              <Typography>
                Criar Nova Conta
              </Typography>
            </Banner>

            <form onSubmit={this.handleSubmit}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                label="Nome de Usuário"
                autoComplete="username"
                autoFocus
                component="h1"
                type="text"
                name="username"
                value={this.state.username}
                onChange={this.handleChange}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="E-mail"
                autoComplete="email"
                component="h1"
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Senha"
                type="password"
                autoComplete="current-password"
                value={this.state.password}
                onChange={this.handleChange}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                Cadastrar
            </Button>
            </form>

            <Footer>
              <Fab color="primary" aria-label="add">
                <ArrowBackIcon onClick={this.props.goToLogin} />
              </Fab>
            </Footer>
          </div>
        </Container>
      </Root>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  signup: (username, email, password) => dispatch(signup(username, email, password)),
  goToLogin: () => dispatch(push(routes.root)),
});

export default connect(null, mapDispatchToProps)(SignupPage);