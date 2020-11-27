import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import SearchPage from "./components/SearchPage";
import Category from "./components/Category";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Playlist from "./components/Playlist";
import SingleAlbum from "./components/SingleAlbum";
import Home from "./components/Home";
import Artists from "./components/Artists";
import Albums from "./components/Albums";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />

        <Route path="/" exact component={Home} />
        <Route path="/albums" exact component={Albums} />
        <Route path="/artists" exact component={Artists} />
        <Route path="/searchpage" component={SearchPage} />
        <Route path="/category" component={Category} />
        <Route path="/playlist" component={Playlist} />
        <Route path="/Single" component={SingleAlbum} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
