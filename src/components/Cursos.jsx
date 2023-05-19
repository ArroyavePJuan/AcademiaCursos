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
                    <p>{dato.nombre}</p>
                    <p>{dato.descripcion}</p>
                    <p>{dato.precio}</p>
                </section>
            ))
        }
      </section>
    </main>
  )
}

export default Cursos
