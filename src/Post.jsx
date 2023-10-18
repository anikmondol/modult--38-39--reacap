import PropTypes from 'prop-types';
import './post.css'

const Post = ({post}) => {
    const {title,userId,body,id} = post;
    return (
        <div className='post'>
            <h4>Title: {title}</h4>
            <p><small>userId: {userId}</small></p>
            <p><small>postId: {id}</small></p>
            <p>{body}</p>
        </div>
    );
};

Post.propTypes ={
    post:PropTypes.object.isRequired
}
export default Post;