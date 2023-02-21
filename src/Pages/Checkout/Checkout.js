import React from "react";
import { useForm } from "react-hook-form";

const Checkout = () => {
  const {register, handleSubmit, formState: {errors } } = useForm();
  const handleAddDoctor = data => {
    console.log(data);



  }

  return (
    <div className="h-[300px] flex justify-center items-center mt-5">
     <form onSubmit={handleSubmit(handleAddDoctor)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              {...register("name", { required: "Name is Empty" })}
              className="input input-bordered  w-full max-w-xs"
            />
            {errors.name && (
              <p className="text-red-500">{errors.name?.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              {...register("email", { required: "Email is Empty" })}
              className="input input-bordered  w-full max-w-xs"
            />
            {errors.email && (
              <p className="text-red-500">{errors.email?.message}</p>
            )}
          </div>
         
          <input
            className=" btn  w-full mt-5 px-8 py-3 font-semibold rounded-md bg-sky-600 text-gray-50"
            value="Submit"
            type="submit"
          />
        
        </form>
   </div>
  );
};

export default Checkout;
