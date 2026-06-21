import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';

import PerfilScreen from './screens/PerfilScreen.js';
import HabilidadesScreen from './screens/HabilidadesScreen.js';
import ProjetosScreen from './screens/ProjetosScreen.js';

const Tab = createBottomTabNavigator();

function TabNavigator() {
    return (
        <Tab.Navigator
            initialRouteName="Perfil"
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    borderTopWidth: 0,
                    paddingBottom: 0,
                    height: 80,
                },
                tabBarLabelStyle: {
                    fontSize: 16,
                    fontWeight: 'bold',
                    color: 'white',
                },
                tabBarItemStyle: {
                    flexDirection: 'column',
                    alignSelf: 'center',
                    height: 80,
                },
                tabBarActiveBackgroundColor: '#386d68',
                tabBarInactiveBackgroundColor: '#56918c',
            }}>
            <Tab.Screen
                name="Perfil"
                component={PerfilScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="person" size={24} color="white" />
                    ),
                }}
            />

            <Tab.Screen
                name="Habilidades"
                component={HabilidadesScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="star" size={24} color="white" />
                    ),
                }}
            />

            <Tab.Screen
                name="Projetos"
                component={ProjetosScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="folder" size={24} color="white" />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

export default function App() {
    return (
        <NavigationContainer>
            <TabNavigator />
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
