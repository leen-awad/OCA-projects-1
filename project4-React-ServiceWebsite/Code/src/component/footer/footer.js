import "./footer.css"
import Logo from "../img/MarvelLogo.png"



function Footer() {

	






	return (<div>



		<footer class="footer-distributed">

			<div class="footer-left">

				<img src={Logo} alt='Logo' />

				<p class="footer-links">
					<a href="/" class="link-1">Home</a>

					<a href="/"  >Profile</a>

					<a href="/services">Pricing</a>



				</p>

				<p class="footer-company-name">MARTL © 2020</p>
			</div>

			<div class="footer-center">

				<div>
					<i class="fa fa-map-marker"></i>
					<p><span>OCA</span> Amman, Jordan</p>
				</div>

				<div>
					<i class="fa fa-phone"></i>
					<p>+962799991230</p>
				</div>

				<div>
					<i class="fa fa-envelope"></i>
					<p><a href="mailto:support@company.com">support@MARTL.com</a></p>
				</div>

			</div>

			<div class="footer-right">

				<p class="footer-company-about">
					<span>About US</span>
					Vein will provide medical services for you such as online contact with doctors to give them advice about drugs and their interaction, also medical tests and physical therapy services done in their homes.	</p>



			</div>

		</footer>
	</div>
	)
}

export default Footer;