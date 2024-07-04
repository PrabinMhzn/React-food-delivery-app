const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-auto bg-gray-200 bottom-0 pb-4 ">
      <div className="m-8 flex gap-8 py-8">
        <div className="max-w-32 ">
          <h1 className="font-bold mb-4 flex uppercase">
            Fresh <h1 className="text-red-500">Bite</h1>
          </h1>
          <ul className="text-xs uppercase">
            <li>ABN</li>
            <li>512 chalkstreet, Lutwyche, Brisbane, QLD 4030</li>
          </ul>
        </div>
        <div>
          <h1 className="font-medium text-sm mb-4">Our Ranges</h1>
          <ul className="text-xs">
            <li>Breakfast</li>
            <li>Snacks and Treat</li>
            <li>Drinks</li>
            <li>Indian Foods</li>
            <li>Protein Bites</li>
            <li>Energy Drinks</li>
            <li>Low Carb</li>
            <li>Low Calorie</li>
          </ul>
        </div>
        <div>
          <h1 className="font-medium text-sm mb-4">About Us</h1>
          <ul className="text-xs">
            <li>Home</li>
            <li>About</li>
            <li>Meal Plans</li>
            <li>Subscribe & Save</li>
            <li>FreshBite App</li>
            <li>Blog</li>
            <li>Career</li>
            <li>Student Discount</li>
          </ul>
        </div>
        <div>
          <h1 className="font-medium text-sm mb-4">Support</h1>
          <ul className="text-xs">
            <li>Contact Us</li>
            <li>FAQs</li>
            <li>Delivery</li>
            <li>Stocklists</li>
            <li>Dislaimer</li>
            <li>Privacy</li>
            <li>Terms</li>
            <li>Corporate program enquiry</li>
          </ul>
        </div>
        <div>
          <h1 className="font-medium text-sm mb-4">Other Sites</h1>

          <ul className="text-xs mb-8">
            <li>Retail</li>
            <li>Share Your Journey</li>
          </ul>
          <h1 className="font-medium text-sm mb-4">COntact Us</h1>

          <ul className="text-xs">
            <li>Mon- Fri, 9am-6pm</li>
            <li>Sat-Sun, 9am-5pm</li>
            <li>1300 615 375</li>
          </ul>
        </div>
        <div>
          <h1 className="font-medium text-sm mb-4">Download Our App</h1>
        </div>
      </div>
      <div className="flex w-full gap-48">
        <div className=" left-0 mx-8 ">
          <ul className="flex">
          <li ><img src="https://seeklogo.com/images/P/paypal-logo-484B6FE744-seeklogo.com.png" alt="" className="max-h-4"/></li>
          <li ><img src="https://seeklogo.com/images/V/VISA-logo-A32D589D31-seeklogo.com.png" alt="" className="max-h-4"/></li>
          <li><img src="https://seeklogo.com/images/M/Master_Card-logo-027CB51F96-seeklogo.com.png" alt="" className="max-h-4"/></li>
          <li><img src="https://seeklogo.com/images/Z/zip-co-limited-logo-1C84A10335-seeklogo.com.png" alt="" className="max-h-4"/></li>
          
           
          </ul>
        </div>

        <div className="absolute right-0 text-xs text-gray-500 mr-8">
          Copyright 2019-2024 Freshbite Pty. Ltd. All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
