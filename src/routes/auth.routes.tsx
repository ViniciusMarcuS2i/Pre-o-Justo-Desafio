import { createStackNavigator } from "@react-navigation/stack"
import { SignIn } from "../screens/auth/SignIn"
import { SignUp } from "../screens/auth/SignUp"


const Stack = createStackNavigator()

export function StackRoutes(){
  return(
    <Stack.Navigator
      screenOptions={{headerShown: false}}
    >
        <Stack.Screen 
          name="sign-in"
          component={SignIn}
        />
        <Stack.Screen
          name="sign-up"
          component={SignUp}
        />
    </Stack.Navigator>
  )
}