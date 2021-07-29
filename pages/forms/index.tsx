import { FC } from "react";
import Example from "../../components/Example";
import codes from "./code";

interface formExamples {
  example: FC;
  text: FC;
  inlineText: FC;
  disabled: FC;
}

const Form = {} as formExamples;

Form.example = () => {
  const title = "Form Example";
  Form.example.displayName = title.split(" ").join("");
  return (
    <Example
      key='1'
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
  );
};

Form.text = () => {
  return (
    <Example title='Form text' key='2' text={codes[1]}>
      <label htmlFor='inputPassword5' className='inline-block mb-2'>
        Password
      </label>
      <input
        type='password'
        className='block w-full px-3 py-2 border-gray-300 rounded focus:border-blue-50 '
        id='inputPassword5'
        aria-describedby='passwordHelpBlock'
      />
      <div id='passwordHelpBlock' className='mt-2 text-sm text-gray-600'>
        Your password must be 8-20 characters long, contain letters and numbers,
        and must not contain spaces, special characters, or emoji.
      </div>
    </Example>
  );
};
Form.inlineText = () => {
  return (
    <Example key='3' title='Form with inline text' text={codes[2]}>
      <div className='flex flex-wrap items-center w-full'>
        <div className='flex-auto flex-grow-0 flex-shrink-0 px-2 pt-4'>
          <label htmlFor='inputPassword6' className=''>
            Password
          </label>
        </div>
        <div className='flex-auto flex-grow-0 flex-shrink-0 px-2 pt-4'>
          <input
            type='password'
            id='inputPassword6'
            className='block w-full px-3 py-2 border-gray-300 rounded focus:border-blue-50 '
            aria-describedby='passwordHelpInline'
          />
        </div>
        <div className='flex-auto flex-grow-0 flex-shrink-0 px-2 pt-4'>
          <span id='passwordHelpInline' className='mt-2 text-sm text-gray-600'>
            Must be 8-20 characters long.
          </span>
        </div>
      </div>
    </Example>
  );
};
Form.disabled = () => {
  return (
    <Example title='Disabled Forms' text={codes[3]}>
      <form className='block'>
        <fieldset disabled>
          <legend className='mb-2 text-2xl'>Disabled fieldset example</legend>
          <div className='block mb-4'>
            <label htmlFor='disabledTextInput' className='inline-block mb-2'>
              Disabled input
            </label>
            <input
              type='text'
              id='disabledTextInput'
              className='block w-full px-3 py-2 placeholder-gray-500 bg-gray-200 border-gray-300 rounded focus:border-blue-50'
              placeholder='Disabled input'
            />
          </div>
          <div className='block mb-4'>
            <label htmlFor='disabledSelect' className='inline-block mb-2'>
              Disabled select menu
            </label>
            <select
              id='disabledSelect'
              className='block w-full px-3 py-2 bg-gray-200 border-gray-300 rounded '>
              <option>Disabled select</option>
            </select>
          </div>
          <div className='block mb-4'>
            <div className='form-check'>
              <input
                className='w-4 h-4 mr-2 border-gray-300 rounded focus:border-blue-50'
                type='checkbox'
                id='disabledFieldsetCheck'
                disabled
              />
              <label className='opacity-50' htmlFor='disabledFieldsetCheck'>
                Can&apos;t check this
              </label>
            </div>
          </div>
          <button
            type='submit'
            className='"inline-block px-3 py-2 text-white bg-blue-500 rounded opacity-60 pointer-events-none cursor-default'>
            Submit
          </button>
        </fieldset>
      </form>
    </Example>
  );
};

export default function Forms() {
  return (
    <div className='min-h-screen p-2 md:p-8'>
      <Form.example />
      <Form.text />
      <Form.inlineText />
      <Form.disabled />
    </div>
  );
}
