import { BrowserRouter, Route, Routes  } from 'react-router-dom';
import App from "./App"
import ImageGrid from "./components/ImageGrid"


  
  function NotFound() {
    return (
      <div>
        <h2>404 Not Found</h2>
        <p>The page you're looking for doesn't exist.</p>
      </div>
    );
  }

function Router() {
    return (
      <BrowserRouter>
        <Routes >
          <Route exact path="/" element={<App/>} />
          <Route path="/search/photos" element={<ImageGrid/>} />
          <Route element={<NotFound/>} />
        </Routes >
      </BrowserRouter>
    );
  }

  
export default Router;