import React, {Component} from 'react';
import PropTypes from 'prop-types';
import PostListItem from './PostListItem';

class PostList extends Component {

    render() {

        const {posts} = this.props;

        if (!posts.length) return <h2>Posts not found</h2>

        return (
            <div>
                {posts.map(p => (
                        <PostListItem
                            id={p.id}
                            title={p.title}
                            body={p.body}
                            key={p.id}
                        />
                    ))}
            </div>
        );
    }
}

PostListItem.propTypes = {
    posts: PropTypes.array
};

export default PostList;