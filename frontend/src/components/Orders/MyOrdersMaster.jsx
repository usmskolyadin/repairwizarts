import { React, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMasterRequests } from "../../services/request.service";
import '../../scss/orders.css'
import Sidebar from "../sidebar";
import '../../scss/swiper.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router-dom";
// import { Navigation } from "swiper";
import { Pagination } from "swiper";
import Popup from 'reactjs-popup';
import { useService } from "../../hooks/useService";
import SERVER_PATH from "../../constants/SERVER_PATH";
import style from "./MyOrdersMaster.module.css"
import EmptyOrder from "./EmptyOrder";
import OrderRow from "./OrderRow";

import NavigationOrdersClient from "../Settings/NavigationOrdersClient";
import ModalEditOrder from "./ModalEditOrder";
import PaginationPages from "../Settings/PaginationPages";

function MyOrdersMaster() {

    const [isVisibleModalEdit, setVisibleModalEdit] = useState(false)

    return (

        <>
            {isVisibleModalEdit && <ModalEditOrder setVisibleModalEdit={setVisibleModalEdit} />}

            <div className={style.block_main}>
                <div className={style.order_row}>
                    <h1>Все заказы</h1>

                    <div className={style.search_flex}>
                        <div className={style.search_wrap}>
                            <input className={style.search_input} type="text" placeholder="поиск.." />
                            <div>
                                <img className={style.search_icon} src="/img/search.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className={style.content_wrap}>

                    <NavigationOrdersClient />

                    <div className={style.table_wrap}>
                        <table className={style.table}>
                            <tr>
                                <th>Название</th>
                                <th>Продавец</th>
                                <th>Заказан</th>
                                <th>Стоимость</th>
                                <th>Статус</th>
                            </tr>
                            <tr>
                                <td>
                                    <img src="/img/icons/icomoon-free_pencil.svg" alt="" style={{ marginRight: "10px", cursor: "pointer" }} onClick={() => setVisibleModalEdit(true)} />
                                    <Link
                                        to={window.location.pathname.includes("/master")
                                            ? "/master/requests/my_order/1"
                                            : "/client/requests/my_order/1"
                                        }
                                    >Название устройства</Link>
                                </td>
                                <td>
                                    <img src="/img/profile.png" alt="" style={{ marginRight: "10px" }} />
                                    Ник
                                </td>
                                <td>13 января, 22:26</td>
                                <td>2000 руб</td>
                                <td>
                                    <p className={style.status_ok}>выполнено</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <img src="/img/icons/icomoon-free_pencil.svg" alt="" style={{ marginRight: "10px", cursor: "pointer" }} onClick={() => setVisibleModalEdit(true)} />
                                    <Link
                                        to={window.location.pathname.includes("/master")
                                            ? "/master/requests/my_order/1"
                                            : "/client/requests/my_order/1"
                                        }
                                    >Название устройства</Link>
                                </td>
                                <td>
                                    <img src="/img/profile.png" alt="" style={{ marginRight: "10px" }} />
                                    Ник
                                </td>
                                <td>13 января, 22:26</td>
                                <td>2000 руб</td>
                                <td>
                                    <p className={style.status_cancel}>отменено</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <img src="/img/icons/icomoon-free_pencil.svg" alt="" style={{ marginRight: "10px", cursor: "pointer" }} onClick={() => setVisibleModalEdit(true)} />
                                    <Link
                                        to={window.location.pathname.includes("/master")
                                            ? "/master/requests/my_order/1"
                                            : "/client/requests/my_order/1"
                                        }
                                    >Название устройства</Link>
                                </td>
                                <td>
                                    <img src="/img/profile.png" alt="" style={{ marginRight: "10px" }} />
                                    Ник
                                </td>
                                <td>13 января, 22:26</td>
                                <td>2000 руб</td>
                                <td>
                                    <p className={style.status_working}>в работе</p>
                                </td>
                            </tr>
                        </table>


                    </div>



                    {/* для мобильной */}
                    <div className={style.cards__wrap}>
                        <div className={style.card_block}>
                            <Link
                                to={window.location.pathname.includes("/master")
                                    ? "/master/requests/my_order/1"
                                    : "/client/requests/my_order/1"
                                }
                            >Название устройства</Link>
                            <p className={style.card__date}>13 января, 22:26</p>
                            <div className={style.card__line}></div>
                            <div className={style.card__row}>
                                <div className={style.card__profile}>
                                    <img src="/img/profile.png" alt="" style={{ marginRight: "10px" }} />
                                    Ник
                                </div>
                                <div className={style.card__col}>
                                    <p className={style.status_working}>в работе</p>
                                    <p className={style.card__price}>2000 руб</p>
                                </div>
                            </div>
                        </div>

                        <div className={style.card_block}>
                            <Link
                                to={window.location.pathname.includes("/master")
                                    ? "/master/requests/my_order/1"
                                    : "/client/requests/my_order/1"
                                }
                            >Название устройства</Link>
                            <p className={style.card__date}>13 января, 22:26</p>
                            <div className={style.card__line}></div>
                            <div className={style.card__row}>
                                <div className={style.card__profile}>
                                    <img src="/img/profile.png" alt="" style={{ marginRight: "10px" }} />
                                    Ник
                                </div>
                                <div className={style.card__col}>
                                    <p className={style.status_ok}>выполнено</p>
                                    <p className={style.card__price}>2000 руб</p>
                                </div>
                            </div>
                        </div>

                        <div className={style.card_block}>
                            <Link
                                to={window.location.pathname.includes("/master")
                                    ? "/master/requests/my_order/1"
                                    : "/client/requests/my_order/1"
                                }
                            >Название устройства</Link>
                            <p className={style.card__date}>13 января, 22:26</p>
                            <div className={style.card__line}></div>
                            <div className={style.card__row}>
                                <div className={style.card__profile}>
                                    <img src="/img/profile.png" alt="" style={{ marginRight: "10px" }} />
                                    Ник
                                </div>
                                <div className={style.card__col}>
                                    <p className={style.status_cancel}>выполнено</p>
                                    <p className={style.card__price}>2000 руб</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={style.pagination_wrap}>
                            <PaginationPages />
                            <div className={style.select_pages_wrap}>
                                <p className={style.select_pages_wrap}>Показать:</p>
                                <select className={style.select_pages__select} name="" id="">
                                    <option value="">10 на странице</option>
                                    <option value="">20 на странице</option>
                                    <option value="">50 на странице</option>
                                </select>
                            </div>
                        </div>
                </div>
            </div>
        </>
    )
}


export default MyOrdersMaster;
