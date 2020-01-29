import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { createPost } from "../../action/index";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const NewPostArea = styled.form`
    width: 100%;
    height: 33vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 10px;
`

class CreateNewPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "",
            title: ""
        }
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { text, title } = this.state
        this.props.createPost(text, title)
        this.setState({ text: "", title: "" })
    }

    render() {
        return (
            <NewPostArea onSubmit={this.handleSubmit}>
                <TextField
                    required
                    id="filled-required"
                    label="Título"
                    variant="outlined"
                    type="text"
                    name="title"
                    value={this.state.title}
                    onChange={this.handleChange}
                />
                <TextField
                    required
                    id="filled-multiline-static"
                    label="Texto"
                    multiline
                    rows="4"
                    variant="outlined"
                    type="text"
                    name="text"
                    value={this.state.text}
                    onChange={this.handleChange}
                />
                <Button
                    type="submit"
                    variant="contained"
                    size="small"
                    color="primary"
                >
                    Postar
                </Button >
            </NewPostArea>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    createPost: (text, title) => dispatch(createPost(text, title)),
});

export default connect(null, mapDispatchToProps)(CreateNewPost);