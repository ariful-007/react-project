
const Registar = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-indigo-100 mt-3 mb-3">
      <div className="max-w-md w-full shadow-2xl p-12 rounded-sm">
        <h2 className="text-3xl font-bold mb-6 text-center">Registration Form</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full p-2 bg-teal-400 duration-500 text-black rounded-md hover:bg-slate-900 hover:text-white text-lg"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registar;