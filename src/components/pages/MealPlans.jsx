import SelectableArea from "../SelectableArea";
import { BsFillEmojiWinkFill } from "react-icons/bs";
import { GiWeightScale } from "react-icons/gi";
import { GiThreeLeaves } from "react-icons/gi";
import { GiHotSpices } from "react-icons/gi";
import MealNumberSelector from "../MealNumberSelector";

const MealPlans = () => {
  return (
    <div className="flex justify-center align-center mt-24 min-h-screen">
      <div className="flex flex-col w-2/3 items-center px-6 m-8">
        
        <div className="w-full">
          <h1 className="text-3xl font-bold uppercase text-center mb-8">
            Choose your meal plan
          </h1>
          <h1 className=" text-center font-bold mb-8">
            {" "}
            Pick meal plans that suits your lifestyle. Skip or cancel at
            anytime.
          </h1>
        </div>
        <div className=" flex-col items-center p-8 w-full h-full shadow-gray-400  shadow-inner rounded-2xl">
          <div className="flex flex-col items-center mb-8">
            <h1 className="font-bold text-base mb-4">
              1.Choose Your Preferences
            </h1>
            <p className=" text-sm text-center">
              your preferences will help us show you the most relevant meals
              first. You will still have access to all the meals each week.
            </p>

            <div className="flex justify-center items-center p-4 w-full ">
              <div className="flex-col items-center justify-center gap-8 mb-8">
                <div className="flex gap-8 mb-8">
                  <SelectableArea>
                    <div className=" text-center">
                      <GiThreeLeaves className="mx-auto h-8 w-8 fill-lime-400 " />
                      <h2 className="font-bold text-lg">Vegetarian</h2>
                    </div>
                  </SelectableArea>
                  <SelectableArea className="mt-4">
                    <div className="text-center">
                      <GiHotSpices className="mx-auto h-8 w-8 fill-red-600 " />
                      <h2 className="font-bold text-lg">Authentic Asian</h2>
                    </div>
                  </SelectableArea>
                </div>
                <div className="flex gap-8 mb-8">
                  <SelectableArea>
                    <div className="text-center">
                      <BsFillEmojiWinkFill className="mx-auto h-8 w-8 fill-lime-600 " />
                      <h2 className="font-bold text-lg">Everyday Healthy</h2>
                    </div>
                  </SelectableArea>
                  <SelectableArea className="mt-4">
                    <div className="text-center">
                      <GiWeightScale className="mx-auto h-8 w-8  fill-teal-600" />
                      <h2 className="font-bold text-lg">Low Calorie</h2>
                    </div>
                  </SelectableArea>
                </div>
                <p className="text-center text-sm">
                  Our widest range of healthy, chef-designed meals
                </p>
              </div>
            </div>
          </div>

          {/* second section */}

          <div className="flex flex-col items-center mb-8">
            <h1 className="font-bold text-base mb-4">
              1.Select meals per week
            </h1>
            <p className=" text-sm text-center mb-8 font-medium">
              Meals per week
            </p>

            <MealNumberSelector/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MealPlans;
