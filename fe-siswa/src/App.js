import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AddSiswa from "./components/AddSiswa";
import EditSiswa from "./components/EditSiswa";
import ListSiswa from "./components/ListSiswa";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ListSiswa />}></Route>
        <Route path='/add' element={<AddSiswa />}></Route>
        <Route path='/edit/:id' element={<EditSiswa />}></Route>
      </Routes>
    </BrowserRouter>
    // <div className='App'>
    //   <ListSiswa />
    // </div>
  );
}

export default App;
