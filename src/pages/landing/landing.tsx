import Card from "../../shared/UI/card/card"
import SvgAlert from "../../shared/UI/svg/svg-alert"
import SvgGoFurther from "../../shared/UI/svg/svg-go-further"

const Landing = () => {

  const titelsArr: string[] = ['Карточка 1', 'Карточка 2']

  const cards = titelsArr.map((item) => {
    return <Card title={item}/>
  })

  return (
    <main className="example-homework">
      <div 
        className="screen"
        id="first-screen"
      >
        <h2>Интересные факты про эту страницу</h2>
        <p>В ней нет смысла</p>
        <a href="#second-screen">Перейти дальше <SvgGoFurther/></a>

      </div>

      <div
        className="screen"
        id="second-screen"
      >
        <h3>Смотрите какие карточки</h3>
        <div className="cards-container">
          {cards}
        </div>
      </div>

      <div className="block">
        <h5>Интерактив?</h5>
        <input type="text" placeholder="Напишите тут что-нибудь"/>
        <a href="#first-screen">Перейти дальше</a>
        <button>Вывести текст в alert <SvgAlert/></button>
      </div>
  </main>
  )
}

export default Landing;