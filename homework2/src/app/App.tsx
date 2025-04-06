import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routes } from "@services/routes";
import Header from "@UI/header";
import RandomPostPage from "@pages/random-post/random-post";
import Main from "@pages/main/main";


function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={routes.main.pathname} element={<Main/>} />
          <Route path={routes.randomPost.pathname} element={<RandomPostPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
