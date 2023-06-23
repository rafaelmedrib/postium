// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set } from '@redwoodjs/router'

import ScaffoldLayout from 'src/layouts/ScaffoldLayout'

import MainLayout from './layouts/MainLayout/MainLayout'

const Routes = () => {
  return (
    <Router>
      <Route path="/articles" page={ArticlesPage} name="articles" />
      <Set wrap={MainLayout}>
        <Route path="/home" page={HomePage} name="home" />
        <Route path="/about" page={AboutPage} name="about" />
        <Set wrap={ScaffoldLayout} title="Posts" titleTo="posts" buttonLabel="New Post" buttonTo="newPost">
          <Route path="/posts/new" page={PostNewPostPage} name="newPost" />
          <Route path="/posts/{id:Int}/edit" page={PostEditPostPage} name="editPost" />
          <Route path="/posts/{id:Int}" page={PostPostPage} name="post" />
          <Route path="/posts" page={PostPostsPage} name="posts" />
        </Set>
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
