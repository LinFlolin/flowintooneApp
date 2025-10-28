import { Tabs } from "expo-router";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

 export default function TabLayout() {
  return (
    <Tabs screenOptions={{tabBarActiveTintColor: 'purple' , tabBarInactiveTintColor :'white' }} >
      <Tabs.Screen name="index" options={{title:'Home' , tabBarIcon: ({size,color})=> <FontAwesome name="home" size={size} color={color} /> }}/>
      <Tabs.Screen name="profile" options={{title:'Profile', tabBarIcon : ({ size,color })=> <MaterialCommunityIcons name="account" size={size} color={color} /> }}/>   
      <Tabs.Screen name="search" options={{title:'Search' , tabBarIcon: ({size,color})=> <FontAwesome name="search" size={size} color={color} /> }}/>
    </Tabs>
  );
}
