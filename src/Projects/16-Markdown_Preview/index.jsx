import { BrowserRouter, Route, Routes } from "react-router-dom"
import MarkDownPreview from "./markdown-textarea";
import SharedNav from "./sharednav";
import MarkDownDropFile from "./markdown-dropFile";
import NotFound from "./not-found";
import './project16.css'

const RouterComponent=()=>{
  return <BrowserRouter>
    <Routes>
        <Route path="/" element={<SharedNav/>}>
           <Route index element={<MarkDownPreview/>}/>
           <Route path="file-preview" element={<MarkDownDropFile/>}/>
        </Route>
        <Route path="*" element={<NotFound/>}/>
    </Routes>
  </BrowserRouter>
}

export default RouterComponent;