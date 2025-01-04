import { useEffect } from 'react';
import Header from "./Header";
import { fetchUser, selectUserStatus } from '../slices/user.slice';
import '../scss/swiper.css'
import Footer from './Footer'
import {
    useDispatch,
    useSelector
} from 'react-redux';
import { Routes, Route, useLocation, useNavigate, matchPath } from "react-router-dom";

import Home from "./Home";
import PickLog from "./Registration/pick-log";
import Register from "./Registration/register";
import RegisterMaster from "./Registration/register-master";
import Remont from "./remont";
import { ServiceDetail } from "./Service";
import ChoiceOfReplenishmentMethod from "./ChoiceOfReplenishmentMethod/ChoiceOfReplenishmentMethod";
import FChat from "./full-chat/Chat";
import Applications from "./Applications/applications";

// Order imports
import MyOrders from "./Orders/Myorders";
import AllOrders from "./Orders/Allorders";

import SettingsAll from "./Settings/Settings-all";
import Profile from "./Settings/Profile";
import Services from "./Settings/services";
import Reviews from './Reviews'

// after login
import ProfileFH from './full-height/ProfileFH'
import WalletFH from './full-height/WalletFH'

// after login end

import Allapplications from './Applications/Allapplications'
import MapMaster from './Pick-master/masters'
import Performed from './Applications/performed'
import Canceled from './Applications/canceled'
import ProfileNumber from "./Chat/profileNumber";
import OfferAService from "./Orders/OfferAService";
import AddDevices from "./addDevices/AddDevices";
import ReviewsMaster from "./Pick-master/Reviews-master";
import AddedDevices from './addDevices/AddedDevices'
import TitleService from "./addDevices/TitleService";
import Login from "./Registration/Login";
import Archive from "./addDevices/Archive";
import Mysuggest from "./mysuggest";
import ClientRoute from './ClientRoute';
import MasterRoute from './MasterRoute';
import Notifications from './Notifications/Notifications';
import WalletConfirm from './ChoiceOfReplenishmentMethod/WalletConfirm';
import Pictures from './Settings/Pictures';
import Article from './Article';
import FetchStatus from '../constants/FetchStatus';
import { fetchMessages } from '../slices/messages.slice';
import { fetchServices, selectServicesStatus } from '../slices/services.slice';
import { setAuthorization, setLoading, setLocation, setMaster } from '../slices/ui.slice';
import { getLocation } from '../services/location.service';
import { getToken } from '../services/token.service';
import { getUserMode } from '../services/user.service';
import PersonalRequests from './Orders/PersonalRequests';
import Articles from './Article/Articles';

function App() {
    const __location__ = useLocation()
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const userStatus = useSelector(selectUserStatus)

    useEffect(() => {
        const isMaster = getUserMode()
        const location = getLocation()
        
        if (location) {
            dispatch(setLocation(location))
        }
        if (isMaster) {
            dispatch(setMaster(true))
        }
    }, [])

    useEffect(() => {
        const token = getToken()

        if (userStatus === FetchStatus.IDLE) {
            if (token) {
                dispatch(fetchUser())
                dispatch(fetchMessages())
            } else {
                dispatch(setLoading(false))
            }

            dispatch({ type: 'notifications/disconnect' })
            dispatch(fetchServices())
        }
        if (userStatus === FetchStatus.SUCCEEDED) {
            dispatch({ type: 'notifications/connect' })
            dispatch(setLoading(false))
            dispatch(setAuthorization(true))
        }
        if (userStatus === FetchStatus.FAILED) {
            dispatch(setLoading(false))
            navigate("/login")
        }
    }, [userStatus])

    // FIXME: such a moron made this
    setTimeout(() => {
        if (matchPath('/services/:id', __location__.pathname)) {
            let hg = document.querySelector('.hhun')
            hg?.classList.add('nhh')
        }
    }, 1000);

    return (
        <div className='hhun'>
            <Notifications />
            <Header />
            <main>
                <Routes>
                    <Route>
                        <Route index element={<Home />} />
                        <Route path="devices/:id" element={<Remont />} />
                        <Route path="services/:id" element={<ServiceDetail />} />
                        <Route path="articles/:id" element={<Article />} />
                        <Route path="reviews" element={<Reviews />} />
                        <Route path="articles" element={<Articles />} />
                        <Route path="contact" element={<MapMaster />} />
                        <Route path="login" element={<Login />} />
                        <Route path="register">
                            <Route index element={<PickLog />} />
                            <Route path="master" element={<RegisterMaster />} />
                            <Route path="client" element={<Register />} />
                        </Route>
                    </Route>
                    <Route path="client" element={<ClientRoute />}>
                        <Route path="settings">
                            <Route index element={<ProfileFH />} />
                            <Route path="picture" element={<WalletFH />} />
                        </Route>
                        <Route path="requests">
                            <Route index element={<AddedDevices />} />
                            <Route path="archived" element={<Archive />} />
                            <Route path="create">
                                <Route path="title" element={<TitleService />} />
                                <Route path="data" element={<AddDevices />} />
                            </Route>
                        </Route>
                        <Route path="offers/:id" element={<Mysuggest />} />
                        <Route path="chat" element={<FChat />} />
                        <Route path="chat/:id" element={<FChat />} />
                        <Route path="feedback/:username" element={<ReviewsMaster />} />
                    </Route>
                    <Route basename="master" path="master" element={<MasterRoute />}>
                        <Route path="wallet" element={<ChoiceOfReplenishmentMethod />} />
                        <Route path="wallet/:id" element={<WalletConfirm />} />
                        <Route path="settings">
                            <Route index element={<SettingsAll />} />
                            <Route path="profile" element={<Profile />} />
                            <Route path="services" element={<Services />} />
                            <Route path="pictures" element={<Pictures />} />
                        </Route>
                        <Route path="chat/" element={<FChat baseRoute="/master/chat/" showSidebar />} />
                        <Route path="chat/:id" element={<FChat baseRoute="/master/chat/" showSidebar />} />
                        <Route path="orders">
                            <Route index element={<Applications />} />
                            <Route path="completed" element={<Performed />} />
                            <Route path="canceled" element={<Canceled />} />
                            <Route path="all" element={<Allapplications />} />
                        </Route>
                        <Route path="feedback" element={<ProfileNumber />} />
                        <Route path="requests">
                            <Route index element={<AllOrders />} />
                            <Route path="personal" element={<PersonalRequests />} />
                            <Route path=":id" element={<MyOrders />} />
                        </Route>
                        <Route path="offers/create/:id" element={<OfferAService />} />
                    </Route>
                </Routes>
            </main>
            {__location__.pathname.includes("/chat") || (
                <Footer />
            )}
        </div>
    );
}

export default App;
