import { defaultBoard } from "@/constants/defaultBoard";
import { winCombinations } from "@/constants/winCombinations";
import { useState } from "react";
import { Alert, Pressable, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";

interface Square {
  id: string;
  endTop?: boolean;
  endBottom?: boolean;
  endLeft?: boolean;
  endRight?: boolean;
  symbol?: "X" | "O";
}

export default function HomeScreen() {
  const [mode, setMode] = useState<"X" | "O">("X");
  const [board, setBoard] = useState(defaultBoard);
  const [pushedItems, setPushedItems] = useState(0);
  const checkWinConditions = (board: Square[]) => {
    for (const combination of winCombinations) {
      const [a, b, c] = combination;
      const symbol = board[a].symbol;

      if (symbol && symbol === board[b].symbol && symbol === board[c].symbol) {
        setBoard(defaultBoard);
        setPushedItems(0);
        Alert.alert(`Ha ganado ${symbol}`);
        return symbol; // Ganó "X" o "O"
      }
    }
    return null;
  };
  // checkWinConditions(board);
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
                if (pushedItems >= 9 || item.symbol !== undefined) {
                  return;
                }
                // if (!item.symbol) {
                setPushedItems(pushedItems + 1);
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
                if (pushedItems >= 4) {
                  checkWinConditions(newBoard);
                }
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
