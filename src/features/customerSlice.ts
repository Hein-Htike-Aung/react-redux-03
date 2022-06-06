import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Customer {
	id: string;
	name: string;
	food: string[];
}

interface AddFoodToCustomerPayload {
	id: string;
	food: string;
}

interface CustomerState {
	value: Customer[];
}

const initialState: CustomerState = {
	value: [],
};

export const customerSlice = createSlice({
	name: 'customer',
	initialState,
	reducers: {
		addCustomer: (state, action: PayloadAction<Customer>) => {
			state.value.push(action.payload);
		},
		addFoodToCustomer: (
			state,
			action: PayloadAction<AddFoodToCustomerPayload>,
		) => {
			state.value.map((customer) =>
				customer.id === action.payload.id
					? customer.food.push(action.payload.food)
					: customer,
			);
		},
	},
});

export const { addCustomer, addFoodToCustomer } = customerSlice.actions;
export default customerSlice.reducer;
