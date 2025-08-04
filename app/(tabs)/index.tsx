import { defaultBoard } from "@/constants/defaultBoard";
import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";

interface Square {
  id: string;
  endTop?: boolean;
  endBottom?: boolean;
  endLeft?: boolean;
  endRight?: boolean;
  symbol?: "X" | "O";
}
// const board: Square[] = [
//   {
//     id: "1",
//     endTop: true,
//     endLeft: true,
//   },
//   {
//     id: "2",
//     endTop: true,
//   },
//   {
//     id: "3",
//     endTop: true,
//     endRight: true,
//   },
//   {
//     id: "4",
//     endLeft: true,
//   },
//   {
//     id: "5",
//   },
//   {
//     id: "6",
//     endRight: true,
//   },

//   {
//     id: "7",
//     endBottom: true,
//     endLeft: true,
//   },
//   {
//     id: "8",
//     endBottom: true,
//   },
//   {
//     id: "9",
//     endBottom: true,
//     endRight: true,
//   },
// ];
export default function HomeScreen() {
  const [mode, setMode] = useState<"X" | "O">("X");
  const [board, setBoard] = useState(defaultBoard);

  const checkWinConditions = (board: Square[]) => {
    console.log(board);
  };
  return (
    <View>
      <FlatList
        style={{
          marginTop: 200,
          marginHorizontal: "auto",
        }}
        keyExtractor={(item) => item.id}
        numColumns={3}
        renderItem={({ item, index }) => {
          return (
            <Pressable
              style={{
                minWidth: 100,
                minHeight: 100,
                borderColor: "black",
                borderWidth: 2,
                borderTopWidth: item?.endTop ? 0 : 2,
                borderBottomWidth: item?.endBottom ? 0 : 2,
                borderLeftWidth: item?.endLeft ? 0 : 2,
                borderRightWidth: item?.endRight ? 0 : 2,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={() => {
                // if (!item.symbol) {
                const newBoard = board.map((item, indexOfBoard) => {
                  if (indexOfBoard === index) {
                    return {
                      ...item,
                      symbol: mode,
                    };
                  }
                  return item;
                });
                setBoard(newBoard);
                setMode((m) => (m === "X" ? "O" : "X"));
                checkWinConditions(newBoard);
                // }
              }}
            >
              <Text
                style={{
                  fontSize: 52,
                }}
              >
                {item.symbol}
              </Text>
            </Pressable>
          );
        }}
        data={board}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
