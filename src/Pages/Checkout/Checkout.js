import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const imageHostKey = process.env.REACT_APP_imgbb_key;

  const navigate = useNavigate();

  console.log(imageHostKey);
  const handleAddDoctor = (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then(res => res.json())
      .then(imgData => {
        console.log(imgData)
        if (imgData.success){
          console.log(imgData.data.url);
          const doctor = {
            name: data.name,
            image: imgData.data.url,
          };
          // save information to the database
          fetch("https://y-six-ochre.vercel.app/doctors", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(doctor),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              toast.success(`${data.name} is added successfully`);
              navigate("/");
            });
        }
      });
  };

  return (
    <div className="h-[300px] flex justify-center items-center mt-5">
     
      <form onSubmit={handleSubmit(handleAddDoctor)}>
        <div className="">
          <textarea
            type="text"
            {...register("name", { required: "Name is Empty" })}
            className="input input-bordered  w-full max-w-xs"
            required placeholder="What's on your mind ?"
          />
          {errors.name && (
            <p className="text-red-500">{errors.name?.message}</p>
          )}
        </div>

        <div className="form-control w-full max-w-xs mt-8">
         
          <input
            type="file"
            {...register("image", { required: "Photo is Required" })}
            className="input   w-full max-w-xs"
            required
          />
          {errors.img && <p className="text-red-500">{errors.img?.message}</p>}
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
