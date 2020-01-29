import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { getPostsDetail } from '../../action/index'
import { voteComment } from '../../action/index';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

const Root = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 15px 0;
  align-items: flex-start;
`

const CommentCard = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
`

const BottomBar = styled.span`
    width: 100%;
    display: flex;
    justify-content: space-between;
`

const VotesArea = styled.div`
    display: flex;
    padding: 3px;
    align-items: center;   
`

const VotesCount = styled.span`
    padding: 5px;
`

const ButtonVote = styled.span`
    &:hover{
	    background-color: #d3d3d3;
        cursor: pointer;
        border-radius: 5px;
    }
`

class PostCardDetail extends Component {

    componentDidMount() {
        this.props.getPostsDetail(this.props.selectIdPost)
    }

    handleVoteComment = (comment, direction) => {
        if (comment.userVoteDirection === 0) {
            this.props.voteComment(this.props.selectIdPost, comment.id, direction)
        } else if (comment.userVoteDirection === 1 && direction === 1) {
            this.props.voteComment(this.props.selectIdPost, comment.id, 0)
        } else if (comment.userVoteDirection === -1 && direction === -1) {
            this.props.voteComment(this.props.selectIdPost, comment.id, 0)
        }
    }

    render() {
        return (
            <Root>

                {this.props.selectPost.comments && this.props.selectPost.comments.map((comment) =>

                    <CommentCard>
                        <Card width="100%" >
                            <CardContent>
                                <Typography color="textSecondary" gutterBottom>
                                    {comment.username}
                                </Typography>
                                <Typography variant="body2" component="p">
                                    {comment.text}
                                </Typography>
                            </CardContent>

                            <CardActions>
                                <BottomBar>
                                    <VotesArea>
                                        <ButtonVote>
                                            <ArrowUpwardIcon
                                                color={comment.userVoteDirection !== 1 ? "" : "primary"}
                                                onClick={() => this.handleVoteComment(comment, 1)}
                                            />
                                        </ButtonVote>
                                        <VotesCount> {comment.votesCount} </VotesCount>
                                        <ButtonVote>
                                            <ArrowDownwardIcon
                                                color={comment.userVoteDirection !== -1 ? "" : "secondary"}
                                                onClick={() => this.handleVoteComment(comment, -1)}
                                            />
                                        </ButtonVote>
                                    </VotesArea>
                                </BottomBar>
                            </CardActions>
                        </Card>
                    </CommentCard>
                )}
            </Root>
        )
    }
}

const mapStateToProps = state => ({
    allPosts: state.posts.allPosts,
    selectIdPost: state.posts.selectIdPost,
    selectPost: state.posts.selectPost
})

const mapDispatchToProps = dispatch => ({
    getPostsDetail: (id) => dispatch(getPostsDetail(id)),
    voteComment: (id, commentId, direction) => dispatch(voteComment(id, commentId, direction))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostCardDetail);