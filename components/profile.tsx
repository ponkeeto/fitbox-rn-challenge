import { useEffect, useState } from "react";
import { User, container, photoType, postsType, styles } from "../lib";
import { Image, ScrollView, Text, View } from "react-native";

export const Profile = ({ id, profile }: { id: number; profile: User }) => {
  const { name, email, address, company, phone, website } = profile;
  const [photo, setPhoto] = useState<photoType>();
  const [posts, setPosts] = useState<postsType[]>([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/albums/1/photos?id=${id}`)
      .then((res) => res.json())
      .then(([res]) => setPhoto(res));
  }, [id]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
      .then((res) => res.json())
      .then((res) => setPosts(res));
  }, [id]);

  return (
    <View style={container}>
      <ScrollView style={{ flex: 3 }}>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            paddingVertical: 16,
          }}
        >
          <Image style={styles.image} source={{ uri: photo?.url }} />
          <Text style={{ fontSize: 32 }}>{name}</Text>
          <Text style={{ fontSize: 16 }}>{company.name}</Text>
          <Text>{email}</Text>
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            paddingVertical: 16,
          }}
        >
          <Text>{website}</Text>
          <Text>{phone}</Text>
          <Text>
            {address.suite}
            {", "}
            {address.street}
            {", "}
            {address.city}
            {", "}
            {address.zipcode}
          </Text>
        </View>
        {posts.map((post) => {
          return <PostCard post={post} />;
        })}
      </ScrollView>
    </View>
  );
};

const PostCard = ({ post }: { post: postsType }) => {
  return (
    <View style={styles.post}>
      <Text style={{ fontSize: 24, fontWeight: "500" }}>{post.title}</Text>
      <Text>{post.body}</Text>
    </View>
  );
};
