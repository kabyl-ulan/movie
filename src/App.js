import './App.css';
import {Routes, Route} from 'react-router-dom';
import Header from "./components/Header";
import Popular from "./components/pages/Popular";
import Home from "./components/pages/Home";
import TopRated from "./components/pages/TopRated";
import Latest from "./components/pages/Latest";
import FilmPage from "./components/pages/FilmPage";


function App() {
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path={'/'} element={<Home/>}/>
                <Route path={'/popular'} element={<Popular/>}/>
                <Route path={'/top-rated'} element={<TopRated/>}/>
                <Route path={'/latest'} element={<Latest/>}/>
                <Route path={'/movies/:movieID'} element={<FilmPage/>}/>
            </Routes>

        </div>
    );
}

export default App;
