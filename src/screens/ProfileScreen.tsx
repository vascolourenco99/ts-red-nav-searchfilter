import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { User, routeParams } from "../types";


const ProfileScreen = (): JSX.Element => {
  const navigation = useNavigation();
  const route = useRoute<RouteProp<Record<string, routeParams>, string>>();
  const user = route.params.user;
  // É a mesma coisa
  // const { user } = route.params; 
  return (
    <View style={styles.container}>
      <Image style={styles.avatar} source={{ uri: user.picture.large }} />
      <Text style={styles.name}>{`${user.name.title} ${user.name.first} ${user.name.last}`}</Text>
      <Text style={styles.age}>Age: {user.dob.age}</Text>
      <Text style={styles.gender}>Gender: {user.gender}</Text>
      <Text style={styles.phone}>Phone: {user.phone}</Text>
      <Text style={styles.email}>Email: {user.email}</Text>
      <Text style={styles.location}>Location: {user.location.city}, {user.location.state}, {user.location.country}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  age: {
    fontSize: 16,
    marginBottom: 10,
  },
  gender: {
    fontSize: 16,
    marginBottom: 10,
  },
  email: {
    fontSize: 16,
    marginBottom: 10,
  },
  phone: {
    fontSize: 16,
    marginBottom: 10,
  },
  location: {
    fontSize: 16,
  },
});

export default ProfileScreen;
