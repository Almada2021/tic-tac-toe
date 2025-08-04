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
  },
  {
    id: "2",
    endTop: true,
  },
  {
    id: "3",
    endTop: true,
    endRight: true,
  },
  {
    id: "4",
    endLeft: true,
  },
  {
    id: "5",
  },
  {
    id: "6",
    endRight: true,
  },

  {
    id: "7",
    endBottom: true,
    endLeft: true,
  },
  {
    id: "8",
    endBottom: true,
  },
  {
    id: "9",
    endBottom: true,
    endRight: true,
  },
];
