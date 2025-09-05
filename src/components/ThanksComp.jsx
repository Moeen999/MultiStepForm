import { IoCheckmarkDoneCircle } from "react-icons/io5";

export const Thank = () => {
  return (
    <div className=" rounded-xl mt-1 md:mt-14 p-8 md:p-12 shadow-sm text-center bg-white">
      <div className="mx-auto mb-6 w-16 h-16  flex items-center justify-center">
        <span className="text-6xl bg-[hsla(330,96%,73%,1)] text-white shadow-sm rounded-full ">
          <IoCheckmarkDoneCircle /> 
        </span>
      </div>
      <h2 className="text-2xl md:text-3xl font-bold text-[hsl(213,96%,18%)] mb-2">
        Thank You!
      </h2>
      <p className="mx-auto max-w-md text-[hsl(231,11%,63%)]">
         Thanks for confirming the subscription! We hope you have fun using our platform.
        If you ever need support, please feel free to email us at support@gmail.com.
      </p>
    </div>
  );
};
