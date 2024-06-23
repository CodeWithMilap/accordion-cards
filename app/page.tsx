import Image from "next/image";
import img1 from "../public/img1.jpg";
import icon1 from "../public/icon-park-outline_camp.svg";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="flex gap-6">
        {/* Card 1 */}
        <div className="relative">
          {/* Hidden checkbox */}
          <input type="radio" name="card" id="card1" className="peer hidden" />

          {/* Card container */}
          <label
            htmlFor="card1"
            className="block relative h-80 w-24 overflow-hidden rounded-[40px] cursor-pointer transition-all duration-500 ease-in-out peer-checked:w-96 "
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
          <div className="absolute h-14 bottom-8 left-0 right-0 px-5 grid grid-cols-12 items-center justify-center">
            {/* Icon */}
            <div className="w-14 h-14 flex items-center justify-center bg-white rounded-full col-span-2">
              <Image src={icon1} alt="Camping Icon" />
            </div>
          </div>

          {/* Text container */}
          <div className="absolute h-14 bottom-8 left-0 right-0 px-4 grid  grid-cols-12 items-center justify-center transition peer-checked:duration-500 peer-checked:ease-in-out peer-checked:transform opacity-0 translate-x-10 peer-checked:translate-x-0 peer-checked:opacity-100 peer-checked:delay-200">
            <div className="col-span-10 col-start-3 px-4">
              <div className="flex flex-col gap-1 min-w-[200px]">
                <h3 className="text-xl font-semibold text-white">Camping</h3>
                <p className="text-sm text-white">Lorem ipsum dolor amit</p>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative">
          {/* Hidden checkbox */}
          <input type="radio" name="card" id="card2" className="peer hidden" />

          {/* Card container */}
          <label
            htmlFor="card2"
            className="block relative h-80 w-24 overflow-hidden rounded-[40px] cursor-pointer transition-all duration-500 ease-in-out peer-checked:w-96 "
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
          <div className="absolute h-14 bottom-8 left-0 right-0 px-5 grid grid-cols-12 items-center justify-center">
            {/* Icon */}
            <div className="w-14 h-14 flex items-center justify-center bg-white rounded-full col-span-2">
              <Image src={icon1} alt="Camping Icon" />
            </div>
          </div>

          {/* Text container */}
          <div className="absolute h-14 bottom-8 left-0 right-0 px-4 grid  grid-cols-12 items-center justify-center transition peer-checked:duration-500 peer-checked:ease-in-out peer-checked:transform opacity-0 translate-x-10 peer-checked:translate-x-0 peer-checked:opacity-100 peer-checked:delay-200">
            <div className="col-span-10 col-start-3 px-4">
              <div className="flex flex-col gap-1 min-w-[200px]">
                <h3 className="text-xl font-semibold text-white">Camping</h3>
                <p className="text-sm text-white">Lorem ipsum dolor amit</p>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="relative">
          {/* Hidden checkbox */}
          <input type="radio" name="card" id="card3" className="peer hidden" />

          {/* Card container */}
          <label
            htmlFor="card3"
            className="block relative h-80 w-24 overflow-hidden rounded-[40px] cursor-pointer transition-all duration-500 ease-in-out peer-checked:w-96 "
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
          <div className="absolute h-14 bottom-8 left-0 right-0 px-5 grid grid-cols-12 items-center justify-center">
            {/* Icon */}
            <div className="w-14 h-14 flex items-center justify-center bg-white rounded-full col-span-2">
              <Image src={icon1} alt="Camping Icon" />
            </div>
          </div>

          {/* Text container */}
          <div className="absolute h-14 bottom-8 left-0 right-0 px-4 grid  grid-cols-12 items-center justify-center transition peer-checked:duration-500 peer-checked:ease-in-out peer-checked:transform opacity-0 translate-x-10 peer-checked:translate-x-0 peer-checked:opacity-100 peer-checked:delay-200">
            <div className="col-span-10 col-start-3 px-4">
              <div className="flex flex-col gap-1 min-w-[200px]">
                <h3 className="text-xl font-semibold text-white">Camping</h3>
                <p className="text-sm text-white">Lorem ipsum dolor amit</p>
              </div>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="relative">
          {/* Hidden checkbox */}
          <input type="radio" name="card" id="card4" className="peer hidden" />

          {/* Card container */}
          <label
            htmlFor="card4"
            className="block relative h-80 w-24 overflow-hidden rounded-[40px] cursor-pointer transition-all duration-500 ease-in-out peer-checked:w-96 "
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
          <div className="absolute h-14 bottom-8 left-0 right-0 px-5 grid grid-cols-12 items-center justify-center">
            {/* Icon */}
            <div className="w-14 h-14 flex items-center justify-center bg-white rounded-full col-span-2">
              <Image src={icon1} alt="Camping Icon" />
            </div>
          </div>

          {/* Text container */}
          <div className="absolute h-14 bottom-8 left-0 right-0 px-4 grid  grid-cols-12 items-center justify-center transition peer-checked:duration-500 peer-checked:ease-in-out peer-checked:transform opacity-0 translate-x-10 peer-checked:translate-x-0 peer-checked:opacity-100 peer-checked:delay-200">
            <div className="col-span-10 col-start-3 px-4">
              <div className="flex flex-col gap-1 min-w-[200px]">
                <h3 className="text-xl font-semibold text-white">Camping</h3>
                <p className="text-sm text-white">Lorem ipsum dolor amit</p>
              </div>
            </div>
          </div>
        </div>

        {/* Repeat the same structure for additional cards */}
      </div>
    </main>
  );
}
