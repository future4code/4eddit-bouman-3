import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { createComment } from "../../action/index";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const NewCommentArea = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
`

class CreateNewComment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "",
        }
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { text } = this.state
        this.props.createComment(text, this.props.selectIdPost)
        this.setState({ text: "" })
    }

    render() {
        return (

            <NewCommentArea onSubmit={this.handleSubmit}>
                <TextField
                    required
                    id="filled-multiline-static"
                    label="Escreva seu comentário"
                    multiline
                    rows="4"
                    variant="filled"
                    type="text"
                    name="text"
                    value={this.state.text}
                    onChange={this.handleChange}
                />
                <Button
                    type="submit"
                    variant="outlined"
                    size="small"
                    color="main"
                >
                    Comentar
                </Button >
            </NewCommentArea>

        );
    }
}

const mapStateToProps = state => ({
    selectIdPost: state.posts.selectIdPost,
})

const mapDispatchToProps = dispatch => ({
    createComment: (text, id) => dispatch(createComment(text, id)),

});

export default connect(mapStateToProps, mapDispatchToProps)(CreateNewComment);