import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Nav } from './componants/Nav';
import { Footer } from './componants/Footer';
import SignUp from './componants/SignUp';
import PrivateComponant from './componants/PrivateComponant';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route element={<PrivateComponant/>}>
        <Route path="/" element={<h1>home page</h1>} />
        <Route path="/add" element={<h1>Add product page</h1>} />
        <Route path="/update" element={<h1>Update page</h1>} />
        <Route path="/logout" element={<h1>Logout page</h1>} />
        <Route path="/profile" element={<h1>Profile page</h1>} />
        </Route>
        <Route path="/signup" element={<SignUp/>} />
      </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
