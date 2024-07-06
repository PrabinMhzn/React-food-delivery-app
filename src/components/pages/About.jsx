import { HiOutlineDocumentText } from "react-icons/hi2";
import { LuHeartHandshake } from "react-icons/lu";
import { IoChatboxEllipsesOutline } from "react-icons/io5";

const About = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col md:flex-row justify-between items-center m-4 md:m-8 px-6">
        <div className="flex flex-col w-full md:w-1/2 p-4 md:p-16">
          <div className="p-4 ">
            <img
              src="https://images.pexels.com/photos/1117862/pexels-photo-1117862.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="rounded-3xl w-full"
            />
          </div>
          <div>
            <h1 className="text-2xl md:text-4xl font-bold align-middle pb-2 md:pb-4 px-4 uppercase">
              Back in 2018
            </h1>
            <p className="px-4 text-sm md:text-base text-justify font-medium hover:text-red-700 hover:scale-110">
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
        <div className="flex flex-col w-full md:w-1/2 p-4 md:p-16">
          <div>
            <h1 className="text-2xl md:text-4xl font-bold pb-2 md:pb-4 px-4 uppercase underline">
              Our Purpose
            </h1>
            <p className="px-4 text-sm md:text-base justify-center items-center text-justify font-medium hover:text-red-700 hover:scale-110">
            My Muscle Chef is all about offering smart nutrition that enables you to feel your best. We pair high-quality meals with exceptional taste with the ultimate convenience and ease, allowing you to focus on your holistic health needs and fitness goals.
            </p>
          </div>
          <div className="p-4 ">
            <img
              src="https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="rounded-3xl w-full"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center items-center m-4 md:m-8 gap-8 px-6 bg-red-50 rounded-2xl">
        <div className="text-center m-8 flex-col justify-center items-center">
          <div className="rounded-full bg-white m-4 flex justify-center items-center w-20 md:w-32 h-20 md:h-32 mx-auto text-4xl md:text-7xl">
            <HiOutlineDocumentText />
          </div>
          <p className="mt-2 md:mt-4 w-28 md:w-40 text-xs md:text-sm">
            This is a small description below the icon.
          </p>
        </div>

        <div className="text-center m-8 flex-col justify-center items-center">
          <div className="rounded-full bg-white m-4 flex justify-center items-center w-20 md:w-32 h-20 md:h-32 mx-auto text-4xl md:text-7xl">
            <LuHeartHandshake />
          </div>
          <p className="mt-2 md:mt-4 w-28 md:w-40 text-xs md:text-sm">
            This is a small description below the icon.
          </p>
        </div>
        <div className="text-center m-8 flex-col justify-center items-center">
          <div className="rounded-full bg-white m-4 flex justify-center items-center w-20 md:w-32 h-20 md:h-32 mx-auto text-4xl md:text-7xl">
            <IoChatboxEllipsesOutline />
          </div>
          <p className="mt-2 md:mt-4 w-28 md:w-40 text-xs md:text-sm">
            This is a small description below the icon.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center m-4 md:m-8 gap-8 px-6">
        <div className="flex flex-col bg-gray-200 rounded-2xl w-full md:w-auto">
          <div className="p-4 ">
            <img
              src="https://images.pexels.com/photos/1117862/pexels-photo-1117862.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="rounded-3xl w-full"
            />
          </div>
          <div>
            <h1 className="text-xl md:text-3xl font-bold align-middle pb-2 md:pb-4 px-4 uppercase">
              How we've evolved
            </h1>
            <p className="px-4 mb-4 md:mb-8 text-sm md:text-base text-justify">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius rem
              sed tempore maiores error beatae nam aperiam quidem est eaque
              atque illo voluptatum soluta, temporibus aliquam doloribus
              expedita voluptate totam?
            </p>
          </div>
        </div>
        <div className="flex flex-col w-full md:w-auto">
          <div>
            <h1 className="text-2xl md:text-4xl font-bold pb-2 md:pb-4 px-4 underline uppercase">
              Our Beliefs
            </h1>
            <p className="px-4 text-sm md:text-base justify-center items-center mx-4 md:p-4 text-justify">
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
              className="rounded-2xl w-full"
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
          <p className=" justify-center items-center text-sm capitalize font-medium text-red-600">
            
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
    </div>
  );
};

export default About;
