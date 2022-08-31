import { View, Text, Image } from "react-native";
import React from "react";
import { ChatRoom } from "../../../types";
import moment from "moment";

export type ChatListItemProps = {
  chatRoom: ChatRoom;
};

const ChatListItem = (props: ChatListItemProps) => {
  const { chatRoom } = props;

  const user = chatRoom.users[1];
  return (
    <View className=" flex-row justify-between w-full p-3">
      <View className=" flex-row ">
        <Image
          source={{ uri: user.imageUri }}
          className={"h-14 w-14 mr-3 rounded-full"}
        />
        <View className=" justify-around">
          <Text className=" font-bold text-[16px]">{user.name}</Text>
          <Text className=" text-[16px] text-gray-400" numberOfLines={1}>
            {chatRoom.lastMessage.content}
          </Text>
        </View>
      </View>
      <Text className=" text-[14px] text-gray-400">
        {moment(chatRoom.lastMessage.createdAt).format("SS/MM/YYYY")}
      </Text>
      {/* <Text className="text-[16px] text-gray-400">Yesterday</Text> */}
    </View>
  );
};

export default ChatListItem;
