import styles from "./MyOrder.module.css"
import { Link, useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import ModalConfirmMaster from "./ModalConfirmMaster";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "../Service/serviceDetail.module.scss"
import ModalDelete from "./ModalDelete";
import ModalEditOrder from "./ModalEditOrder";
import ModalConfirmPause from "../addDevices/ModalConfirmPause";
import Popup from "reactjs-popup";
import ModalConfirmPauseClientOrder from "../addDevices/ModalConfirmPauseClientOrder";

function MyOrder() {
    const navigate = useNavigate();
    const [visibleModalConfirmMaster, setVisibleModalConfirmMaster] = useState(false)
    const [visibleBlockPayment, setVisibleBlockPayment] = useState(false)
    const [visibleModalDelete, setVisibleModalDelete] = useState(false)
    const [visibleModalEditOrder, setVisibleModalEditOrder] = useState(false)
    const [selectedIdx, setSelectedIdx] = useState(0);
    const [errorBalance, setErrorBalance] = useState(true)
    const [errorCash, setErrorCash] = useState(true)
    const [errorSumm, setErrorSumm] = useState(true)
    const [isVisibleConfirmPause, setVisibleConfirmPause] = useState(false)
    const [orderstatus, setOrderStatus] = useState("сбор предложений")
    // тестовый список для слайдера
    const [photos, setPhotos] = useState([
        "https://cdn.motor1.com/images/mgl/VzMq0z/s1/bugatti-chiron-1500.webp",
    ]);

    // загрузка фото
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        console.log("внутри функции");
        
        
        if (file) {
            // Создаем URL для выбранного изображения
            const imageUrl = URL.createObjectURL(file);
        
            // добавить фото в общий список
            var spisok = [...photos]
            spisok.push(imageUrl)
            setPhotos(spisok)
            console.log(spisok);
        }
    };

    const [price, setPrice] = useState("")
    const [title, setTitle] = useState("")
    const [message, setMessage] = useState("")
    const [status, setStatus] = useState("")

    return (
        <>
            {visibleModalConfirmMaster ? <ModalConfirmMaster setVisibleModalConfirmMaster={setVisibleModalConfirmMaster} /> : null}
            {/* блок с оплатой */}
            {visibleBlockPayment
                ? <div className={style.blockPayment_wrap}>
                    {errorBalance
                        ? <div className={style.error}>Пополните, пожалуйста, баланс на 500р</div>
                        : null}

                    {errorCash
                        ? <div className={style.error}>Оплатите мастеру при встрече</div>
                        : null}

                    {errorSumm
                        ? <div className={style.error}>С вашего баланса спишется 500 рублей </div>
                        : null}

                    <div className={style.blockPayment}>
                        <div className={style.close} onClick={() => setVisibleBlockPayment(false)}>
                            <img src="/img/close.svg" alt="" />
                        </div>

                        <h2>Оплата</h2>
                        <div className={style.row}>
                            <div className={style.block}>
                                <p>Оплата через сайт</p>
                                <div className={style.radio}>
                                    <input type="radio" id="inputSite" name="radioPayments" checked={selectedIdx == 0} onChange={() => setSelectedIdx(0)} />
                                    <label htmlFor="inputSite">Баланс: 0р</label>
                                </div>
                                <p>Обычная цена сделки без риска</p>
                                <p className={style.mini_text}>+ 9% при пополнение кошелька баланса. Цена в отклике исполнителя уже включает в себя комиссию</p>
                            </div>

                            <div className={style.block} style={{ position: "relative", top: "35px" }}>
                                {/* <p>Оплата наличными</p> */}
                                <div className={style.radio}>
                                    <input type="radio" id="inputCash" name="radioPayments" checked={selectedIdx == 1} onChange={() => setSelectedIdx(1)} />
                                    <label htmlFor="inputCash">Оплата наличными</label>
                                </div>
                                <p className={style.mini_text}>Оплата напрямую исполнителю <br /> Без гарантий и компенсаций RepairWizarts: вы напрямую договариваетесь с исполнителем об условиях и способе оплаты.</p>
                            </div>
                        </div>

                        <div className={style.button} onClick={() => { setVisibleBlockPayment(false); setVisibleModalConfirmMaster(true) }}>Перейти</div>
                    </div>
                </div>
                : null}
            {isVisibleConfirmPause? <ModalConfirmPauseClientOrder setVisibleAddFeedback={setVisibleConfirmPause}  setOrderStatus={setOrderStatus}  /> : null}
            {visibleModalDelete ? <ModalDelete setVisibleDeleteModal={setVisibleModalDelete}/> : null}
            {visibleModalEditOrder ? <ModalEditOrder setVisibleModalEdit={setVisibleModalEditOrder} /> : null}


            {/* <Sidebar /> */}
            <div className={styles.main_block}>
                <div className={styles.heading_row}>
                    <h1>Мое предложение (31025)</h1>
                    <button className={styles.button_back} onClick={() => navigate(-1)}>Назад</button>
                </div>

                <div className={styles.block_order}>
                    <div className={styles.left}>
                        <div className={styles.left_row}>
                            <img
                                src="/img/profil_img/2.png"
                                width="120px"
                                height="120px"
                                style={{ borderRadius: "60px", objectFit: "cover" }}
                                alt=""
                            />
                            <div className={styles.block_info}>
                                <h2>Имя и фамилия с заявки инфа</h2>
                                <h3>Размещено 10 проектов</h3>
                                <h3>Нанято 100 %</h3>
                            </div>
                        </div>
                        <div className={styles.description}>
                            <p>Название устройства инфа со страници н1</p>
                            <p>клиент описывает свою проблему, страница н1</p>
                        </div>
                        <div className={styles.left_row_bottom}>
                            <p>Осталось 70 часа 45 минут </p>
                            <p className={styles.view}><img src="/img/icons/eye.png" alt="" />20 просмотрено</p>
                        </div>
                    </div>
                    <div className={styles.right}>
                        <p>Желаемый бюджет <span className={styles.price}>1000 ₽</span></p>

                        <div className={styles.swiper}>
                            <Swiper
                                slidesPerView={4}
                                spaceBetween={30}
                                navigation={true}
                                className="myMiniSwiper"
                                modules={[Navigation]}
                                breakpoints={{
                                    0: {
                                        slidesPerView: 1
                                    },
                                    800: {
                                        slidesPerView: 1
                                    },
                                    1124: {
                                        slidesPerView: 1
                                    },
                                }}
                            >

                                {[1, 2, 3].map((_, index) =>
                                    <SwiperSlide key={index}>
                                        <div className={styles.miniSlider}>
                                            <img src="/img/sentence_img/iphone-x.png" alt="" />
                                        </div>
                                    </SwiperSlide>
                                )}
                            </Swiper>
                        </div>

                        {/* <Swiper pagination={true} navigation={{
                                nextEl: ".image-swiper-button-next",
                                prevEl: ".image-swiper-button-prev",
                            }} modules={[Navigation, Pagination]} 
                            slidesPerView="auto" 
                            className={styles.swiper}>
                                <div className="swiper-button image-swiper-button-next">
                                    <img className="image-swiper-button-next" src="/img/sliderright.png" alt="asdfdsa" />
                                </div>
                                <div className="swiper-button image-swiper-button-prev">
                                    <img src="/img/sliderleft.png" alt="sdfdsa" />
                                </div>
                                {[1,2,3].map((v, i) => (
                                    <SwiperSlide  key={i}>
                                        <img src="/img/sentence_img/iphone-x.png" alt="" className="vpupi" />
                                    </SwiperSlide>
                                ))}
                            </Swiper> */}
                        <div className={styles.order_row}>
                            <div className={orderstatus == "сбор предложений" ? styles.order_button : styles.order_button_pause}>
                                {orderstatus == "сбор предложений" 
                                 ? "Сбор предложений"
                                 : "На паузе"}
                            </div>
                            <div className={styles.buttons_icon}>
                                <div onClick={() => setVisibleConfirmPause(true)}
                                    // setOrderStatus("pause")}
                                    >
                                    <img src="/img/pause.png" alt="" />
                                </div>
                                <div >
                                    {/* <img src="/img/pencil.png" alt="" /> */}
                                    <Popup
                                    // && <img src="/img/pencil.png" alt="" />
                                    trigger={true && <img src="/img/pencil.png" alt="" />}
                                    modal
                                    nested
                                >
                                    {close => (
                                        <div className="modal-content order_edit-modal modal-content__edit" style={{  backgroundColor: "white", maxWidth: "95%" }}>
                                            <span onClick={close}><img className="close" src="/img/img-delete.png" alt="" /></span>
                                            
                                            <div className={style.top_block}>
                                                <h1 style={{textAlign: "center"}}>Редактирование проекта</h1>
                                                <div className='modal-content__row_swiper' style={{flexWrap: "wrap"}}>
                                                    <Swiper
                                                        slidesPerView={4}
                                                        spaceBetween={30}
                                                        navigation={true}
                                                        modules={[Navigation]}
                                                        className="mySwiper"
                                                        breakpoints={{
                                                            0: {
                                                                slidesPerView: 1
                                                            },
                                                            800: {
                                                                slidesPerView: 1
                                                            },
                                                            1124: {
                                                                slidesPerView: 1
                                                            },
                                                        }}
                                                    >

                                                        {photos.map((src, index) =>
                                                            <SwiperSlide key={index} className="">
                                                                <img src={src} alt="" />
                                                            </SwiperSlide>
                                                        )}
                                                    </Swiper>

                                                    <div className={`photo_upload ${style.photo_upload_block}`}>
                                                        <div className="photo_upload-img ">
                                                            <label htmlFor="upimg">
                                                                <img src="/img/accommodation_img/photo.png" alt="no photo"/>
                                                            </label>
                                                            <input
                                                                type="file"
                                                                onChange={handleImageChange}
                                                                accept="image/png, image/jpeg"
                                                                multiple
                                                                id="upimg"
                                                                style={{display: "none"}}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <form onSubmitCapture={console.log("form")} onSubmit={close} style={{display: 'flex', flexDirection: "column"}}>
                                                <p className='form__light-text'>Заголовок
                                                    <img className='modal_edit__icon' src="/img/blank.png" alt="" />
                                                </p>
                                                <input type="text" placeholder="Заголовок" value={title} onChange={(e) => setTitle(e.target.value)} />
                                                
                                                <p className='form__light-text'>Описание заказа
                                                    <img className='modal_edit__icon' src="/img/pencil_modal.svg" alt="" />
                                                </p>
                                                <textarea className="descdetail" placeholder='Описание заказа' style={{ resize: 'none' }} value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                                                
                                                <p className='form__light-text'>Категория услуг
                                                    <img className='modal_edit__icon' src="/img/multi_box.png" alt="" />
                                                </p>
                                                <div className='modal__many_select'>
                                                    <select name="" id="">
                                                        <option value="">Выбери</option>
                                                        <option value="">Выбери</option>
                                                        <option value="">Выбери</option>
                                                    </select>
                                                    <select name="" id="">
                                                        <option value="">Выбери</option>
                                                        <option value="">Выбери</option>
                                                        <option value="">Выбери</option>
                                                    </select>
                                                    <select name="" id="">
                                                        <option value="">Выбери</option>
                                                        <option value="">Выбери</option>
                                                        <option value="">Выбери</option>
                                                    </select>
                                                </div>

                                                <p className='form__light-text'>Бюджет
                                                    <img className='modal_edit__icon' src="/img/price_icon.png" alt="" />
                                                </p>
                                                <input type="text" style={{width: "200px", marginBottom: "20px"}} placeholder="Цена" value={price} onChange={(e) => setPrice(e.target.value)} />
                                                
                                                <button style={{width: "200px", margin: "auto"}} className="done button__edit" type='submit'>Сохранить</button>
                                            </form>
                                        </div>
                                    )}
                                </Popup>
                                </div>
                                <div onClick={()=>setVisibleModalDelete(true)}>
                                    <img src="/img/basket.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <section>
                    <h2>4 Предложения</h2>
                    <p className={styles.heading}>Номер профиля (1023)</p>

                    <div className={styles.about_block}>
                        <div className={styles.about_row}>
                            <div className={styles.left_row}>
                                <img
                                    src="/img/profil_img/2.png"
                                    width="80px"
                                    height="80px"
                                    style={{ borderRadius: "60px", objectFit: "cover" }}
                                    alt=""
                                />
                                <div className={styles.block_info}>
                                    <p>Алексей Михеев</p>
                                    <p>Частный мастер/Сервис </p>
                                    <p className={styles.star_block}>
                                        <img src="/img/img-star.png" alt="" />
                                        <img src="/img/img-star.png" alt="" />
                                        <img src="/img/img-star.png" alt="" />
                                        <img src="/img/img-star.png" alt="" />
                                        <img src="/img/img-star.png" alt="" />
                                        23
                                    </p>
                                </div>
                            </div>

                            <div>
                                <p className={styles.about__description}><span>Город:</span>Санкт-Петербург</p>
                                <p className={styles.about__description}><span>Адрес:</span>Васильевсий 45</p>
                            </div>

                            <div>
                                <p className={styles.about__description}><span>На сайте:</span>с 2021 года</p>
                                <p className={styles.about__description}><span>Статус:</span><span className={styles.accent_color}>Онлайн</span></p>
                                <p className={styles.about__description}><span>Оценка:</span><span className={styles.accent_color}>5.00</span></p>
                            </div>
                        </div>

                        <div className={styles.row2}>
                            <p className={styles.flex_center} style={{ alignItems: "flex-start" }}>
                                <img src="/img/img-small-star.png" alt="" style={{ marginTop: "5px" }} />
                                <span className={styles.accent_color_gold}>4.3</span>
                                Продавец Новичок
                            </p>
                            <p><span className={styles.accent_color}>40 </span>заказов выполнено</p>
                            <p><span className={styles.accent_color}>40 </span>заказов выполнено</p>
                            <p><span className={styles.accent_color}>40 </span>отзывов получено</p>
                            <p><span className={styles.accent_color}>100% </span>заказов успешно сдано</p>
                            <p><span className={styles.accent_color}>40 </span>отзывов получено</p>
                            <p><span className={styles.accent_color}>54% </span>повторных заказов</p>
                        </div>
                    </div>

                    <div className={styles.about_block2}>
                        <table>
                            <tr>
                                <td className={styles.light_text}>Опыт:</td>
                                <td>5 лет</td>
                            </tr>
                            <tr>
                                <td className={styles.light_text}>Имя организации:</td>
                                <td>PRO Ремонт</td>
                            </tr>
                            <tr>
                                <td className={styles.light_text}>Вид категории:</td>
                                <td>Электроника</td>
                            </tr>
                            <tr>
                                <td className={styles.light_text}>Категория:</td>
                                <td>Ремонт телефонов, ремонт планшетов</td>
                            </tr>
                            <tr>
                                <td className={styles.light_text}>Бренды:</td>
                                <td>Iphone, ipad (Из списка)</td>
                            </tr>
                            <tr>
                                <td className={styles.light_text}>Ваша деятельность: </td>
                                <td>Занимаюсь ремонтом техники Apple</td>
                            </tr>
                            <tr>
                                <td className={styles.light_text}>Основное направление: </td>
                                <td>Переклейка экранов </td>
                            </tr>
                            <tr>
                                <td className={styles.light_text}>Основной бизнес: </td>
                                <td>Мастерская </td>
                            </tr>
                        </table>
                        <div className={styles.col}>
                            <p className={styles.text_light}>О себе</p>
                            <p>Vestibulum placerat massa at massa ultricies scelerisque. Aenean dolor justo, aliquet vel convallis at, egestas ac purus. Aliquam condimentum urna sit amet posuere dapibus. Phasellus venenatis vulputate purus vel ultricies. Quisque a volutpat dolor, et interdum urna. Suspendisse interdum, nulla congue porta dapibus, risus leo eleifend nibh, id malesuada risus tortor sed odio. </p>
                        </div>
                    </div>


                    <div className={styles.text_block}>
                        <p>Vestibulum placerat massa at massa ultricies scelerisque. Aenean dolor justo, aliquet vel convallis at, egestas ac purus. Aliquam condimentum urna sit amet posuere dapibus. Phasellus venenatis vulputate purus vel ultricies. Quisque a volutpat dolor, et interdum urna. Suspendisse interdum, nulla congue porta dapibus, risus leo eleifend nibh, id malesuada risus tortor sed odio. </p>
                    </div>

                </section>

                <section className={styles.order_block}>
                    <h2>Что входит в предложение</h2>
                    <div className={styles.order_block__row}>
                        <p>Услуга</p>
                        <div style={{ flex: 1 }} />
                        <p>Срок <br />4 часа</p>
                        <p>Цена <br />1500 ₽</p>
                    </div>
                    <div className={styles.line}></div>
                    <div className={styles.order_block__row2}>
                        <p>Итого:</p>
                        <p>4 часа</p>
                        <p>1500 ₽</p>
                    </div>

                </section>

                <div className={styles.buttons}>
                    <button className={styles.button} onClick={() => setVisibleBlockPayment(true)}>Выбрать мастера</button>
                    <Link to="/client/feedback/1"><button className={styles.button}>Отзывы о мастере</button></Link>
                </div>

            </div>
        </>
    )
}


export default MyOrder;
