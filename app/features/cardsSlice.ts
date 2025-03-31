import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Card {
  id: number;
  imageUrl: string;
  description: string;
}

interface CardsState {
  cards: Card[];
}

const initialState: CardsState = {
  cards: []
};

const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    setCards: (state, action: PayloadAction<Card[]>) => {
      state.cards = action.payload;
    },
    addCard: (state, action: PayloadAction<Card>) => {
      state.cards.push(action.payload);
    }
  }
});

export const { setCards, addCard } = cardsSlice.actions;
export default cardsSlice.reducer;
