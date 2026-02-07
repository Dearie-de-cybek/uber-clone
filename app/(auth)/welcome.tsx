import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {router } from "expo-router";

const Onboarding = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white', height: '100%', alignItems: 'center', justifyContent: 'space-between', }}>
      <TouchableOpacity onPress={() => {
        router.replace('/(auth)/sign-up')
      }}
      className="w-full flex justify-end items-end p-5 bg-blue-700"
      >
        <Text className="text-black text-md font-JakartaBold">Skip</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Onboarding;
