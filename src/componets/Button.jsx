
const Button = (props) => {
  return (
    <button className=" bg-neutral-700 text-white font-semibold py-2 px-7 rounded-md duration-500 hover:bg-pink-600 hover:text-white ml-8">
      {props.children}
    </button>
  );
};

export default Button;