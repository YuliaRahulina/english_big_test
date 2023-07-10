import { BrowserRouter, Route, Routes } from 'react-router-dom';

import HomePage from 'Pages/HomePage';
import Questions from 'Components/Questions';
import Excellent from 'Components/Excellent';
import NotEnough from 'Components/NotEnough';
import Timer from 'Components/Timer';
import Page404 from 'Pages/404Page';

const App = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/Questions" element={<Questions/>} />
            <Route path="/Excellent" element={<Excellent/>} />
            <Route path="/NotEnough" element={<NotEnough/>} />
            <Route path="*" element={<Page404 />} />
        </Routes>
    </BrowserRouter>
);

export default App;
