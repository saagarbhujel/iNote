const Contact = () => {
  return (
    <>

      <div className="mt-20 flex jusify-center items-center flex-col mx-auto p-8">
        <h1 className="text-4xl font-bold mb-10 underline underline-offset-4">Contact Us</h1>
        <form className="w-full max-w-lg">
          <div className="flex flex-wrap -mx-3 mb-4">
            <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
              <label
                htmlFor="name"
                className="block text-gray-700 mb-2"
              >
                Name:
              </label>
              <input
                id="name"
                type="text"
                placeholder="Enter your name"
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                htmlFor="email"
                className="block text-gray-700 mb-2"
              >
                Email:
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email."
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-4">
            <div className="w-full px-3">
              <label
                htmlFor="message"
                className="block text-gray-700 mb-2"
              >
                Message:
              </label>
              <textarea
                id="message"
                placeholder="Enter your message here"
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32 resize-none"
              ></textarea>
            </div>
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              disabled
              className="bg-purple-900 hover:bg-purple-600 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Submit
            </button>
          </div>
        </form>
      </div>

    
    </>
  );
};

export default Contact;
