const code1 = `
<form class="block">
  <div class="block mb-4">
    <label for="exampleInputEmail1" class="inline-block mb-2">Email address</label>
    <input
      class="block w-full px-3 py-2 border-gray-300 rounded focus:border-blue-50 "
      type="email"
      id="exampleInputEmail1"
      aria-describedby="emailHelp"
    />
    <div class="mt-2 text-sm text-gray-600">
      We'll never share your email with anyone else.
    </div>
  </div>
  <div class="block mb-4">
    <label for="exampleInputPassword1" class="inline-block mb-2">Password</label>
    <input
      class="block w-full px-3 py-2 border-gray-300 rounded focus:border-blue-50 "
      type="password"
      id="exampleInputPassword1"
    />
  </div>
  <div class="block mb-4">
    <input
      class="w-4 h-4 mr-2 border-gray-300 rounded focus:border-blue-50 "
      type="checkbox"
      id="exampleCheck1"
    />
    <label for="exampleCheck1">Checkout</label>
  </div>
  <button type="submit" class="inline-block px-3 py-2 text-white bg-blue-500 rounded ">
    Submit
  </button>
</form>

`;
const code2 = `
<label for="inputPassword5" class="inline-block mb-2">Password</label>
<input
  type="password"
  class="block w-full px-3 py-2 border-gray-300 rounded focus:border-blue-50"
  id="inputPassword5"
  aria-describedby="passwordHelpBlock"
/>
<div id="passwordHelpBlock" class="mt-2 text-sm text-gray-600">
  Your password must be 8-20 characters long, contain letters and numbers, and
  must not contain spaces, special characters, or emoji.
</div>
`;
const code3 = `
<div class="flex flex-wrap items-center w-full">
  <div class="flex-auto flex-grow-0 flex-shrink-0 px-2 pt-4">
    <label for="inputPassword6" class="">Password</label>
  </div>
  <div class="flex-auto flex-grow-0 flex-shrink-0 px-2 pt-4">
    <input
      type="password"
      id="inputPassword6"
      class="block w-full px-3 py-2 border-gray-300 rounded  focus:border-blue-50"
      aria-describedby="passwordHelpInline"
    />
  </div>
  <div class="flex-auto flex-grow-0 flex-shrink-0 px-2 pt-4">
    <span id="passwordHelpInline" class="mt-2 text-sm text-gray-600">
      Must be 8-20 characters long.
    </span>
  </div>
</div>

`;

const code4 = `
<form class="block">
  <fieldset disabled>
    <legend class="mb-2 text-2xl">Disabled fieldset example</legend>
    <div class="block mb-4">
      <label htmlFor="disabledTextInput" class="inline-block mb-2">
        Disabled input
      </label>
      <input
        type="text"
        id="disabledTextInput"
        class="block w-full px-3 py-2 placeholder-gray-500 bg-gray-200 border-gray-300 rounded focus:border-blue-50"
        placeholder="Disabled input"
      />
    </div>
    <div class="block mb-4">
      <label htmlFor="disabledSelect" class="inline-block mb-2">
        Disabled select menu
      </label>
      <select
        id="disabledSelect"
        class="block w-full px-3 py-2 bg-gray-200 border-gray-300 rounded "
      >
        <option>Disabled select</option>
      </select>
    </div>
    <div class="block mb-4">
      <div class="form-check">
        <input
          class="w-4 h-4 mr-2 border-gray-300 rounded focus:border-blue-50"
          type="checkbox"
          id="disabledFieldsetCheck"
          disabled
        />
        <label class="opacity-50" htmlFor="disabledFieldsetCheck">
          Can't check this
        </label>
      </div>
    </div>
    <button
      type="submit"
      class='"inline-block px-3 py-2 text-white bg-blue-500 rounded opacity-60 pointer-events-none cursor-default'
    >
      Submit
    </button>
  </fieldset>
</form>

`;

const codes = [code1, code2, code3, code4];

export default codes;
