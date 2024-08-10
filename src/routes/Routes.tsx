import { NavigationContainer } from "@react-navigation/native";
import { TabRoutes } from "./app.routes";
import { StackRoutes } from "./auth.routes";
import { useContext } from "react";
import { AuthContext } from "../context/Auth";
import { SplashScreen } from "../screens/SplashScreen";

export function Routes(){
  const {authProps, loading} = useContext(AuthContext)
    if(loading){
      <SplashScreen />
    }
  return(
    <NavigationContainer>
      {authProps ? <TabRoutes /> : <StackRoutes />}
    </NavigationContainer>
  )
}