import React, { useState, useEffect } from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./Screens/LoginScreen";
import LoginSplash from "./Screens/LoginSplash";
import SignUpPage from "./Screens/SignUp";
import Home from "./Screens/Home";
import Services from "./Screens/Services";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
	const Stack = createNativeStackNavigator();

	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{ headerShown: false }}>
				<Stack.Screen name="LoginSplash" component={LoginSplash} />
				<Stack.Screen name="Login" component={LoginScreen} />
				<Stack.Screen name="SignUp" component={SignUpPage} />
				<Stack.Screen name="Home" component={Home} />
				<Stack.Screen name="Services" component={Services} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
