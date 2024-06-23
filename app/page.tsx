import Image from "next/image";
import img1 from "../public/img1.jpg";
import icon1 from "../public/icon-park-outline_camp.svg";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="flex lg:gap-6 gap-4 overflow-auto">
        {/* Card 1 */}
        <div className="relative overflow-hidden">
          {/* Hidden checkbox */}
          <input type="radio" name="card" id="card1" className="peer hidden" />

          {/* Card container */}
          <label
            htmlFor="card1"
            className="block relative lg:h-80 lg:w-24 h-44 w-12 overflow-hidden lg:rounded-[40px] rounded-3xl cursor-pointer transition-all duration-500 ease-in-out lg:peer-checked:w-96 peer-checked:w-48"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 "></div>

            <Image
              className="w-full h-full object-cover"
              src={img1}
              alt=""
              height={330}
              width={420}
            />
          </label>

          {/* Icon container */}
          <div className="absolute h-14 lg:bottom-8 bottom-1 left-0 right-0 lg:px-5 px-[10px] grid grid-cols-12 items-center justify-center">
            {/* Icon */}
            <div className="lg:w-14 lg:h-14 w-7 h-7 flex items-center justify-center bg-white rounded-full col-span-2">
              <Image src={icon1} alt="Camping Icon" />
            </div>
          </div>

          {/* Text container */}
          <div className="absolute h-14 lg:bottom-8 bottom-1 left-0 right-0 px-4 grid  grid-cols-12 items-center justify-center transition peer-checked:duration-500 peer-checked:ease-in-out peer-checked:transform opacity-0 translate-x-10 peer-checked:translate-x-0 peer-checked:opacity-100 peer-checked:delay-200">
            <div className="col-span-10 col-start-3 lg:px-4">
              <div className="flex flex-col lg:gap-1 lg:min-w-[200px] min-w-[100px]">
                <h3 className="lg:text-xl text-sm font-semibold text-white">Camping</h3>
                <p className="lg:text-sm text-xs text-white">Lorem ipsum dolor amit</p>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative overflow-hidden">
          {/* Hidden checkbox */}
          <input type="radio" name="card" id="card2" className="peer hidden" />

          {/* Card container */}
          <label
            htmlFor="card2"
            className="block relative lg:h-80 lg:w-24 h-44 w-12 overflow-hidden lg:rounded-[40px] rounded-3xl cursor-pointer transition-all duration-500 ease-in-out lg:peer-checked:w-96 peer-checked:w-48"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 "></div>

            <Image
              className="w-full h-full object-cover"
              src={img1}
              alt=""
              height={330}
              width={420}
            />
          </label>

          {/* Icon container */}
          <div className="absolute h-14 lg:bottom-8 bottom-1 left-0 right-0 lg:px-5 px-[10px] grid grid-cols-12 items-center justify-center">
            {/* Icon */}
            <div className="lg:w-14 lg:h-14 w-7 h-7 flex items-center justify-center bg-white rounded-full col-span-2">
              <Image src={icon1} alt="Camping Icon" />
            </div>
          </div>

          {/* Text container */}
          <div className="absolute h-14 lg:bottom-8 bottom-1 left-0 right-0 px-4 grid  grid-cols-12 items-center justify-center transition peer-checked:duration-500 peer-checked:ease-in-out peer-checked:transform opacity-0 translate-x-10 peer-checked:translate-x-0 peer-checked:opacity-100 peer-checked:delay-200">
            <div className="col-span-10 col-start-3 lg:px-4">
              <div className="flex flex-col lg:gap-1 lg:min-w-[200px] min-w-[100px]">
                <h3 className="lg:text-xl text-sm font-semibold text-white">Camping</h3>
                <p className="lg:text-sm text-xs text-white">Lorem ipsum dolor amit</p>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="relative overflow-hidden">
          {/* Hidden checkbox */}
          <input type="radio" name="card" id="card3" className="peer hidden" />

          {/* Card container */}
          <label
            htmlFor="card3"
            className="block relative lg:h-80 lg:w-24 h-44 w-12 overflow-hidden lg:rounded-[40px] rounded-3xl cursor-pointer transition-all duration-500 ease-in-out lg:peer-checked:w-96 peer-checked:w-48"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 "></div>

            <Image
              className="w-full h-full object-cover"
              src={img1}
              alt=""
              height={330}
              width={420}
            />
          </label>

          {/* Icon container */}
          <div className="absolute h-14 lg:bottom-8 bottom-1 left-0 right-0 lg:px-5 px-[10px] grid grid-cols-12 items-center justify-center">
            {/* Icon */}
            <div className="lg:w-14 lg:h-14 w-7 h-7 flex items-center justify-center bg-white rounded-full col-span-2">
              <Image src={icon1} alt="Camping Icon" />
            </div>
          </div>

          {/* Text container */}
          <div className="absolute h-14 lg:bottom-8 bottom-1 left-0 right-0 px-4 grid  grid-cols-12 items-center justify-center transition peer-checked:duration-500 peer-checked:ease-in-out peer-checked:transform opacity-0 translate-x-10 peer-checked:translate-x-0 peer-checked:opacity-100 peer-checked:delay-200">
            <div className="col-span-10 col-start-3 lg:px-4">
              <div className="flex flex-col lg:gap-1 lg:min-w-[200px] min-w-[100px]">
                <h3 className="lg:text-xl text-sm font-semibold text-white">Camping</h3>
                <p className="lg:text-sm text-xs text-white">Lorem ipsum dolor amit</p>
              </div>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="relative overflow-hidden">
          {/* Hidden checkbox */}
          <input type="radio" name="card" id="card4" className="peer hidden" />

          {/* Card container */}
          <label
            htmlFor="card4"
            className="block relative lg:h-80 lg:w-24 h-44 w-12 overflow-hidden lg:rounded-[40px] rounded-3xl cursor-pointer transition-all duration-500 ease-in-out lg:peer-checked:w-96 peer-checked:w-48"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 "></div>

            <Image
              className="w-full h-full object-cover"
              src={img1}
              alt=""
              height={330}
              width={420}
            />
          </label>

          {/* Icon container */}
          <div className="absolute h-14 lg:bottom-8 bottom-1 left-0 right-0 lg:px-5 px-[10px] grid grid-cols-12 items-center justify-center">
            {/* Icon */}
            <div className="lg:w-14 lg:h-14 w-7 h-7 flex items-center justify-center bg-white rounded-full col-span-2">
              <Image src={icon1} alt="Camping Icon" />
            </div>
          </div>

          {/* Text container */}
          <div className="absolute h-14 lg:bottom-8 bottom-1 left-0 right-0 px-4 grid  grid-cols-12 items-center justify-center transition peer-checked:duration-500 peer-checked:ease-in-out peer-checked:transform opacity-0 translate-x-10 peer-checked:translate-x-0 peer-checked:opacity-100 peer-checked:delay-200">
            <div className="col-span-10 col-start-3 lg:px-4">
              <div className="flex flex-col lg:gap-1 lg:min-w-[200px] min-w-[100px]">
                <h3 className="lg:text-xl text-sm font-semibold text-white">Camping</h3>
                <p className="lg:text-sm text-xs text-white">Lorem ipsum dolor amit</p>
              </div>
            </div>
          </div>
        </div>

        {/* Repeat the same structure for additional cards */}
      </div>
    </main>
  );
}
