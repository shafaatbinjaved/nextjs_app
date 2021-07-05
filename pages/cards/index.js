import React from "react";
import axios from "axios";
import PostsView from "../../presentationalComponents/Posts";
import Loading from "../../Gerneral/Loading";

class Cards extends React.Component {

    state = {
        loading: true,
        posts: []
    };

    componentDidMount() {
        axios.request({
            url: "https://jsonplaceholder.typicode.com/posts",
            method: "GET",
        }).then(response => {
            if (response?.data && Array.isArray(response.data)) {
                this.setState({
                    loading: false,
                    posts: response.data
                });
            }
        });
    }

    render() {

        let {loading, posts} = this.state;

        let content = <Loading />;

        if (!loading) {
            content = <PostsView
                data={posts}
            />;
        }

        return content;

    }
}

export default Cards;
