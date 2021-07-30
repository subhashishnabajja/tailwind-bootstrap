const code1 = `
<div class="block mb-4">
  <label for="exampleFormControlInput1" class="inline-block mb-2">
    Email address
  </label>
  <input
    type="email"
    class="block w-full px-3 py-2 border-gray-300 rounded focus:border-blue-50"
    id="exampleFormControlInput1"
    placeholder="name@example.com"
  />
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="inline-block mb-2">
    Example textarea
  </label>
  <textarea
    class="block w-full px-3 py-2 border-gray-300 rounded focus:border-blue-50"
    id="exampleFormControlTextarea1"
    rows="3"
  ></textarea>
</div>

`;

const code2 = `
<input
  class="block w-full px-3 py-2 text-xl border-gray-300 rounded focus:border-blue-50"
  type="text"
  placeholder=".form-control-lg"
  aria-label=".form-control-lg example"
/>
<input
  class="block w-full px-3 py-2 border-gray-300 rounded focus:border-blue-50"
  type="text"
  placeholder="Default input"
  aria-label="default input example"
/>
<input
  class="block w-full px-3 py-2 text-sm border-gray-300 rounded focus:border-blue-50"
  type="text"
  placeholder=".form-control-sm"
  aria-label=".form-control-sm example"
/>

`;

const code3 = `
<input
  class="block w-full px-3 py-2 placeholder-gray-500 bg-gray-200 border-gray-300 rounded  focus:border-blue-50"
  type="text"
  placeholder="Disabled input"
  aria-label="Disabled input example"
  disabled
/>
<input
  class="block w-full px-3 py-2 placeholder-black bg-gray-200 border-gray-300 rounded  focus:border-blue-50"
  type="text"
  value="Disabled readonly input"
  aria-label="Disabled input example"
  disabled
  readonly
/>

`;

const code4 = `
<input
  class="block w-full px-3 py-2 placeholder-black bg-gray-200 border-gray-300 rounded  focus:border-blue-50"
  type="text"
  value="Readonly input here..."
  aria-label="readonly input example"
  readonly
/>

`;

const code5 = `
<div class="flex mb-4">
  <label for="exampleInputEmail1" class="inline-block p-1 mb-2">
    Email address
  </label>
  <div class="flex-grow pl-2">
    <input
      type="text"
      readonly
      class="block w-full px-3 py-2 border-white rounded focus:border-blue-50"
      id="staticEmail"
      value="email@example.com"
    />
  </div>
</div>
<div class="flex mb-4">
  <label for="exampleInputPassword1" class="inline-block p-1 mb-2">
    Password
  </label>
  <div class="flex-grow pl-2">
    <input
      class="block w-full px-3 py-2 border-gray-300 rounded  focus:border-blue-50"
      type="password"
      id="exampleInputPassword1"
    />
  </div>
</div>

`;
const code6 = `
<form class='flex flex-wrap items-center mb-4 space-x-3 space-y-3'>
  <input
    type='text'
    readonly
    class='inline px-3 py-2 border-white rounded focus:border-blue-50'
    id='staticEmail'
    value='email@example.com'
  />
  <input
    class='inline px-3 py-2 border-gray-300 rounded focus:border-blue-50 '
    type='password'
    id='exampleInputPassword1'
  />
  <button
    type='submit'
    class='inline px-3 py-2 text-white bg-blue-500 rounded '>
    Confirm Identity
  </button>
</form>
`;

const code7 = `
<label for="exampleColorInput" class="inline-block mb-2">Color picker</label>
<input
  type="color"
  class="block w-12 p-1 bg-white border-2 border-gray-300 rounded h-11"
  id="exampleColorInput"
  value="#563d7c"
  title="Choose your color"
/>

`;
const code8 = `
<label for="exampleDataList" class="inline-block mb-2">Datalist example</label>
<input
  class="block w-full px-3 py-2 border-2 border-gray-300 rounded  focus:border-blue-50"
  list="datalistOptions"
  id="exampleDataList"
  placeholder="Type to search..."
/>
<datalist id="datalistOptions">
  <option value="San Francisco" />
  <option value="New York" />
  <option value="Seattle" />
  <option value="Los Angeles" />
  <option value="Chicago" />
</datalist>

`;

const codes = [code1, code2, code3, code4, code5, code6, code7, code8];

export default codes;
