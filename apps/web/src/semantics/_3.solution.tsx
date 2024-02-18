import { View } from 'ui';

const _3 = () => {
  return (
    <View
      title="3. Semantics (Forms)"
      difficulty={2}
      description="Copy the markup into the empty <div /> and fix any semantic oversights whilst preserving the styles. The end-result will look a little different without your intervention."
    >
      <div className="max-w-2xl flex flex-col gap-4">
        <h1 className="text-4xl mb-4">Checkout</h1>

        <form
          onSubmit={(event) => event?.preventDefault()}
          className="grid grid-cols-2 gap-16"
        >
          <fieldset className="col-span-1 flex flex-col gap-2">
            <legend className="font-bold mb-4">Personal Information</legend>
            <label>
              First Name:
              <input />
            </label>

            <label>
              Last Name:
              <input />
            </label>
          </fieldset>

          <fieldset className="col-span-1 flex flex-col gap-2">
            <legend className="font-bold mb-4">Payment Information</legend>
            <label>
              Country:
              <input />
            </label>

            <label>
              State:
              <input />
            </label>

            <label>
              Address:
              <input />
            </label>

            <label>
              Card Number
              <input />
            </label>

            <label>
              CVV
              <input />
            </label>
          </fieldset>

          <div className="col-span-2">
            <div className="my-12 bg-white h-px w-full" />

            <div className="flex flex-col gap-4 items-center">
              <button
                type="submit"
                className="bg-yellow-600 text-white py-2 px-4 w-full max-w-xs"
              >
                Payment
              </button>
              <small className="max-w-xs text-xs text-gray-400">
                By pressing "Payment", you certify that your details are
                correct. No refunds will be issued after the payment
                confirmation view is displayed.
              </small>
            </div>
          </div>
        </form>
      </div>
    </View>
  );
};

export default _3;
