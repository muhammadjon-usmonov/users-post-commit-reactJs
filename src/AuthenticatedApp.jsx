import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Home from './Pages/Home/Home';
import Posts from './Pages/Posts/Posts';
import Comments from './Pages/Comments/Comments';

function AuthenticatedApp() {
	return (
		<>
			<Routes>
				<Route path='/' element={<Navigate to='/users' />} />
				<Route path='/users' element={<Home />} />
				<Route path='/posts/:userId' element={<Posts />} />
				<Route path='/comments/:postsId' element={<Comments />} />

			</Routes>
		</>
	);
}

export default AuthenticatedApp;
