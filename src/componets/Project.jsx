
const Project = ({img,title}) => {
  return (
    <div className="w-[25%] p-7">
      <img src={img} alt="" />
      <h1 className=" text-xl text-center font-sans font-semibold text-gray-900 mt-2">{title}</h1>
    </div>
  );
};

export default Project;