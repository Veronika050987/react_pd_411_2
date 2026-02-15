// import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Hello from './Hello';
import Length from './Length.js';
import Range from './Range.js';
import Form from './Form.js';
import Count from './Count.js';
import Posts from './posts/Posts.js';

let posts = 
[
  {id:'1', title:'C++ proc', content:'Процедурное программирование на языке C++'},
  {id:'2', title:'C++ OOP', content:'Объектно-ориентированное программирование на языке C++'},
  {id:'3', title:'Windows Desktop Development', content:'Разработка настольных приложений для ОС Windows'}
]
function removePost(id)
{
  alert(posts[id]);
  posts = posts.filter(post => post.id !==id);
}

function App() {
  return (
    <div className="App">
      {/* <Header />
      <Hello />
      <Length />
      <Range />
      <Form />
      <Count /> */}
      <Posts posts = {posts} removePost={removePost}/>
    </div>
  );
}

export default App;
