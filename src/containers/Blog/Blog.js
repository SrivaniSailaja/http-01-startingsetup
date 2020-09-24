import React, { Component,Suspense } from 'react';
//import axios from 'axios';
import {Route,NavLink,Switch,Redirect} from 'react-router-dom';
// import FullPost from '../../components/FullPost/FullPost';
// import NewPost from '../../components/NewPost/NewPost';
import Posts from './Posts/Posts';
//import NewPost from './NewPost/NewPost';
import asyncComponent from '../../hoc/asyncComponent';

import './Blog.css';

import axios from '../../axios';
const AsyncNewPost = React.lazy(()=> import('./NewPost/NewPost') )
// const AsyncNewPost = asyncComponent(()=>{
//   return import('./NewPost/NewPost');
// })




class Blog extends Component {

  state={
    auth:true
  }
    render () {

        return (
            <div className="Blog">
              <header>
                <nav>
                  <ul>
                    <li><NavLink to='/posts'
                    exact
                    activeClassName='active'>Posts</NavLink></li>
                    <li><NavLink to={{
                      pathname:'/new-post',
                      hash:'#submit',
                      search:'?quick-submit=true'
                    }}>New Post </NavLink></li>

                  </ul>
                </nav>
              </header>
              {/* <Route path="/" exact render={()=><h1>Home</h1>} />
               <Route path="/" exact render={()=><h1>Home2</h1>} /> */}
               <Switch>

              {/*{this.state.auth?<Route path="/new-post"  component ={AsyncNewPost} />:null} */}
              <Route path='/new-post' render ={()=>(
                <Suspense fallback={<div>Loading...</div>}>
                  <AsyncNewPost/>
                </Suspense>
              )} />
              <Route path="/posts"  component ={Posts} />
              <Route render={()=><h1>Not Found</h1>} />
              {/*<Redirect from ='/' to ='/posts' />*/}
              </Switch>
            </div>
        );
    }
}

export default Blog;
