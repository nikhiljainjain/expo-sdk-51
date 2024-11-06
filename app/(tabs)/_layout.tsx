import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function RootLayout() {
    return (
        <Tabs 
            screenOptions={{
                tabBarActiveTintColor: "#ffd33d",
                headerStyle: {
                    backgroundColor: "#25292e",
                },
                headerShadowVisible: false,
                headerTintColor: "white",
                tabBarStyle: {
                    backgroundColor: "#25292e",
                }
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color, focused }) => <Ionicons name={focused ?  "home-sharp" : 'home-outline'} size={24} color={color} />,
                }}
            />
            <Tabs.Screen
                name="about"
                options={{
                    title: 'About',
                    tabBarIcon: ({ color, focused }) => <Ionicons name={focused ? "information-circle" : 'information-circle-outline'} size={24} color={color} />,
                }}
            />
        </Tabs>
    );
};