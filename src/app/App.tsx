import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routes } from "../shared/services/routes";
import Header from "../shared/UI/header";
import GetRandomPostPage from "../pages/get-random-post/get-random-post";
import Main from "../pages/main/main";


function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={routes.main.getLink()} element={<Main/>} />
          <Route path={routes.randomPost.getLink()} element={<GetRandomPostPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
