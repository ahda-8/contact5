import React from 'react'

const Ahda = () => {
  return (
    <>
    <section className="ftco-section">
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-md-6 text-center mb-5">
					<h2 className="heading-section">Contact Form #05</h2>
				</div>
			</div>
			<div className="row justify-content-center">
				<div className="col-md-12">
					<div className="wrapper">
						<div className="row no-gutters">
							<div className="col-lg-6">
								<div className="contact-wrap w-100 p-md-5 p-4">
									<h3>Contact us</h3>
									<p className="mb-4">We're open for any suggestion or just to have a chat</p>
									<div id="form-message-warning" className="mb-4"></div> 
				      		<div id="form-message-success" className="mb-4">
				            Your message was sent, thank you!
				      		</div>
									<div className="row mb-4">
										<div className="col-md-4">
											<div className="dbox w-100 d-flex align-items-start">
						        		<div className="text">
							            <p><span>Address:</span> 198 West 21th Street, Suite 721 New York NY 10016</p>
							          </div>
						          </div>
										</div>
										<div className="col-md-4">
											<div className="dbox w-100 d-flex align-items-start">
						        		<div className="text">
							            <p><span>Email:</span> <a href="mailto:info@yoursite.com">info@yoursite.com</a></p>
							          </div>
						          </div>
										</div>
										<div className="col-md-4">
											<div className="dbox w-100 d-flex align-items-start">
						        		<div className="text">
							            <p><span>Phone:</span> <a href="tel://1234567920">+ 1235 2355 98</a></p>
							          </div>
						          </div>
										</div>
									</div>
									<form method="POST" id="contactForm" name="contactForm" className="contactForm">
										<div className="row">
											<div className="col-md-12">
												<div className="form-group">
													<input type="text" className="form-control" name="name" id="name" placeholder="Name"/>
												</div>
											</div>
											<div className="col-md-12"> 
												<div className="form-group">
													<input type="email" className="form-control" name="email" id="email" placeholder="Email"/>
												</div>
											</div>
											<div className="col-md-12">
												<div className="form-group">
													<input type="text" className="form-control" name="subject" id="subject" placeholder="Subject"/>
												</div>
											</div>
											<div className="col-md-12">
												<div className="form-group">
													<textarea name="message" className="form-control" id="message" cols="30" rows="4" placeholder="Create a message here"></textarea>
												</div>
											</div>
											<div className="col-md-12">
												<div className="form-group">
													<input type="submit" value="Send Message" className="btn btn-primary"/>
													<div className="submitting"></div>
												</div>
											</div>
										</div>
									</form>
									<div className="w-100 social-media mt-5">
										<h3>Follow us here</h3>
										<p>
											<a href="#">Facebook</a>
											<a href="#">Twitter</a>
											<a href="#">Instagram</a>
											<a href="#">Dribbble</a>
										</p>
									</div>
								</div>
							</div>
							<div className="col-lg-6 d-flex align-items-stretch">
								<div className="info-wrap w-100 p-5 img" id='ahda' >
			          </div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
    </>
  )
}

export default Ahda