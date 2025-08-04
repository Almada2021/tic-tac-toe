interface Square {
  id: string;
  endTop?: boolean;
  endBottom?: boolean;
  endLeft?: boolean;
  endRight?: boolean;
  symbol?: "X" | "O";
}
export const defaultBoard: Square[] = [
  {
    id: "1",
    endTop: true,
    endLeft: true,
    symbol: undefined,
  },
  {
    id: "2",
    endTop: true,
    symbol: undefined,
  },
  {
    id: "3",
    endTop: true,
    endRight: true,
    symbol: undefined,
  },
  {
    id: "4",
    endLeft: true,
    symbol: undefined,
  },
  {
    id: "5",
    symbol: undefined,
  },
  {
    id: "6",
    endRight: true,
    symbol: undefined,
  },

  {
    id: "7",
    endBottom: true,
    endLeft: true,
    symbol: undefined,
  },
  {
    id: "8",
    endBottom: true,
    symbol: undefined,
  },
  {
    id: "9",
    endBottom: true,
    endRight: true,
    symbol: undefined,
  },
];
