import style from "./ConfirmOrder.module.css"



export default function ConfirmOrderFinal_v3({ setVisibleConfirmOrderFinal, setConfirmOrder }) {

    return (
        <>
            <div className={style.wrap}>
                <div className={style.block}>
                    <div className={style.close}  onClick={()=>setVisibleConfirmOrderFinal(false)}>
                        <img src="/img/close.svg" alt="" />
                    </div>
                    <p className={style.message}>
                    Заявка успешно выполнена
                    </p>

                    <div className={style.buttons}>
                        <div className={style.button} onClick={()=>{setVisibleConfirmOrderFinal(false);setConfirmOrder(true)}}>ОК</div>
                    </div>
                </div>
            </div>
            
        </>
    )
}