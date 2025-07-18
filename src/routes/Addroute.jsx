import { Route, Routes } from 'react-router-dom'
import NotFoundPage from '../pages/NotFoundPage'
import Home from '../pages/Home'
import Login from '../pages/Login'
// import Signup from '../pages/Signup'
import StatusGrid from '../pages/StatusGrid'
import Sapservice from '../pages/sapservice'
import { Fragment } from 'react'
import PrivateRoutes from './Private_route'; // adjust the path if needed
import YoungBazerHealth from '../pages/YoungBazerHealth'

const Addroute = () => {
    return (
        <Fragment>
            <Routes>
                <Route element={<PrivateRoutes />} >
                    {""}
                    <Route path='/' element={<Home />} />
                    <Route path='/sapservices' element={<StatusGrid />} />
                    <Route path='/youngBazer' element={<YoungBazerHealth />} />
                    <Route path='/statusgrid' element={<Sapservice />} />
                </Route>
                <Route path='/login' element={<Login />} />
                <Route path='*' element={<NotFoundPage />} />
            </Routes>
        </Fragment>


    )
}

export default Addroute



