import { Tabs } from "expo-router";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useColorScheme, View, Text } from "react-native";
import { Colors } from "@/constants/Colors";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        tabBarInactiveTintColor: Colors[colorScheme ?? "light"].tabIconDefault,
        headerShown: false,
        tabBarStyle: { height: 60, paddingBottom: 10 },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarLabel: ({ focused }) => (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: focused ? "#304FFE" : "transparent",
                borderRadius:10,
                padding: 10,
              }}
            >
              <Ionicons
                name={focused ? "home" : "home-outline"}
                size={24}
                color={
                  focused
                    ? "white"
                    : Colors[colorScheme ?? "light"].tabIconDefault
                }
              />
              {focused && (
                <Text
                  style={{
                    color: focused
                      ? "white"
                      : Colors[colorScheme ?? "light"].tabIconDefault,
                    marginLeft: 5,
                  }}
                >
                  Home
                </Text>
              )}
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="Shop"
        options={{
          title: "Shop",
          tabBarLabel: ({ focused }) => (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: focused ? "#304FFE" : "transparent",
                borderRadius:10,
                padding: 10,
              }}
            >
              <Ionicons
                name={focused ? "storefront" : "storefront-outline"}
                size={24}
                color={
                  focused
                    ? "white"
                    : Colors[colorScheme ?? "light"].tabIconDefault
                }
              />
              {focused && (
                <Text
                  style={{
                    color: focused
                      ? "white"
                      : Colors[colorScheme ?? "light"].tabIconDefault,
                    marginLeft: 5,
                  }}
                >
                  Shop
                </Text>
              )}
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="Cart"
        options={{
          title: "Cart",
          tabBarLabel: ({ focused }) => (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: focused ? "#304FFE" : "transparent",
                borderRadius:8,

                padding: 10,
              }}
            >
              <Ionicons
                name={focused ? "cart" : "cart-outline"}
                size={24}
                color={
                  focused
                    ? "white"
                    : Colors[colorScheme ?? "light"].tabIconDefault
                }
              />
              {focused && (
                <Text
                  style={{
                    color: focused
                      ? "white"
                      : Colors[colorScheme ?? "light"].tabIconDefault,
                    marginLeft: 5,
                  }}
                >
                  Cart
                </Text>
              )}
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        options={{
          title: "Profile",
          tabBarLabel: ({ focused }) => (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: focused ? "#304FFE" : "transparent",
                borderRadius:10,
                padding: 10,
              }}
            >
              <Ionicons
                name={focused ? "person" : "person-outline"}
                size={24}
                color={
                  focused
                    ? "white"
                    : Colors[colorScheme ?? "light"].tabIconDefault
                }
              />
              {focused && (
                <Text
                  style={{
                    color: focused
                      ? "white"
                      : Colors[colorScheme ?? "light"].tabIconDefault,
                    marginLeft: 5,
                  }}
                >
                  Profile
                </Text>
              )}
            </View>
          ),
        }}
      />
    </Tabs>
  );
}
