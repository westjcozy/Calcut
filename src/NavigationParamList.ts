/**
 * Navigation params for each route in the app.
 */
export type MainStackParamList = {
  Home: {};
  AddFood: {};
  Budget: {};
  Reports: {};
  Profile: {};
  FoodDetails: {
    foodId?: string;
    foodName?: string;
  };
};