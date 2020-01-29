import React, { Component } from "react";
import styled from "styled-components";
import CreateNewComment from "./CreateNewComment";
import CommentCard from "./CommentCard"
import PostCardDetail from "./PostCardDetail";
import { push } from "connected-react-router";
import { routes } from "../Router";
import { connect } from "react-redux";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Fab from '@material-ui/core/Fab';
import Container from '@material-ui/core/Container';

const Root = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 15px 0;
`

const Footer = styled.footer`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 2vh 0;
`
const Banana = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 2vh 0;
`

class PostPage extends Component {

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
                    <PostCardDetail />
                    <CreateNewComment />
                    <CommentCard />
                </Container>
                <Footer>
                    <Fab color="primary" aria-label="add">
                        <ArrowBackIcon onClick={this.props.goToFeed} />
                    </Fab>
                </Footer>
            </Root>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    goToLogin: () => dispatch(push(routes.root)),
    goToFeed: () => dispatch(push(routes.feed)),
});

export default connect(null, mapDispatchToProps)(PostPage);