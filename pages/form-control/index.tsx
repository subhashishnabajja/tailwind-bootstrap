import Example from "../../components/Example";
import codes from "./code";

const FormControlExample = () => {
  return (
    <Example title='Form Control Example' text={codes[0]}>
      <div className='block mb-4'>
        <label htmlFor='exampleFormControlInput1' className='inline-block mb-2'>
          Email address
        </label>
        <input
          type='email'
          className='block w-full px-3 py-2 border-gray-300 rounded focus:border-blue-50 '
          id='exampleFormControlInput1'
          placeholder='name@example.com'
        />
      </div>
      <div className='mb-3'>
        <label
          htmlFor='exampleFormControlTextarea1'
          className='inline-block mb-2'>
          Example textarea
        </label>
        <textarea
          className='block w-full px-3 py-2 border-gray-300 rounded focus:border-blue-50'
          id='exampleFormControlTextarea1'
          rows={3}></textarea>
      </div>
    </Example>
  );
};

const SizingExample = () => {
  return (
    <Example title='Sizing' text={codes[1]}>
      <div className='space-y-3'>
        <input
          className='block w-full px-3 py-2 text-xl border-gray-300 rounded focus:border-blue-50'
          type='text'
          placeholder='.form-control-lg'
          aria-label='.form-control-lg example'
        />
        <input
          className='block w-full px-3 py-2 border-gray-300 rounded focus:border-blue-50'
          type='text'
          placeholder='Default input'
          aria-label='default input example'
        />
        <input
          className='block w-full px-3 py-2 text-sm border-gray-300 rounded focus:border-blue-50'
          type='text'
          placeholder='.form-control-sm'
          aria-label='.form-control-sm example'
        />
      </div>
    </Example>
  );
};

const Disabled = () => {
  return (
    <Example title='Disabled' text={codes[2]}>
      <div className='space-y-3'>
        <input
          className='block w-full px-3 py-2 placeholder-gray-500 bg-gray-200 border-gray-300 rounded focus:border-blue-50'
          type='text'
          placeholder='Disabled input'
          aria-label='Disabled input example'
          disabled
        />
        <input
          className='block w-full px-3 py-2 placeholder-black bg-gray-200 border-gray-300 rounded focus:border-blue-50'
          type='text'
          value='Disabled readonly input'
          aria-label='Disabled input example'
          disabled
          readOnly
        />
      </div>
    </Example>
  );
};

const ReadOnlyExample = () => {
  return (
    <Example title='Readonly' text={codes[3]}>
      <input
        className='block w-full px-3 py-2 placeholder-black bg-gray-200 border-gray-300 rounded focus:border-blue-50'
        type='text'
        value='Readonly input here...'
        aria-label='readonly input example'
        readOnly
      />
    </Example>
  );
};

const ReadonlyPlainText = () => {
  return (
    <Example title='Readonly plain text' text={codes[4]}>
      <div className='flex mb-4'>
        <label htmlFor='exampleInputEmail1' className='inline-block p-1 mb-2'>
          Email address
        </label>
        <div className='flex-grow pl-2'>
          <input
            type='text'
            readOnly
            className='block w-full px-3 py-2 border-white rounded focus:border-blue-50'
            id='staticEmail'
            value='email@example.com'
          />
        </div>
      </div>
      <div className='flex mb-4'>
        <label
          htmlFor='exampleInputPassword1'
          className='inline-block p-1 mb-2'>
          Password
        </label>
        <div className='flex-grow pl-2'>
          <input
            className='block w-full px-3 py-2 border-gray-300 rounded focus:border-blue-50 '
            type='password'
            id='exampleInputPassword1'
          />
        </div>
      </div>
    </Example>
  );
};

const ReadonlyPlainText2 = () => {
  return (
    <Example title='Readonly plain text' text={codes[5]}>
      <form className='flex flex-wrap items-center mb-4 space-x-3 space-y-3'>
        <input
          type='text'
          readOnly
          className='inline px-3 py-2 border-white rounded focus:border-blue-50'
          id='staticEmail'
          value='email@example.com'
        />
        <input
          className='inline px-3 py-2 border-gray-300 rounded focus:border-blue-50 '
          type='password'
          id='exampleInputPassword1'
        />
        <button
          type='submit'
          className='inline px-3 py-2 text-white bg-blue-500 rounded '>
          Confirm Identity
        </button>
      </form>
    </Example>
  );
};

const ColorPickerExample = () => {
  return (
    <Example title='Color Picker' text={codes[6]}>
      <label htmlFor='exampleColorInput' className='inline-block mb-2'>
        Color picker
      </label>
      <input
        type='color'
        className='block w-12 p-1 bg-white border-2 border-gray-300 rounded h-11'
        id='exampleColorInput'
        value='#563d7c'
        title='Choose your color'
      />
    </Example>
  );
};

const DataListExample = () => {
  return (
    <Example title='Datalist Exampe ' text={codes[7]}>
      <label htmlFor='exampleDataList' className='inline-block mb-2'>
        Datalist example
      </label>
      <input
        className='block w-full px-3 py-2 border-2 border-gray-300 rounded focus:border-blue-50 '
        list='datalistOptions'
        id='exampleDataList'
        placeholder='Type to search...'
      />
      <datalist id='datalistOptions'>
        <option value='San Francisco' />
        <option value='New York' />
        <option value='Seattle' />
        <option value='Los Angeles' />
        <option value='Chicago' />
      </datalist>
    </Example>
  );
};

export default function FormControl() {
  return (
    <div className='min-h-screen p-2 md:p-8'>
      <FormControlExample />
      <SizingExample />
      <Disabled />
      <ReadOnlyExample />
      <ReadonlyPlainText />
      <ReadonlyPlainText2 />
      <ColorPickerExample />
      <DataListExample />
    </div>
  );
}
