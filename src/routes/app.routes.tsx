import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../screens/app/Home";
import { Shop } from "../screens/app/Shop";
import { Profile } from "../screens/app/Profile";
import Ionicons from "@expo/vector-icons/Ionicons"



const Tab = createBottomTabNavigator()

export function TabRoutes(){
  return(
    <Tab.Navigator screenOptions={{
      headerShown: false,
      tabBarShowLabel: false,
      tabBarActiveTintColor: "#7B22D3",
      tabBarInactiveTintColor: "#8D8D8D",
      tabBarStyle: {
        backgroundColor: "#FFF",
        borderTopWidth: 1,
        height: 90,
        paddingBottom: 10,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
      }
      }}>
      <Tab.Screen
      name="home"
      component={Home} 
      options={{
        tabBarIcon: ({color, size}) => (
          <Ionicons name="home" color={color} size={size} />
        )
      }}
      />
      <Tab.Screen
      name="shop"
      component={Shop}
      options={{
        tabBarIcon: ({color, size}) => (
          <Ionicons name="bag" color={color} size={size} />
        )
      }}
      />
      <Tab.Screen
      name="profile"
      component={Profile}
      options={{
        tabBarIcon: ({color, size}) => (
          <Ionicons name="person" color={color} size={size} />
        )
      }}
      />
    </Tab.Navigator>
  )
}