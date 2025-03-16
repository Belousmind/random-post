interface CardProps {
  title: string;
}

const Card: React.FC<CardProps> = ({title}) => {
  return (
  <div className="card">
    <h4>{title}</h4> 
    <p>Пустота</p>
  </div>
  )
}

export default Card; 