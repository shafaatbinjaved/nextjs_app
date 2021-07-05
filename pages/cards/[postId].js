import React from "react";
import axios from "axios";
import { withRouter } from 'next/router';
import SinglePostView from "../../presentationalComponents/SinglePost";
import Loading from "../../Gerneral/Loading";

class SinglePost extends React.Component {

    state = {
        loading: true,
        post: null,
        error: false
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        let prevPostId = prevProps.router.query?.postId;
        let currentPostId = this.props.router.query?.postId;

        if (prevPostId === currentPostId) {
            return;
        }

        let postId = parseInt(currentPostId);
        if (postId < 1 || postId > 100 ) {
            this.setState({
                error: true
            });
            return;
        }

        axios.request({
            url: `https://jsonplaceholder.typicode.com/posts/${postId}`,
            method: "GET",
        }).then(response => {
            if (response?.data) {
                this.setState({
                    loading: false,
                    post: response.data
                });
            }
        });
    }

    render() {

        let {loading, post} = this.state;

        let content = <Loading />;

        if (!loading) {
            content = <SinglePostView
                data={post}
            />;
        }

        return content;

    }

}

export default withRouter(SinglePost);
