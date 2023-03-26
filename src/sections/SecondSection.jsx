import { faCampground, faCompass, faWater } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { swim, explore, camp } from "../assets/homeImages"




const SecondSection = () => {
  return <>
  
  <section className="text-gray-800 p-8">
  

    <div className="flex flex-wrap mb-12 items-center">
      <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 lg:pr-6 mb-6 lg:mb-0">
        <div className="relative overflow-hidden bg-no-repeat bg-cover ripple shadow-lg rounded-lg"
          >
          <img src={explore} className="w-full" alt="explore" />
          <a href="#!">
            <div
              className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
          ></div>
          </a>
        </div>
      </div>

      <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 lg:pl-6 p-8 md:p-20 lg:p-32">
        <h3 className="text-2xl font-bold mb-4 text-gray-600 dark:text-gray-200">Explore the woods</h3>
        <div className="text-red-600 text-sm mb-4 flex items-center font-medium">
        <div className="m-2">
          <FontAwesomeIcon icon={faCompass}/>
         </div>
         Explore
        </div>
        <p className="text-gray-500 mb-6">
          Ut pretium ultricies dignissim. Sed sit amet mi eget urna placerat vulputate. Ut
          vulputate est non quam dignissim elementum. Donec a ullamcorper diam.
        </p>
        <p className="text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quae nulla saepe rerum
          aspernatur odio amet perferendis tempora mollitia? Ratione unde magni omnis quaerat
          blanditiis cumque dolore placeat rem dignissimos?
        </p>
      </div>
    </div>

    <div className="flex flex-wrap lg:flex-row-reverse mb-12 items-center">
      <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 lg:pl-6 mb-6 lg:mb-0">
        <div className="relative overflow-hidden bg-no-repeat bg-cover ripple shadow-lg rounded-lg"
        >
          <img src={camp} className="w-full" alt="camp" />
          <a href="#!">
            <div
              className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
             ></div>
          </a>
        </div>
      </div>

      <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 lg:pr-6 p-8 md:p-20 lg:p-32">
        <h3 className="text-2xl font-bold mb-4 text-gray-600 dark:text-gray-200">Camp a spot</h3>
        <div className="text-blue-600 text-sm mb-4 flex items-center font-medium">
         <div className="m-2">
          <FontAwesomeIcon icon={faCampground}/>
         </div>
          Camp
        </div>
        <p className="text-gray-500">
          Duis sagittis, turpis in ullamcorper venenatis, ligula nibh porta dui, sit amet rutrum
          enim massa in ante. Curabitur in justo at lorem laoreet ultricies. Nunc ligula felis,
          sagittis eget nisi vitae, sodales vestibulum purus. Vestibulum nibh ipsum, rhoncus vel
          sagittis nec, placerat vel justo. Duis faucibus sapien eget tortor finibus, a eleifend
          lectus dictum. Cras tempor convallis magna id rhoncus. Suspendisse potenti. Nam mattis
          faucibus imperdiet. Proin tempor lorem at neque tempus aliquet. Phasellus at ex
          volutpat, varius arcu id, aliquam lectus. Vestibulum mattis felis quis ex pharetra
          luctus. Etiam luctus sagittis massa, sed iaculis est vehicula ut.
        </p>
      </div>
    </div>

    <div className="flex flex-wrap items-center">
      <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 lg:pr-6 mb-6 lg:mb-0">
        <div className="relative overflow-hidden bg-no-repeat bg-cover ripple shadow-lg rounded-lg"
        >
          <img src={swim} className="w-full" alt="swim" />
          <a href="#!">
            <div
               className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
             ></div>
          </a>
        </div>
      </div>

      <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 lg:pl-6 p-8 md:p-20 lg:p-32">
        <h3 className="text-2xl font-bold mb-4 text-gray-600 dark:text-gray-200">Swim wild</h3>
        <div className="text-yellow-600 text-sm mb-4 flex items-center font-medium">
          <div className="m-2">

         <FontAwesomeIcon icon={faWater}/>

          </div>
          Swim
        </div>
      
        <p className="text-gray-500">
          Sed sollicitudin purus sed nulla dignissim ullamcorper. Aenean tincidunt vulputate
          libero, nec imperdiet sapien pulvinar id. Nullam scelerisque odio vel lacus faucibus,
          tincidunt feugiat augue ornare. Proin ac dui vel lectus eleifend vestibulum et
          lobortis risus. Nullam in commodo sapien. Curabitur ut erat congue sem finibus
          eleifend egestas eu metus. Sed ut dolor id magna rutrum ultrices ut eget libero. Duis
          vel porttitor odio. Ut pulvinar sed turpis ornare tincidunt. Donec luctus, mi euismod
          dignissim malesuada, lacus lorem commodo leo, tristique blandit ante mi id metus.
          Integer et vehicula leo, vitae interdum lectus. Praesent nulla purus, commodo at
          euismod nec, blandit ultrices erat. Aliquam eros ipsum, interdum et mattis vitae,
          faucibus vitae justo. Nulla condimentum hendrerit leo, in feugiat ipsum condimentum
          ac. Maecenas sed blandit dolor.
        </p>
      </div>
    </div>
  </section>
  
  </>
};

export default SecondSection;
