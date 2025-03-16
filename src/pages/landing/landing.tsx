import Card from "../../shared/UI/card/card"
import SvgAlert from "../../shared/UI/svg/svg-alert"
import SvgGoFurther from "../../shared/UI/svg/svg-go-further"
import styles from "./landing.module.scss"


const Landing = () => {

  const titelsArr: string[] = ['Карточка 1', 'Карточка 2']

  const cards = titelsArr.map((item) => {
    return <Card title={item}/>
  })

  return (
    <main className={styles["example-homework"]}>
      <section 
        className={styles.screen}
        id="first-screen"
      >
        <h1>Интересные факты про эту страницу</h1>
        <p>В ней нет смысла</p>
        <a href="#second-screen">Перейти дальше <SvgGoFurther/></a>

      </section>

      <section
        className={styles.screen}
        id="second-screen"
      >
        <h2>Смотрите какие карточки</h2>
        <div className={styles["cards-container"]}>
          {cards}
        </div>
      </section>

      <section className={styles.block}>
        <h3>Интерактив?</h3>
        <input type="text" placeholder="Напишите тут что-нибудь"/>
        <a href="#first-screen">Вернуться <SvgGoFurther/></a>
        <button>Вывести текст в alert <SvgAlert/></button>
      </section>
  </main>
  )
}

export default Landing;