import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { RootState } from './app/store';
import CustomerCard from './components/CustomerCard';
import ReservationCard from './components/ReservationCard';
import { addReservation } from './features/reservationSlice';

const App = () => {
	const [reservationName, setReservationName] = useState('');

	const reservations = useSelector(
		(state: RootState) => state.reservations.value,
	);

	const customers = useSelector((state: RootState) => state.customers.value);

	const dispatch = useDispatch();

	const handleAddReservations = () => {
		if (!reservationName) return;

		dispatch(addReservation(reservationName));
		setReservationName('');
	};

	return (
		<div className='App'>
			<div className='container'>
				<div className='reservation-container'>
					<div>
						<h5 className='reservation-header'>Reservations</h5>
						<div className='reservation-cards-container'>
							{reservations.map((name, index) => (
								<ReservationCard key={index} name={name} index={index} />
							))}
						</div>
					</div>
					<div className='reservation-input-container'>
						<input
							value={reservationName ?? ''}
							onChange={(e) => setReservationName(e.target.value)}
						/>
						<button onClick={handleAddReservations}>Add Name</button>
					</div>
				</div>
				<div className='customer-food-container'>
					{customers.map((c) => (
						<CustomerCard key={c.id} id={c.id} name={c.name} food={c.food} />
					))}
				</div>
			</div>
		</div>
	);
};

export default App;
