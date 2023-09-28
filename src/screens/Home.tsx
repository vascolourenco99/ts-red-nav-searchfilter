import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  TextInput,
  Pressable,
} from "react-native";
import React, { useEffect, useState, useReducer } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { User } from "../types";
import { reducerUsers, initialState } from "../reducers/ReducerUser";

const URL = "https://randomuser.me/api/?results=15";

const Home = (): JSX.Element => {
  const navigation = useNavigation();
  const route = useRoute();
  const [state, dispatch] = useReducer(reducerUsers, initialState);

  const { data, originalData, search } = state;

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    const response = await fetch(URL);
    const jsonData = await response.json();
    dispatch({ type: "SET_DATA", payload: jsonData.results });
    dispatch({ type: "SET_ORIGINAL_DATA", payload: jsonData.results });
  };

  const handleFilter = (searchTerm: string) => {
    if (searchTerm === "") {
      dispatch({ type: "SET_DATA", payload: originalData });
    } else {
      const filteredData = originalData.filter((user: User) => {
        return user.email.toLowerCase().includes(searchTerm.toLowerCase());
      });
      dispatch({ type: "SET_DATA", payload: filteredData });
    }
  };

  const handleSearch = (event: string) => {
    dispatch({ type: "SET_SEARCH", payload: event });
    handleFilter(event);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.searchContainer}>
        <AntDesign
          name="search1"
          size={24}
          color="black"
          style={styles.searchIcon}
        />
        <TextInput
          onChangeText={handleSearch}
          value={search}
          placeholder="Search"
        />
      </View>
      {data.map((user: User, index: number) => (
        <Pressable
          key={index}
          onPress={() => navigation.navigate("Profile", { user })}
        >
          <View key={index} style={styles.textContainer}>
            <Text style={styles.text}>{user.email}</Text>
          </View>
        </Pressable>
      ))}
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    padding: 20,
  },
  text: {
    padding: 10,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  textContainer: {
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 10,
    padding: 4,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 3,
    borderRadius: 10,
    padding: 10,
  },
  searchIcon: {
    marginRight: 10,
  },
});
