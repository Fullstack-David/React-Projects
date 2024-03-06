
const Garage = () => {
    const cars = ['Volvo', 'Fiat', 'Toyota', 'BMW']
  return (
    <div className="garage">
          <h2>Garage</h2>
          {cars.length > 0 && <p> You have {cars.length } in your garage</p>}
    </div>
  )
}

export default Garage