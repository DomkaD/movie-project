import {MainLayout} from "./layouts";
import {Route, Routes} from "react-router-dom";
import {LoginPage, MainPage, MovieDetailsPage, MoviesPage, ProfilePage} from "./pages";

import './styles/index.sass';
import {PrivateRoute} from "./router";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";


function App() {
    return (
        <div>
            <Routes>
                <Route path={''} element={<MainLayout/>}>
                    <Route index element={<MainPage/>}/>
                    <Route path={'movie/:id'} element={<MovieDetailsPage/>}/>
                    <Route path={'movies'} element={<MoviesPage/>}/>
                    <Route path={'login'} element={<LoginPage/>}/>
                    <Route path={'profile'} element={
                        <PrivateRoute>
                            <ProfilePage/>
                        </PrivateRoute>
                    }/>
                    <Route path={'*'} element={<NotFoundPage/>}/>
                </Route>
            </Routes>
        </div>

    );
}

export default App;
