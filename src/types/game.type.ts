export type Game = {
    id: string;
    genre: string;
    image: string;
    name: string;
    description: string;
    price: number;
    isNew: boolean;
};

export type GameData = {
    games: Game[];
    availableFilters: string[];
};
