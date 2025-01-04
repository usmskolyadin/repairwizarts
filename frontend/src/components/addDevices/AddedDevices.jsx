import { useEffect } from "react";
import { Link } from "react-router-dom";
import AddedDevice from "./AddedDevice";
import './added-devices.css'
import { useService } from "../../hooks/useService";
import { getClientRequests } from "../../services/request.service"
import styles from "./AddedDevices.module.css"

function AddedDevices() {
    const requests = useService(getClientRequests, [])

    // временно тестовые данные
    // const filteredRequests = requests.data.filter((v) =>
    //     v.status !== "Отменено" &&
    //     v.status !== "Выполнено" &&
    //     v.status !== "Подтверждено"
    // )
    const filteredRequests = [
        {
            id: 1,
            title: "Заявка на разработку веб-сайта",
            client_price: 1500,
            description: "Необходимо разработать современный веб-сайт для бизнеса клиента.",
            number_of_offers: 3,
            status: "Выбор мастера",
            onUpdate: function() {
                console.log("Заявка обновлена", this.id);
            },
            created_at: new Date("2023-01-15T10:00:00Z")
        },
        {
            id: 2,
            title: "Заявка на SEO-оптимизацию",
            client_price: 800,
            description: "Провести SEO-оптимизацию для улучшения видимости сайта в поисковых системах.",
            number_of_offers: 2,
            status: "Выбор мастера",
            onUpdate: function() {
                console.log("Заявка обновлена", this.id);
            },
            created_at: new Date("2023-02-10T11:30:00Z")
        },
        {
            id: 3,
            title: "Заявка на создание...",
            client_price: 3000,
            description: "Разработка мобильного приложения для платформ Android и iOS.",
            number_of_offers: 1,
            status: "В работе",
            onUpdate: function() {
                console.log("Заявка обновлена", this.id);
            },
            created_at: new Date("2023-03-05T09:45:00Z")
        },
        {
            id: 4,
            title: "Заявка на графический дизайн",
            client_price: 500,
            description: "Создать графику для рекламной кампании компании.",
            number_of_offers: 4,
            status: "Завершено",
            onUpdate: function() {
                console.log("Заявка обновлена", this.id);
            },
            created_at: new Date("2023-03-20T14:15:00Z")
        }
    ];

    const onDeviceUpdate = (e) => requests.refetch()

    useEffect(() => {
        document.title = 'Добавленные устройства';
    }, []);

    return (
        <section className="page_7">
            <div className={`container_added ${styles.block}`}>
                <div className="adding_devices font_abel">
                    <div className="device">
                        <div className="device_text-2">
                            <h2>Добавленные устройства</h2>
                            <h3>Заявки</h3>
                        </div>
                    </div>
                    <div className={styles.block_nav}>
                        <div className="nav_device df " style={{margin: 0}}>
                            <div className={`nav_device-1 ${window.location.hash == "" && "nav_device-1-active"} ${styles.relative}`}>
                                {/* <Link to="/added-device">
                                    <h2>Актуальное</h2>
                                </Link> */}
                                <Link className="just__flexingfaa" to='/client/requests'>
                                    <h2>Актуальное</h2>
                                </Link>
                                <div className={styles.counter}>
                                    <span>5</span>
                                </div>
                            </div>
                            <div className={`nav_device-2 ${window.location.hash == "#archive" && "nav_device-1-active"} ${styles.relative}`}>
                                <Link className="just__flexingfaa" to='#archive'>
                                    <h2>Архив</h2>
                                </Link>
                                <div className={styles.counter}>
                                    <span>2</span>
                                </div>
                            </div>
                        </div>
                            <Link className={styles.button} to="/client/requests/create/title">
                                Добавить устройство
                            </Link>
                    </div>

                    <div className={styles.table_wrap}>
                        <div className={`big_nav-devicefsadsad df align ${styles.table}`} style={{marginBottom: 0}}>
                            <div className="">
                                <h2>Заказы</h2>
                            </div>
                            <div className="big_nav-text_2 df align">
                                <div className="tex-1 df">
                                    <h2 className="nav-text-left">Цена</h2>

                                    <h2 className="nav-text-center">Предложение</h2>

                                    <h2 className="nav-text-center">Статус</h2>
                                    <h2 className="nav-text-right">Управлять</h2>
                                </div>
                            </div>
                        </div>
                        {filteredRequests.map((v) => (
                            <AddedDevice
                                {...v}
                                key={v.id}
                                onUpdate={onDeviceUpdate}
                            />
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}


export default AddedDevices;