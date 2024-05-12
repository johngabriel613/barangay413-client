import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom";
import RootLayout from "./template/RootLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Request from "./pages/Request";
import ProjAct from "./pages/ProjAct";
import Feedback from "./pages/Feedback";
import Helpline from "./pages/Helpline";
import { action as requestAction } from "./components/request/Modal";
import { useModal } from "./hooks/useModal";


function App() {
  const {setShowModal} = useModal()

  const router = createBrowserRouter(createRoutesFromElements(
    <Route element={<RootLayout/>}>
      <Route index path="/" element={<Home/>}/>
      <Route index path="/about" element={<About/>}/>
  
      <Route index path="/request" element={<Request/>} action={requestAction(setShowModal)}/>
  
      <Route index path="/proj-act" element={<ProjAct/>}/>
      <Route index path="/feedback" element={<Feedback/>}/>
      <Route index path="/helpline" element={<Helpline/>}/>
    </Route>
  ))
  
  return (
    <RouterProvider router={router}/>
  )
}

export default App
