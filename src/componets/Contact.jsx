import img from"../assets/ContactImg/contact.jpg"

const Contact = () => {
  return (
    <div>
      <h1 className="text-5xl text-slate-800 font-bold mt-12 text-center">Contact Us</h1>
      <p className=" mx-auto w-2/5 text-center mt-4">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, </p>
      <div className="flex items-center justify-between h-screen container mx-auto px-12">
          <div>
            <img className=" w-[900px] h-[615px] p-8 bg-white shadow-lg rounded-md" src={img} alt="" />
          </div>
          <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-md">
            <h2 className="text-xl font-bold mb-6 text-gray-800 text-center">Send Your Information</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="first-name" className="block text-sm font-semibold text-gray-700">
                  First Name
                </label>
                <input
                  type="text"
                  id="first-name"
                  name="first-name"
                  className="w-full mt-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-indigo-500"
                  placeholder="Your first name"
                />
              </div>

              <div>
                <label htmlFor="last-name" className="block text-sm font-semibold text-gray-700">
                  Last Name
                </label>
                <input
                  type="text"
                  id="last-name"
                  name="last-name"
                  className="w-full mt-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-indigo-500"
                  placeholder="Your last name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full mt-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-indigo-500"
                  placeholder="Your email address"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full mt-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-indigo-500"
                  placeholder="Your message"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-4 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring focus:border-indigo-500"
              >
                Send Message
              </button>
            </form>
          </div>
      </div>
    </div>
  );
};

export default Contact;