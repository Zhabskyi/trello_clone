import React from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron';


export const Login = () => {
	return (
		<>
			<Jumbotron>
				<h1>Welcome!</h1>
				<p>
					This is a simple task manager. To start to work with the maneger
					log in with link below and let's see what have to be done today!
				</p>
				<h4>
					<a
							href={`https://trello.com/1/authorize?return_url=http://localhost:3000/gettoken&expiration=never&name=MyPersonalToken&scope=read&response_type=token&key=${process.env.REACT_APP_TRELLO_KEY}`}
						>
								Login with Trello account
					</a>
				</h4>
			</Jumbotron>
	</>
	)
}
