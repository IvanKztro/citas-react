import { useState, useEffect } from "react";
import Header from "./components/Header";
import ListPacientes from "./components/List-Pacientes";
import Form from "./components/Form";

function App() {
  const [title, setTitle] = useState("Citas PaciMascotas");
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});
  const [isDelete, setIsDelete] = useState(false);

  useEffect(() => {
    const obtenerLS = () => {
      const pacientesLS = JSON.parse(localStorage.getItem("pacientes")) ?? [];
      console.log(pacientesLS);
      setPacientes(pacientesLS);
      console.log(pacientes);
    };
    obtenerLS();
  }, []);

  useEffect(() => {
    if (pacientes.length > 0 || isDelete) {
      localStorage.setItem("pacientes", JSON.stringify(pacientes));
      console.log("setItemLocalStorage");
      setIsDelete(false);
    }
  }, [pacientes]);

  const eliminarPaciente = (id) => {
    // isDelete = true;
    console.log("eliminado");
    setIsDelete(true);

    const pacientesActualizados = pacientes.filter(
      (paciente) => paciente.id !== id
    );
    setPacientes(pacientesActualizados);
  };

  const dejarEdicion = () => {
    setPaciente({});
  };

  return (
    <>
      <Header title={title} />
      <div className="container mx-auto mt-2 ">
        {/* <h3>{title}</h3> */}
        <div className="mt-5 md:flex">
          <Form
            pacientes={pacientes}
            setPacientes={setPacientes}
            paciente={paciente}
            setPaciente={setPaciente}
          />
          <ListPacientes
            pacientes={pacientes}
            setPaciente={setPaciente}
            eliminarPaciente={eliminarPaciente}
            dejarEdicion={dejarEdicion}
          />
        </div>
      </div>
    </>
  );
}

export default App;
