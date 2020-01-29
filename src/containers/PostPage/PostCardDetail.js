import React, { Component } from "react";
import styled from "styled-components";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { connect } from "react-redux";
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

const Root = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`

const PostCard = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
`

const BottomBar = styled.span`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const VotesArea = styled.div`
    display: flex;
    padding: 3px;
    align-items: center;   
`

const VotesCount = styled.span`
    padding: 5px;
`

const Comments = styled.div`
    padding: 5px;
`

class PostCardDetail extends Component {

    render() {

        const { username, text, votesCount, title, userVoteDirection, id, commentsNumber } = this.props.selectPost

        return (
            <Root>
                <PostCard>
                    <Card >
                        <CardContent>
                            <Typography 
                            color="textSecondary" gutterBottom>
                                {username}
                            </Typography>
                            <Typography variant="h5" component="h2">
                                {title}
                            </Typography>
                            <Typography variant="body2" component="p">
                                {text}
                            </Typography>
                        </CardContent>

                        <CardActions>
                            <BottomBar>
                                <VotesArea>
                                    <span>
                                        <ArrowUpwardIcon
                                            color={userVoteDirection !== 1 ? "" : "primary"}
                                            
                                        />
                                    </span>
                                    <VotesCount> {votesCount} </VotesCount>
                                    <span>
                                        <ArrowDownwardIcon
                                            color={userVoteDirection !== -1 ? "" : "secondary"}
                                        
                                        />
                                    </span>
                                </VotesArea>
                                <Comments>
                                    <Button
                                        disabled
                                        size="small"
                                        value={id}
                                        name="id"
                                    >
                                        {commentsNumber} comentários
                                        </Button>
                                </Comments>
                            </BottomBar>
                        </CardActions>
                    </Card>
                </PostCard>
            </Root>
        );
    }
}

const mapStateToProps = state => ({
    selectPost: state.posts.selectPost
})

export default connect(mapStateToProps)(PostCardDetail);