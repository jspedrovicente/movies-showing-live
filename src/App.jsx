import RoutesApp from "./routes";
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer, toast } from 'react-toastify'
function App() {
  return (
    <div className="app">
      <ToastContainer autoClose={3000}></ToastContainer>
      <RoutesApp></RoutesApp>
    </div>
  );
}

export default App;
