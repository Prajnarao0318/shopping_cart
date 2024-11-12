import React from 'react';
import i from './wheat.jpg';
import i1 from './cloth.jpg';
import i2 from './soc.jpg';
import i3 from './tea.jpg';

function CardComponent() {
  
  const addedcart = () => {
    const goToCart = window.confirm("Item added to cart! Would you like to go to the cart?");
    if (goToCart) {
      // Redirect to the cart page
      window.location.href = '/Cart'; // Adjust the URL path to match your application
    }
  };

  return (
    <div className="card-container">
       <div className="card">
     <img src={i} alt="Sample" className="card-img"   />
      <div className="card-body">
        <h4 className="card-title">Aashirvaad Superior MP Atta, 1kg, 100% Whole Wheat Flour, 0% Maida</h4>
        <p className="card-text">₹150 (₹150/kg) <span style={{textDecoration:'line-through'}}> M.R.P : ₹165</span></p>
        <div className="card-button">
        <button  className='buttons'>Buy Now</button><span><button className='buttons' onClick={addedcart}>Add to Cart</button></span>
        </div>
      </div>
    </div>
    <div className="card">
     <img src={i1} alt="Sample" className="card-img" />
      <div className="card-body">
        <h4 className="card-title">GoSriKi Women's Rayon Blend Anarkali Printed Kurta with Palazzo & Dupatta</h4>
        <p className="card-text"> ₹819 <span style={{textDecoration:'line-through'}}> M.R.P.: ₹2,599</span></p>
        <div className="card-button">
        <button  className='buttons'>Buy Now</button><span><button className='buttons' onClick={addedcart}>Add to Cart</button></span>
        </div>
      </div>
    </div>
    <div className="card">
     <img src={i2} alt="Sample" className="card-img" />
      <div className="card-body">
        <h4 className="card-title">Portronics Power Plate 10 Extension Board with 4 Universal Sockets, 3 Meter Long Cord</h4>
        <p className="card-text">₹449 <span style={{textDecoration:'line-through'}}> M.R.P: ₹699</span><br/></p>
      <div className="card-button">
        <button  className='buttons'>Buy Now</button><span><button className='buttons' onClick={addedcart}>Add to Cart</button></span>
        </div>
      </div>
    </div>
    <div className="card">
     <img src={i3} alt="Sample" className="card-img" />
      <div className="card-body">
        <h4 className="card-title">3 Roses Brooke Bond Assam Dust Tea, 110 Gram</h4>
        <p className="card-text"> ₹90.00 per g(₹90 /100 g)<br/> <span style={{textDecoration:'line-through'}}>M.R.P.: ₹299</span><br/></p>
        <div className="card-button">
        <button  className='buttons'>Buy Now</button><span><button className='buttons' onClick={addedcart}>Add to Cart</button></span>
        </div>
      </div>
    </div>
    </div>
  );
}

export default CardComponent;
