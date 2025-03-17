import Card from "@shared/UI/card/card";
import { SvgAlert, SvgGoFurther } from "@shared/UI/svg";
import styles from "./landing.module.scss";

const Landing = () => {
  const titelsArr: string[] = ["Карточка 1", "Карточка 2"];

  const cards = titelsArr.map((item) => {
    return <Card title={item} />;
  });

  return (
    <main className={styles["example-homework"]}>
      <section className={styles.screen} id="first-screen">
        <h1>Интересные факты про эту страницу</h1>
        <p>В ней нет смысла</p>
        <a className={styles["action-trigger"]} href="#second-screen">
          Перейти дальше <SvgGoFurther />
        </a>
      </section>

      <section className={styles.screen} id="second-screen">
        <h2>Смотрите какие карточки</h2>
        <div className={styles["cards-container"]}>{cards}</div>
      </section>

      <section className={styles.block}>
        <h3>Интерактив?</h3>
        <input type="text" placeholder="Напишите тут что-нибудь" />
        <a className={styles["action-trigger"]} href="#first-screen">
          Вернуться <SvgGoFurther />
        </a>
        <button className={styles["action-trigger"]}>
          Вывести текст в alert <SvgAlert />
        </button>
      </section>
    </main>
  );
};

export default Landing;
