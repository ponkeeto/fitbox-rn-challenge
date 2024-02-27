import { Button, Image, Text, View } from "react-native";
import { card, photoType, styles } from "../lib/";
import { useEffect, useState } from "react";

export const UserCard = ({
  userData,
  toProfile,
}: {
  userData: any;
  toProfile: () => void;
}) => {
  const { id, name, email, address, company } = userData;
  const [photo, setPhoto] = useState<photoType>();
  const [firstName, lastName] = name.split(' ')

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/albums/1/photos?id=${id}`)
      .then((res) => res.json())
      .then(([res]) => setPhoto(res));
  }, []);

  return (
    <View style={card}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image style={styles.image} source={{ uri: photo?.url }} />
      </View>
      <View
        style={{
          flex: 2,
          flexDirection: "column",
          paddingRight: 12,
        }}
      >
        <View
          style={{
            flexDirection: "column",
            marginBottom: 12,
          }}
        >
          <Text style={{ fontSize: 24, overflow: "hidden", maxHeight: 30 }}>
            {firstName} {lastName[0]}.
          </Text>
          <Text>{email}</Text>
          <Text>{address.city}</Text>
          <Text>{company.name}</Text>
        </View>
        <Button title="View Profile" onPress={toProfile} />
      </View>
    </View>
  );
};
