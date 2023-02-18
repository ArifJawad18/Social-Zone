import React from "react";

const Checkout = () => {
  return (
    <form>
      <div className="flex justify-center">
        <textarea
          placeholder=" Textarea Field"
          className="textarea textarea-bordered textarea-lg w-full max-w-xs mt-5 ml-5"
        ></textarea>
        <fieldset className="w-full space-y-1 text-gray-800">
          <div className="flex">
            <input
              type="file"
              name="files"
              id="files"
              className="px-8 py-12 border-2 border-dashed rounded-md border-gray-300 text-gray-600 bg-gray-100 mt-5 ml-5"
            />
            <button className="btn btn-outline mt-12 ml-5">Submit</button>
          </div>
        </fieldset>
      </div>
    </form>
  );
};

export default Checkout;
