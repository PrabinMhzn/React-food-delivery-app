import { HiOutlineDocumentText } from "react-icons/hi2";
import { LuHeartHandshake } from "react-icons/lu";
import { IoChatboxEllipsesOutline } from "react-icons/io5";

const About = () => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center m-8 px-6">
        <div className="flex flex-col w-1/2 p-16">
          <div className="p-4 ">
            <img
              src="https://images.pexels.com/photos/1117862/pexels-photo-1117862.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="rounded-3xl"
            />
          </div>
          <div>
            <h1 className="text-4xl font-bold align-middle pb-4 h-full px-4 uppercase">
              Back in 2018
            </h1>
            <p className="px-4 text-justify">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius rem
              sed tempore maiores error beatae nam aperiam quidem est eaque
              atque illo voluptatum soluta, temporibus aliquam doloribus
              expedita voluptate totam? Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Iusto ipsa at consectetur. Necessitatibus
              inventore rem ad nobis laborum velit ipsa cumque assumenda.
              Molestiae ullam a porro modi obcaecati voluptatibus ad
              exercitationem harum hic. Sequi consectetur debitis reiciendis
              saepe inventore dolorum beatae voluptate? At aliquid, adipisci
              perspiciatis hic recusandae tempora cum!
            </p>
          </div>
        </div>
        <div className="flex flex-col w-1/2 p-16">
          <div>
            <h1 className="text-4xl font-bold pb-4 px-4 uppercase underline">
              Our Purpose
            </h1>
            <p className="px-4 justify-center items-center text-left font-medium">
              About section Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Quia illo animi voluptas. Perspiciatis praesentium numquam
              id dolor unde ab, quo adipisci laudantium dignissimos laborum non
              repellendus eaque vel nobis minus, sequi voluptates excepturi
              officiis similique eos saepe voluptatum accusamus. Minima natus,
              dolor id doloribus dolorum voluptatem expedita nulla ad
              reiciendis?
            </p>
          </div>
          <div className="p-4 ">
            <img
              src="https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="rounded-3xl"
            />
          </div>
        </div>
      </div>

      <div class="flex justify-center items-center mx-8 bg-red-50 gap-28 rounded-2xl mb-8 ">
        <div class="text-center m-8 flex-col justify-center items-center ">
          <div className="rounded-full bg-white m-4 flex justify-center items-center  w-32 h-32 mx-auto text-7xl">
            <HiOutlineDocumentText />
          </div>
          <p class="mt-4 w-40">This is a small description below the icon.</p>
        </div>

        <div class="text-center m-8 flex-col justify-center items-center">
          <div className="rounded-full bg-white m-4 flex justify-center items-center  w-32 h-32 mx-auto text-7xl">
            <LuHeartHandshake />
          </div>
          <p class="mt-4 w-40 ">This is a small description below the icon.</p>
        </div>
        <div class="text-center m-8 flex-col justify-center items-center">
          <div className="rounded-full bg-white m-4 flex justify-center items-center  w-32 h-32 mx-auto text-7xl">
            <IoChatboxEllipsesOutline />
          </div>
          <p class="mt-4 w-40 ">This is a small description below the icon.</p>
        </div>
      </div>

      <div className="flex justify-between items-center m-8 gap-8 px-6">
        <div className="flex flex-col bg-gray-200 rounded-2xl">
          <div className="p-4 ">
            <img
              src="https://images.pexels.com/photos/1117862/pexels-photo-1117862.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="rounded-3xl"
            />
          </div>
          <div>
            <h1 className="text-3xl font-bold align-middle pb-4 h-full px-4 uppercase">
              How we've evolved
            </h1>
            <p className="px-4 mb-8 text-justify">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius rem
              sed tempore maiores error beatae nam aperiam quidem est eaque
              atque illo voluptatum soluta, temporibus aliquam doloribus
              expedita voluptate totam?
            </p>
          </div>
        </div>
        <div className="flex flex-col ">
          <div>
            <h1 className="text-4xl font-bold pb-4 px-4 underline uppercase">
              Our Beliefs
            </h1>
            <p className="px-4 justify-center items-center mx-4 p-4 text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              omnis nulla, sint iste laborum est veniam asperiores. Quam, eum
              ipsam mollitia numquam beatae fugit velit quasi nam minus nulla
              dolor impedit amet quo laborum ut rerum sit illum laudantium
              doloremque, labore quis in necessitatibus officiis? In, ea?
              Blanditiis, ratione labore!
            </p>
          </div>
          <div className="p-4">
            <img
              src="https://images.pexels.com/photos/4392039/pexels-photo-4392039.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="rounded-2xl contrast-75 hover:contrast-100"
            />
          </div>
        </div>
      </div>

      <div className="flex m-8 rounded-2xl overflow-hidden ">
        <div className="w-1/2 h-60   flex justify-center items-center">
          <img src="src/assets/freshbiteoffice.jpg" alt="" />
        </div>

        <div className="w-1/2 flex flex-col h-60 bg-red-50 px-8 ">
          <h1 className="text-4xl font-bold pb-4   uppercase mt-4">Careers</h1>
          <p className=" justify-center items-center text-sm capitalize">
            {" "}
            join Our team!!
          </p>

          <p className=" justify-center items-center py-2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque
            amet perspiciatis alias esse deserunt neque aut hic non eum tempore!
          </p>

          <button className="cursor-pointer flex justify-center items-center text-white bg-red-950 hover:bg-red-500 active:border rounded-2xl duration-100 w-24 m-4 my-4">
            Get Offer
          </button>
        </div>
      </div>

      {/* <div>
        <a
          href="https://react-icons.github.io/react-icons/"
          target="_blank"
          className="text-amber-500"
        >
          {" "}
          react icons
        </a>{" "}
        <br />
        <a
          href="https://www.hover.dev/components"
          target="_blank"
          className="text-blue-900"
        >
          hover.dev
        </a>{" "}
        <br />
        <a
          href="https://tailwindcss.com/docs/display"
          target="_blank"
          className="text-blue-900"
        >
          Tailwind css
        </a>{" "}
        <br />
        <a
          href="https://neumorphism.io/#d6d6d6"
          target="_blank"
          className="text-blue-900"
        >
          Neumorphism
        </a>
        <br />
        <a
          href="https://www.mymusclechef.com/"
          target="_blank"
          className="text-red-400"
        >
          mymuscle chef
        </a>{" "}
        <br />
        <a href="https://uiverse.io/" target="_blank" className="text-red-400">
          uiverse
        </a>{" "}
        <br />
        <a
          href="https://www.pexels.com/"
          target="_blank"
          className="text-red-400"
        >
          pexel free image
        </a>{" "}
        <br />
      </div> */}
    </div>
  );
};

export default About;
