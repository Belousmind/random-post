import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ROUTES } from "../shared/services/routes";
import Header from "../shared/UI/header";
import GetRandomPostPage from "../pages/get-random-post/get-random-post";
import Main from "../pages/main/main";


function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={ROUTES.HOME} element={<Main/>} />
          <Route path={ROUTES.POST} element={<GetRandomPostPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
