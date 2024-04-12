import myImage from './blue car_files/pngtree-realistic-car-transparent-vector-free-download-png-image_14353708.png'

function Below(){
    return(
        <div className='below'>
        <img className="carimg" src={myImage} alt="myImage"></img>
        <h1 className='adindia'>CAR ADVERTISING IN INDIA</h1>
        <div className="ads">
        <ul>
          <li>Car Advertising in Mumbai</li>
          <li>Car Advertising in Delhi</li>
          <li>Car Advertising in Kolkata</li>
          <li>Car Advertising in Bangalore</li>
          <li>Car Advertising in Ahmedabad</li>
          <li>Car Advertising in Chennai</li>
          <li>Car Advertising in Hyderabad</li>
      </ul>
      </div>
      <div className="mains">
      <div className="contact">CONTACT US</div>
      <div className="contact2">85879 11064</div>
      <div className="mail">MAIL US</div>
      <div className="mail2">sales@CarZone.com</div>
      <div className="follow">FOLLOW US</div>
      <div className="follow2">
        <ul className="follow3">
            <li className="facebook"><i class="fa-brands fa-facebook"></i></li>
            <li className="twitter"><i class="fa-brands fa-twitter"></i></li>
            <li className="linkedin"><i class="fa-brands fa-linkedin-in"></i></li>
            <li className="google"><i class="fa-brands fa-google-plus-g"></i></li>
        </ul>
      </div>
      <div className="car"><i class="fa-solid fa-car-rear"></i></div>
      <div className="copyright">Â© Copyright 2014. All Rights Reserved. | Sitemap | Truck Painting | Wall Painting Advertisting | Disclaimer : All the third party logos,name or images are only for illustration purpose only, we are not affiliated with any 3rd party brand unless otherwise specified.</div>
      </div>
      </div>
    );
}

export default Below;