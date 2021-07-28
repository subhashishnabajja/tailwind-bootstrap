import Example from "../../components/Example";
import codes from "./code";
export default function Forms() {
  return (
    <div className='min-h-screen p-4 md:p-8'>
      <Example
        text={codes[0]}
        title='Form Example'
        link={{
          text: "Bootstrap forms",
          href: "https://getbootstrap.com/docs/5.0/forms/overview/",
        }}>
        <form className='block'>
          <div className='block mb-4'>
            <label className='inline-block mb-2'>Email address</label>
            <input
              className='block w-full px-3 py-2 border-gray-300 rounded focus:border-blue-50 '
              type='email'
            />
            <div className='mt-2 text-sm text-gray-600'>
              We&apos;ll never share your email with anyone else.
            </div>
          </div>
          <div className='block mb-4'>
            <label className='inline-block mb-2'>Password</label>
            <input
              className='block w-full px-3 py-2 border-gray-300 rounded focus:border-blue-50 '
              type='password'
            />
          </div>
          <div className='block mb-4'>
            <input
              className='w-4 h-4 mr-2 border-gray-300 rounded focus:border-blue-50 '
              type='checkbox'
            />
            <label>Checkout</label>
          </div>
          <button className='inline-block px-3 py-2 text-white bg-blue-500 rounded '>
            Submit
          </button>
        </form>
      </Example>
    </div>
  );
}
