const code = `
<form className="block">
  <div className="block mb-4">
    <label for="exampleInputEmail1" className="inline-block mb-2">Email address</label>
    <input
      className="block w-full px-3 py-2 border-gray-300 rounded focus:border-blue-50 "
      type="email"
      id="exampleInputEmail1"
      aria-describedby="emailHelp"
    />
    <div className="mt-2 text-sm text-gray-600">
      We'll never share your email with anyone else.
    </div>
  </div>
  <div className="block mb-4">
    <label for="exampleInputPassword1" className="inline-block mb-2">Password</label>
    <input
      className="block w-full px-3 py-2 border-gray-300 rounded focus:border-blue-50 "
      type="password"
      id="exampleInputPassword1"
    />
  </div>
  <div className="block mb-4">
    <input
      className="w-4 h-4 mr-2 border-gray-300 rounded focus:border-blue-50 "
      type="checkbox"
      id="exampleCheck1"
    />
    <label for="exampleCheck1">Checkout</label>
  </div>
  <button type="submit" className="inline-block px-3 py-2 text-white bg-blue-500 rounded ">
    Submit
  </button>
</form>

`;
export default code;
