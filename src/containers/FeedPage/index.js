import React, { Component } from "react";
import styled from "styled-components";
import PostCard from "./PostCard";
import CreateNewPost from "./CreateNewPost";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../Router";
import Container from '@material-ui/core/Container';

const Root = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  margin: 15px 0;
`

class FeedPage extends Component {

    componentDidMount() {
        const token = window.localStorage.getItem("token")
        if (token === null) {
            this.props.goToLogin()
            window.alert("Área restrita. Faça seu login")
        }
    }

    render() {
        return (
            <Root>
                <Container component="main" maxWidth="xs">
                    <CreateNewPost />
                    <PostCard />
                </Container>
            </Root>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    goToLogin: () => dispatch(push(routes.root)),
});

export default connect(null, mapDispatchToProps)(FeedPage);
