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
          <div className="col-span-1 flex flex-col gap-2">
            <p className="font-bold mb-2">Personal Information</p>
            <div>
              <p>First Name:</p>
              <input />
            </div>

            <div>
              <p>Last Name:</p>
              <input />
            </div>
          </div>

          <div className="col-span-1 flex flex-col gap-2">
            <h3 className="font-bold mb-2">Payment Information</h3>
            <div>
              <p>Country:</p>
              <input />
            </div>

            <div>
              <p>State:</p>
              <input />
            </div>

            <div>
              <p>Address:</p>
              <input />
            </div>

            <div>
              <p>Card Number</p>
              <input />
            </div>

            <div>
              <p>CVV</p>
              <input />
            </div>
          </div>

          <div className="col-span-2">
            <div className="my-12 bg-white h-px w-full" />

            <div className="flex flex-col gap-4 items-center">
              <button className="bg-yellow-600 text-white py-2 px-4 w-full max-w-xs">
                Payment
              </button>
              <p className="max-w-xs text-xs text-gray-400">
                By pressing "Payment", you certify that your details are
                correct. No refunds will be issued after the payment
                confirmation view is displayed.
              </p>
            </div>
          </div>
        </form>
      </div>

      <div className="max-w-2xl flex flex-col gap-4">
        {/** Your solution goes here. */}
      </div>
    </View>
  );
};

export default _3;
