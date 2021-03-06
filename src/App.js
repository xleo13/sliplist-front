import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom'
import {
	Col,
	Row,
	Grid,
	PageHeader
} from 'react-bootstrap'
import CarouselTop from './components/Carousel'
import NavbarTop from './components/NavbarTop'
import Availabilities from './pages/Availabilities'
import Newuser from './pages/Newuser'
import CreateLocation from './pages/CreateLocation'



class App extends Component {
	constructor(props){
		super(props)
		this.state = {
			availabilities: [
				{
					id: 1,
					firstName: "fernando",
					lastName: "fonzu",
					email: "mandrid@yahoo.com",
					phone: "619-244-3434"
				},
				{
					id: 2,
					firstName: "orlando",
					lastName: "fuji",
					email: "landri@yahoo.com",
					phone: "619-244-2334"
				},
				{
					id: 3,
					firstName: "bob",
					lastName: "tonhy",
					email: "bob21@yahoo.com",
					phone: "619-244-2112"
				},
			]
		}
	}

	render() {
		return (
			<Router>
				<div>
					<NavbarTop />
					<CarouselTop />
					<div>
						<Route exact path="/" render={props => (
							<Grid>
								<PageHeader>
									<Row>
										<Col xs={8}>
											SlipList
											<br />
											<small className='subtitle'> Sign Up </small>
										</Col>
										<Col xs={4}>
											<small> <Link to='/availabilities' id='availabilities-link'> show me availabilities </Link> </small>
										</Col>
									</Row>
								</PageHeader>
								<Newuser name={this.props.userform}/>
								<Availabilities availabilities={this.state.availabilities} />
							</Grid>
						)} />

						<Route exact path="/availabilities" render={props => (
							<Grid>
								<PageHeader>
									<Row>
										<Col xs={8}>
											SlipList <br />
											<small className='subtitle'>please sign up to contact owner</small>
										</Col>
										<Col xs={4}>
											<small> <Link to='/' id='createLocation-link'>Sign Up</Link> </small>
										</Col>
									</Row>
								</PageHeader>
								<Availabilities availabilities={this.state.availabilities} />
							</Grid>
						)} />

						<Route exact path="/createLocation" render={props => (
							<Grid>
								<PageHeader>
								<Row>
									<Col xs={8}>
										SlipList
										<br />
										<small className='subtitle'> Welcome</small>
									</Col>
									<Col xs={4}>
										<small> <Link to='/' id='signup-link'> Home </Link> </small>
									</Col>
								</Row>
								</PageHeader>
								<Availabilities availabilities={this.state.availabilities} />
							</Grid>
						)} />

					</div>
				</div>
			</Router>
		);
	}
}

export default App;
