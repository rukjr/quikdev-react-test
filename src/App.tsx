import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProtectedRoute from "@routes/ProtectedRoute";
import LoginForm from "@features/login/components/LoginForm";
import Header from "@components/Layout/Header";
import Footer from "@components/Layout/Footer";
import PostList from "@features/posts/components/PostList";
import PostItem from "@features/posts/components/PostItem";
import PostForm from "@features/posts/components/PostForm";
import PostEdit from "@features/posts/components/PostEdit";
import { UserProvider } from "@context/UserContext";

const App = () => {
  return (
    <UserProvider>
      <Router>
        <div className="d-flex flex-column min-vh-100">
          <Header />
          <Routes>
            <Route path="/" element={<LoginForm />} />

            <Route path="/dashboard" element={<ProtectedRoute />}>
              <Route index element={<PostList />} />
              <Route path="post/:id" element={<PostItem />} />
              <Route path="post/create" element={<PostForm />} />
              <Route path="post/update/:id" element={<PostEdit />} />
            </Route>
          </Routes>
          <Footer />
        </div>
      </Router>
    </UserProvider>
  );
};

export default App;
