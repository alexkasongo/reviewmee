import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/home";
import Header from "../shared/header";
import HeaderImage from "../shared/headerImage";
import ReviewDetails from "../screens/reviewDetails";
import About from "../screens/about";
import Profile from "../screens/user/profile";
import Profile3 from "../screens/Profile3";

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#9AC4F8",
  },
  headerTintColor: "white",
  headerBackTitle: " ",
};

const MainStackNavigator = ({ navigation }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#9AC4F8",
        },
        headerTintColor: "white",
        headerBackTitle: " ",
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: (props) => (
            <Header navigation={navigation} title="ConsentMee" />
          ),
          // headerBackground: () => <HeaderImage />,
        }}
      />
      <Stack.Screen name="ReviewDetails" component={ReviewDetails} />
    </Stack.Navigator>
  );
};

const ContactStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Profile" component={Profile3} />
    </Stack.Navigator>
  );
};

export { MainStackNavigator, ContactStackNavigator };
