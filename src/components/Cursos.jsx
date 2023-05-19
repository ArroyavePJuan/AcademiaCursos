import Header from "../helpers/Header"
import data from "../data.json"


const Cursos = () => {
  return (
    <main>
      <Header />
      <section className="container">
      {
            data.map((dato)=>(
              // eslint-disable-next-line react/jsx-key
                <section className="card">
                  <img src={dato.img}></img>
                    <h4>{dato.nombre_curso}</h4>
                    <p>{dato.duracion}</p>
                    <p>{dato.categoria}</p>
                    <p>{dato.precio}</p>
                    <p>{dato.descripcion}</p>
                </section>
            ))
        }
      </section>
    </main>
  )
}

export default Cursos
