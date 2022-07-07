function Header({ title }) {
  return (
    <>
      <div className="bg-purple-600 mt-4">
        <h1 className="font-black text-white text-4xl  flex flex-col items-center mx-auto">
          PetsCientes Veterinarias
        </h1>
        {/* <h3 className="text-[4rem] text-purple-600 text-center">{title}</h3> */}
      </div>
    </>
  );
}

export default Header;
