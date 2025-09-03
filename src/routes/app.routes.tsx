import { createNativeStackNavigator } from "@react-navigation/native-stack"; 
import { ProfileScreen } from "../screens/Primary";
import { SkillsScreen } from "../screens/Skills";

const {Navigator, Screen}= createNativeStackNavigator();

export function AppRoutes(){
    return(
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen
                name='groups'
                component={ProfileScreen}
                />
            <Screen
                name='Skills'
                component={SkillsScreen}
                />
        </Navigator>
    );
}