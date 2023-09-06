import s from "../src/styles/mainpage.module.scss";

export default function Home() {
  return (
    <header className={s.header}>
      <div className={s.top}>
        <div className={s.topInner}>
          <div className={s.linksList}>
            <a href="">Сервис</a>
            <a href="">Сотрудничество</a>
            <a href="">Заказать звонок</a>
          </div>
          <div className={s.iconsList}>
            <a href="">
              <img src="images/viber.svg" alt="" />
            </a>
            <a href="">
              <img src="images/whatsapp.svg" alt="" />
            </a>
            <a href="">
              <img src="images/telegram.svg" alt="" />
            </a>
          </div>
          <div className={s.phoneContact}>
            <a href="">+7 (800) 505-54-61</a>
            <div className={s.iconPlusik}>
              <a href="">
                <img src="images/pluss.svg" alt="+" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={s.podtop}>
        <div className={s.podtopInner}>
          <div className={s.linksMenu}>
            <a href="">О магазине</a>
            <a href="">Доставка и оплата</a>
            <a href="">
              <img src="images/installment.svg" alt="" />
            </a>
            <a href="">Тест-драйв</a>
            <a href="">Блог</a>
            <a href="">Контакты</a>
            <a href="">Акции</a>
            <a href="">
              <img src="images/percent.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
