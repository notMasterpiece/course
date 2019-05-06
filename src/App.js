import React, {Component} from 'react';
import './App.css';


import Filter from './components/Post/Filter';
import PostList from './components/Post/PostList';
import Spinner from "./components/Spinner/Spinner";
import MoreButton from './components/Post/MoreButton';

const defaultCount = 10;

class App extends Component {

  state = {
    filter: '',
    count: defaultCount,
    loading: true,
    posts: []
  };


  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
          return res.json();
        })
        .then(res => {
          this.setState({
            posts: res,
            loading: false
          })
        })

  }

  onChange = (e) => {
    const target = e.target.value.trim().toLocaleLowerCase();
    this.setState({filter: target})
  };


  showMore = () => {
    this.setState({
      count: this.state.count + defaultCount
    })
  };

  render() {
    const {loading, posts, count, filter} = this.state;
    const filterArray = posts.slice(0, count).filter(p => p.title.toLocaleLowerCase().includes(filter));

    if (loading) return <Spinner />;

    return (
        <div className='app'>
          <h1>Course</h1>

          <Filter onChange={this.onChange}/>
          <PostList
              posts={filterArray}
          />
          {
            posts.length > filterArray.length && filterArray.length
                ? <MoreButton onClick={this.showMore} />
                : null
          }

        </div>
    );
  }
}

export default App;