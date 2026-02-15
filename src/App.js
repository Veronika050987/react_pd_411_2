// import logo from './logo.svg';
import './App.css';
import React from "react";
import Header from './Header';
import Hello from './Hello';
import Length from './Length.js';
import Range from './Range.js';
import Form from './Form.js';
import Count from './Count.js';
import Posts from './posts/Posts.js';

class App extends React.Component {
  state = {
    posts:
      [
        { id: '1', title: 'C++ proc', content: 'Процедурное программирование на языке C++' },
        { id: '2', title: 'C++ OOP', content: 'Объектно-ориентированное программирование на языке C++' },
        { id: '3', title: 'Windows Desktop Development', content: 'Разработка настольных приложений для ОС Windows' }
      ]
  }
  removePost = (id) => {
    alert(id);
    //alert(this.state.posts[id]);
    //posts = posts.filter(post => post.id !== id);
    this.setState({posts: this.state.posts.filter(post => post.id !==id)});
  }

render() {
  return (
    <div className="App">
      {/* <Header />
      <Hello />
      <Length />
      <Range />
      <Form />
      <Count /> */}
      <Posts posts={this.state.posts} removePost={this.removePost} />
    </div>
  );
}
}
export default App;
