import React, {Component} from 'react';
import PropTypes from 'prop-types';

class PostListItem extends Component {


    shouldComponentUpdate(nextProps, nextState) {
        const {id, title, body} = this.props;
        if (id === nextProps.id && title === nextProps.title && body === nextProps.body) {
            return false;
        }
    }

    render() {
        const {id, body, title} = this.props;

        return (
            <div className='post-item'>
                <h2>{title}</h2>
                <p>{body}</p>
                <span>{id}</span>
            </div>
        );
    }
}

PostListItem.propTypes = {
    id: PropTypes.number.isRequired,
    body: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};

export default PostListItem;