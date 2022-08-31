import { View, Text, FlatList } from "react-native";
import React from "react";
import ChatListItem from "../../components/ChatListItem";
import ChatRooms from "../../../data/ChatRooms";

const ChatScreen = () => {
  return (
    <View className=" flex-1 items-center justify-center">
      <FlatList
        style={{ width: "100%" }}
        data={ChatRooms}
        renderItem={({ item }) => <ChatListItem chatRoom={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default ChatScreen;
