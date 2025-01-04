import style from "./OrderRow.module.css"
import { Link } from "react-router-dom"
import { Navigation } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react"
import ModalDelete from "./ModalDelete";

export default function OrderRow () {
    // тестовый список для слайдера
    const [photos, setPhotos] = useState([
        "/img/sentence_img/iphone-x.png",
        "/img/sentence_img/iphone-x.png",
        "/img/sentence_img/iphone-x.png",
    ]);

    const [visibleDeleteModal, setVisibleDeleteModal] = useState(false)

    return (
        <>
            {visibleDeleteModal ? <ModalDelete setVisibleDeleteModal={setVisibleDeleteModal} />: null}

            <div className={style.order_row}>
                <div className={style.left}>
                    <div className={style.profile}>
                        <img src="/img/profil_img/1.png" alt="" />
                        <div className={style.profile__col}>
                            <p className={style.name}>Имя фамилия </p>
                            <p>Размещено проектов на бирже 12</p>
                            <p>Нанято 90%</p>
                        </div>
                    </div>
                    <div style={{flex: 1}}></div>
                    <p className={style.description}>Название устройства </p>
                    <p className={style.description}>клиент описывает свою проблему </p>
                   
                </div>

                <div className={style.right}>
                    <p>Желаемый бюджет <span className={style.price}>1000 ₽</span></p>
                    <Swiper
                            slidesPerView={4}
                            spaceBetween={30}
                            navigation={true}
                            modules={[Navigation]}
                            className={style.swiper}
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
                                <SwiperSlide key={index} className={style.swiperSlide}>
                                    <img src={src} alt="" />
                                </SwiperSlide>
                            )}
                    </Swiper>
                    <button className={style.button}>Моё предложение</button>
                </div>
            </div>

            <div className={style.comment_wrap}>
                <div className={style.profile}>
                    <img src="/img/profil_img/1.png" alt="" />
                    <div className={style.profile__col}>
                        <p className={style.name}>Алексей Иванов</p>
                        <p>0 заказов</p>
                    </div>
                </div>

                <div className={style.comment_block}>
                    <div className={style.icon_chat}>
                        <img src="/img/chat.png" alt="" />
                    </div>
                    <textarea className={style.comment__input} rows={4} placeholder="сообщение.." />

                    <table className={style.table}>
                        <tr>
                            <th>Что входит в предложение </th>
                            <th>Срок</th>
                            <th>Стоимость</th>
                        </tr>
                        <tr className={style.line}>
                            <td>Замена экрана</td>
                            <td>4 часа</td>
                            <td>3000</td>
                        </tr>

                        <div className={style.line}></div>

                        <tr>
                            <td></td>
                            <td>4 часа</td>
                            <td>3000</td>
                        </tr>
                    </table>
                </div>

                <div className={style.status_row}>
                    <div className={style.status}>
                        <img src="/img/icons/eye_white.png" alt="" />
                        <p>просмотрено</p>
                    </div>
                    <div className={style.delete} onClick={()=>setVisibleDeleteModal(true)}>
                        <img src="/img/icons/delete.png" alt="" />
                        <p>удалить</p>
                    </div>
                </div>

                <div className={style.status_row}>
                    <div className={style.status_success}>
                        <p>выполненный</p>
                    </div>
                    <div className={style.delete} onClick={()=>setVisibleDeleteModal(true)}>
                        <img src="/img/icons/delete.png" alt="" />
                        <p>удалить</p>
                    </div>
                </div>

                <div className={style.status_row}>
                    <div className={style.status_new}>
                         <p>Заказ создан</p>
                    </div>
                    <div className={style.delete} onClick={()=>setVisibleDeleteModal(true)}>
                        <img src="/img/icons/delete.png" alt="" />
                        <p>удалить</p>
                    </div>
                </div>

                <div className={style.status_row}>
                    <div className={style.status_cancel}>
                         <p>Отменённый</p>
                    </div>
                    <div className={style.delete} onClick={()=>setVisibleDeleteModal(true)}>
                        <img src="/img/icons/delete.png" alt="" />
                        <p>удалить</p>
                    </div>
                </div>
            </div>
        </>
    )
}