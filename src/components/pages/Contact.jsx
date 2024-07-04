import { MdMailOutline } from "react-icons/md";
import { BiPhoneCall } from "react-icons/bi";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { BsBoxSeam } from "react-icons/bs";

const Contact = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col mt-28 justify-center items-center ">
        <div className="flex justify-center items-center gap-8 mt-8 m-8 w-2/3 ">
          <div className="w-1/2 p-8">
            <div>
              <h1 className="text-4xl font-bold text-black capitalize my-4 text-center">
                CONTACT US
              </h1>
              <p className="text-xs text-center mb-4">
                At FreshBite, we're always here for you. Whether you’ve got
                questions about our meal plans, interested in becoming a
                retailer, or looking for a corporate deal, we want to hear from
                you.
              </p>
              <p className="text-xs text-center">
                Our friendly team is ready to answer your questions, clarify
                information, and listen to your feedback.
              </p>
            </div>
          </div>
          <div className="w-1/2 ">
            <img
              src="https://images.pexels.com/photos/18620325/pexels-photo-18620325/free-photo-of-metal-plate-with-roasted-chicken-and-rice-on-a-table.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="w-full h-80 object-cover  mb-4 rounded-2xl "
            />
          </div>
        </div>
        <div className="flex bg-red-50 w-full h-60 items-center justify-center gap-12 mb-16">
          {/* email */}
          <div className="flex flex-col w-36 h-36 items-center">
            <div>
              <MdMailOutline className="w-12 h-12 " />
            </div>
            <h1 className="font-medium  text-center">Email Us</h1>
            <p className="text-xs  text-center">
              Send us an email request below about your inquiry
            </p>
            <button className="border-2 rounded-full border-red-800 px-2 py-1 text-xs text-center mt-2">
              Get in Touch
            </button>
          </div>
          {/* call us */}
          <div className="flex flex-col w-36 h-36 items-center">
            <div>
              <BiPhoneCall className="w-12 h-12 " />
            </div>
            <h1 className="font-medium mb-2 text-center">Call Us</h1>
            <p className="text-xs  text-center">1300 625 375</p>
            <p className="text-xs  text-center">Mon-Fri: 9am-6pm AEST</p>
            <p className="text-xs  text-center">1Sat - Sun: 9am - 5pm AEST</p>
          </div>
          {/* live chat */}
          <div className="flex flex-col w-36 h-36 items-center">
            <div>
              <IoChatboxEllipsesOutline className="w-12 h-12 " />
            </div>
            <h1 className="font-medium  text-center">Live Chat</h1>
            <p className="text-xs my-2 text-center">
              Mon-Fri: 9am-6pm AEST Sat-Sun: 9am-5pm AEST
            </p>
          </div>
          {/* Mailing Address */}
          <div className="flex flex-col w-36 h-36 items-center">
            <div>
              <BsBoxSeam className="w-12 h-12 " />
            </div>
            <h1 className="font-medium m-2 text-center">Email Us</h1>
            <p className="text-xs  text-center">FreshBite</p>
            <p className="text-xs  text-center">512 Chalk Street</p>
            <p className="text-xs  text-center">Lutwyche QLD 4030</p>
          </div>
        </div>
{/* FAQ */}
        <div className="flex gap-8 mb-16">
          <h1 className="font-medium">Find Answers to your common questions through our FAQs page</h1>
          <button className="border-2 rounded-full border-red-800 px-2 py-1 text-xs text-center font-medium">
            Learn More
          </button>
        </div>
{/* retailers */}
        <div className="flex justify-center items-center gap-8 mt-8 m-8 w-2/3 ">
          <div className="w-1/2 ">
            <img
              src="https://images.pexels.com/photos/18620325/pexels-photo-18620325/free-photo-of-metal-plate-with-roasted-chicken-and-rice-on-a-table.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="w-full h-80 object-cover  mb-4 rounded-2xl "
            />
          </div>
          <div className="w-1/2 p-8">
            <div>
              <h1 className="text-4xl font-bold text-black capitalize my-4 text-center">
                Retailers
              </h1>
              <p className="text-xs text-center mb-4">
                At My Muscle Chef, we're always here for you. Whether you’ve got
                questions about our meal plans, interested in becoming a
                retailer, or looking for a corporate deal, we want to hear from
                you.
              </p>
              <button className="border-2 rounded-full border-red-800 px-2 py-1 text-xs text-center mt-2 bg-red-950 text-white">
              <h1>Register your interest</h1>
            </button>
            </div>
          </div>
        </div>

        {/* find stock */}
        <div className="flex gap-8 mb-16">
          <h1 className="font-medium">Find us at your local store</h1>
          <button className="border-2 rounded-full border-red-800 px-2 py-1 text-xs text-center font-medium">
            Find a stocklist
          </button>
        </div>

      </div>
    </div>
  );
};

export default Contact;
