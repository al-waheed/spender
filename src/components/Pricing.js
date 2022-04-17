import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFire, faGem, faRing} from '@fortawesome/free-solid-svg-icons'
import { Button } from './Button'
import {Link} from 'react-router-dom'
import './Pricing.css'

function Pricing() {
	return (
		<div>
			<div className='pricing__section'>
				<div className='pricing__wrapper'>
					<h1 className="pricing__heading"> Pricing</h1>
					<div className='pricing__container'>
						<Link to="/sign-up" className="pricing__container-card">
							<div className='pricing__container-cardInfo'>
								<div className='icon'>
									<FontAwesomeIcon icon={faFire} style={{color:'#f00946', fontSize:'64px'}}/>
								</div>
								<h3 style={{color:'#f00946'}}>Starter</h3>
								<h4>₦78.99</h4>
								<p>per month</p>
								<ul className='pricing__container-features'>
									<li>100 Transactions</li>
									<li>2% Cash Back</li>
									<li>₦10,000 Limit</li>
								</ul>
								<Button buttonSize="btn--wide" buttonColor="primary">
									Choose Plan
								</Button>
							</div>
						</Link>
						<Link to="/sign-up" className="pricing__container-card">
							<div className='pricing__container-cardInfo'>
								<div className='icon'>
								<FontAwesomeIcon icon={faRing} style={{color:'#ffd700', fontSize:'64px'}}/>
								</div>
								<h3 style={{color:'#ffd700'}}>Gold</h3>
								<h4>₦129.99</h4>
								<p>per month</p>
								<ul className='pricing__container-features'>
									<li>1000 Transactions</li>
									<li>3.5% Cash Back</li>
									<li>₦100,000 Limit</li>
								</ul>
								<Button buttonSize="btn--wide" buttonColor="blue">
									Choose Plan
								</Button>
							</div>
						</Link>
						<Link to="/sign-up" className="pricing__container-card">
							<div className='pricing__container-cardInfo'>
								<div className='icon'>
								<FontAwesomeIcon icon={faGem} style={{color:'#b9f2ff', fontSize:'64px'}}/>
								</div>
								<h3 style={{color:'#b9f2ff'}}>Diamond</h3>
								<h4>₦199.99</h4>
								<p>per month</p>
								<ul className='pricing__container-features'>
									<li>Unlimited Transactions</li>
									<li>5% Cash Back</li>
									<li>Unlimited Limit</li>
								</ul>
								<Button buttonSize="btn--wide" buttonColor="primary">
									Choose Plan
								</Button>
							</div>
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Pricing
