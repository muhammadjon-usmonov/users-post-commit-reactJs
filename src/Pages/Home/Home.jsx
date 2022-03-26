import React from 'react';
import './Home.css'
import { Link } from 'react-router-dom';

function Home() {
	const [users, setUsers] = React.useState([]);

	const [renderedUsers, setRenderUsers] = React.useState([]);
	

	const RenderUsers = (evt) =>{
		const targetValue = evt.target.value.trim();
		const renderedUsersArray = users.filter((user)=>
			user.username.toLowerCase().includes(targetValue)||
			user.name.toLowerCase().includes(targetValue)
		);

		if(targetValue.length===0){
			setRenderUsers(users);
		}

		else {
			setRenderUsers(renderedUsersArray);
		}

	}

	
	React.useEffect(() => {
		(async () => {
			const res = await fetch('https://jsonplaceholder.typicode.com/users');

			const data = await res.json();

			if (data) {
				setUsers(data);
				setRenderUsers(data)
			}
		})();
	}, []);

	return (
		<section>
			<h1>Home</h1>

			<ul className=''>

			{renderedUsers && renderedUsers.map((user)=>(
				<li className='user__item' key={user.id}>
					<strong>{user.id}</strong>
					<h3 className='users__name'>{user.name}</h3>
					<a className='users__link' href={user.email}>{user.email}</a>
					
					<Link className="user__link" to={"/posts/" + user.id}> Posts
					</Link>
				
					</li>
			))}

			</ul>

			
		</section>
	);
}

export default Home;
