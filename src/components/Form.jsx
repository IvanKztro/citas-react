import { useState, useEffect } from "react";

function Form({ pacientes, setPacientes, paciente, setPaciente }) {
  const [nombre, setNombre] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [fecha, setFecha] = useState("");
  const [sintomas, setSintomas] = useState("");

  // const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
      setNombre(paciente.nombre);
      setPropietario(paciente.propietario);
      setEmail(paciente.email);
      setFecha(paciente.fecha);
      setSintomas(paciente.sintomas);
    }
  }, [paciente]);

  const generarId = () => {
    const random = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString(36);
    return random + fecha;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación del Formulario
    if ([nombre, propietario, email, fecha, sintomas].includes("")) {
      console.log("Hay Al Menos un campo vacio");

      //    setError(true);
      return;
    }

    //  setError(false);

    // Objeto de Paciente
    const objetoPaciente = {
      nombre,
      propietario,
      email,
      fecha,
      sintomas,
    };

    if (paciente.id) {
      // Editando el Registro
      objetoPaciente.id = paciente.id;
      const pacientesActualizados = pacientes.map((pacienteState) =>
        pacienteState.id === paciente.id ? objetoPaciente : pacienteState
      );

      setPacientes(pacientesActualizados);
      setPaciente({});
    } else {
      // Nuevo registro
      objetoPaciente.id = generarId();
      setPacientes([...pacientes, objetoPaciente]);
    }

    // Reiniciar el form
    setNombre("");
    setPropietario("");
    setEmail("");
    setFecha("");
    setSintomas("");
  };
  return (
    <>
      <div className="md:w-1/2 lg:w-2/5 mx-5 bg-purple-600 rounded-l-lg">
        <h2 className="font-black text-white text-3xl text-center">
          Formulario
        </h2>

        <p className="text-lg m-2 text-center mb-2 text-white">
          {/* Agrega Pacientes y {""} */}
          <span className="text-gray-200 font-bold "> Agrega Pacientes</span>
        </p>
        <form className="bg-none  py-2 px-11 mb-2" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="mascota" className="block text-white  font-bold">
              Nombre (mascota):
            </label>
            <input
              id="mascota"
              type="text"
              placeholder="Rufus"
              className="border-2 w-full  mt-1 placeholder-gray-400 rounded-md"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="dueno" className="block text-white font-bold">
              Nombre (dueño):
            </label>
            <input
              id="dueno"
              type="text"
              placeholder="Juan Rivera"
              className=" w-full rounded-md  mt-1 placeholder-gray-200 border-2"
              value={propietario}
              onChange={(e) => setPropietario(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="block text-white font-bold">
              Correo:
            </label>
            <input
              id="email"
              type="text"
              placeholder="email@gmail"
              className=" w-full rounded-md  mt-1 placeholder-gray-200 border-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="fecha" className="block text-white font-bold">
              Fecha de ingreso:
            </label>
            <input
              type="date"
              name=""
              id="fecha"
              className="w-full border-2 placeholder-gray-200 mt-1 rounded-md"
              value={fecha}
              onChange={(e) => setFecha(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="sintomas" className="text-white block font-bold">
              Sintomas:
            </label>
            <textarea
              className="rounded-md border-2 placeholdergray-200 w-full mt-1"
              name=""
              id="sintomas"
              cols="20"
              rows="2"
              placeholder="no quiere comer, no quiere tomar su medicamento, etc"
              value={sintomas}
              onChange={(e) => setSintomas(e.target.value)}
            ></textarea>
          </div>
          <div className="">
            <button
              type="submit"
              className="w-full py-2 bg-gray-200 font-bold rounded-md hover:bg-green-400 hover:text-white "
            >
              {paciente.id ? "Editar Paciente" : "Agregar Paciente"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Form;
