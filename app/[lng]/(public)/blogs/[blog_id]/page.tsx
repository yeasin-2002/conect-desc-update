import Image from "next/image";
import { blog1 } from "../../../../../public/assets/images";
export default function BlogDetails() {
  return (
    <div>
      <div className=" px-10 py-6 mx-auto">
        <div className="max-w-6xl px-10 py-6 mx-auto bg-gray-50">
          <div className="h-96">
            <Image
              className="object-cover w-full shadow-sm h-full"
              src={blog1}
              alt=""
            />
          </div>

          <div className="flex items-center justify-start mt-4 mb-4">
            <a
              href="#"
              className="px-2 py-1 font-bold bg-red-400 text-white rounded-lg hover:bg-gray-500 mr-4"
            >
              By ConnectDesk
            </a>
          </div>
          <div className="mt-2">
            <a
              href="#"
              className="sm:text-3xl md:text-3xl lg:text-3xl xl:text-4xl font-bold text-secondary  hover:underline"
            >
              How to Increase Inventory Turnover: 6 Ways to Optimize Your
              Inventory
            </a>

            <div className="flex justify-start items-center mt-2">
              <p className="text-sm text-green-500 font-bold bg-gray-100 rounded-full py-2 px-2 hover:text-red-500">
                3000
              </p>
              <p className="text-sm text-gray-400 font-bold ml-5">Views</p>
            </div>
          </div>

          <div className="max-w-4xl px-10  mx-auto text-2xl text-gray-700 mt-4 rounded bg-gray-100">
            <div>
              <p className="mt-2 p-8">
                If you want to grow, you need to sell. That means not only do
                you need a well-stocked store, but you also need to ensure the
                rate at which inventory arrives and leaves your shop floor
                contributes to
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
