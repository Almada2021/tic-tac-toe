import { getAuth, onAuthStateChanged } from "@react-native-firebase/auth";
import React, { useEffect, useState } from "react";
import { Pressable, Text, View } from "react-native";

const ProfileScreen = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState<any>();

  // Handle user state changes
  function handleAuthStateChanged(user: any) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = onAuthStateChanged(getAuth(), handleAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  if (!user) {
    return (
      <View>
        <Pressable
          style={{
            marginTop: 200,
            padding: 20,
          }}
          onPress={() => {}}
        >
          <Text>Entrar con Google</Text>
        </Pressable>
        <Text>Login</Text>
      </View>
    );
  }

  return (
    <View>
      <Text>Welcome {user.email}</Text>
    </View>
  );
};

export default ProfileScreen;
