import { useEffect } from "react";
import { ScrollView, View } from "react-native";
import { create } from "zustand";
import { UserCard } from "./components/userCard";
import { Profile } from "./components/profile";
import { User, usersType, container, styles } from "./lib";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const useUsers = create<usersType>()((set) => ({
  users: [],
  addUser: (user: User) => set((state) => ({ users: [...state.users, user] })),
}));

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="User List" component={HomePage} />
        <Stack.Screen name="Profile" component={ProfilePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const HomePage = ({ navigation }) => {
  const { users, addUser } = useUsers();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((res) => res.forEach((user: User) => addUser(user)));
  }, []);

  return (
    <View style={container}>
      <ScrollView style={styles.scrollView}>
        {users.map((user) => {
          return (
            <UserCard
              userData={user}
              key={user.id}
              toProfile={() => navigation.navigate("Profile", { id: user.id })}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

const ProfilePage = ({ navigation, route }) => {
  const id = route.params.id;
  const { users } = useUsers();
  const profile = users.find((user) => user.id === id);

  return <Profile profile={profile} id={id} />;
};
