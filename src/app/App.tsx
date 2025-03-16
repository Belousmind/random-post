import Landing from '../pages/landing/landing'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'

function App() {

	return (
    <BrowserRouter>
      <Routes>
        <Route path="/landing" element={<Landing/>}></Route>
      </Routes>
    </BrowserRouter>
	)
}

export default App