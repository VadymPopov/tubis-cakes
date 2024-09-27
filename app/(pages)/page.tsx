'use client';

import SwiperReact from '../components/SwiperReact';

export default function Home() {
  return (
    <>
      <div className="bg-secondary px-3 py-8 sm:px-4 sm:py-10 lg:px-10 lg:py-16 lg:flex xl:px-16 justify-center xl:justify-around items-center gap-10 flex-row-reverse">
        <div className=" mb-5 text-center">
          <h1 className="text-3xl text-center  mb-10 font-normal text-mainDarkColor">
            For a cake that&apos;s truly meant to be, order with Tubi.
          </h1>
          <button className="transition-colors border rounded-lg text-lg hover:bg-accentColor  border-accentColor bg-peach text-mainLightColor px-4 py-2 ">
            Order now
          </button>
        </div>

        <div className="sm:h-[500px] lg:w-[600px] xl:w-[800px]  max-w-full max-h-full h-[300px]">
          <SwiperReact />
        </div>
      </div>

      <div className=" bg-mainLightColor px-3 py-8 sm:px-4 sm:py-10">
        <div className=" mb-5  text-justify">
          <p>
            Our baked goods are fully Halal and we carry a range of Vegan and GF
            products. In case you cannot find what you&apos;re looking for,
            email us and we can customize to your needs
          </p>
        </div>
      </div>

      <div className=" bg-secondary px-3 py-8 sm:px-4 sm:py-10">
        <div className=" mb-5 text-justify">
          <h1 className="text-3xl text-center  mb-10 font-normal text-mainDarkColor">
            For cake&apos;s sake, choose Tubi for the perfect bake!
          </h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
          voluptate ea amet quas est natus quos exercitationem quo dolor ullam.
          Quia, quis qui libero architecto dolorem omnis incidunt corporis vero
          culpa, accusantium obcaecati odio blanditiis! Delectus perspiciatis
          eius rerum id sapiente consequuntur fugit, laboriosam nisi rem
          repellendus provident eum doloremque.
        </div>
      </div>

      <div className=" bg-primary px-3 py-8 sm:px-4 sm:py-10">
        <div className=" mb-5 text-justify">
          <h1 className="text-3xl text-center  mb-10 font-normal text-mainLightColor">
            Something has to be here!
          </h1>
        </div>
      </div>
    </>
  );
}
