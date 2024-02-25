import {useState} from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import SlidesIndicators from '../SlidesIndicators/SlidesIndicators';
import Button from '../Button/Button';

import Products from "../productsData";

const Header = () => {
    

    const [currentslide, setCurrentslide] = useState(parseInt(Math.random()*5));

    const handleManual = (n) => {
        if (currentslide <= 0) 
            setCurrentslide(Products.products.length);
        else if(currentslide >= Products.products.length)
            setCurrentslide(n? 1 : Products.products.length-1);
        else
        setCurrentslide(n? currentslide+1: ((currentslide !== 1)? currentslide-1: Products.products.length));
    }

    const ChangeSlide = (k) => {
        setCurrentslide(k);
    }

  return (
    <div className='slides'>
        <section className="headers" style={ { transform: `translateY(-${75*(currentslide-1)}vh)` } }>
            {
                Products.products.map( (item) => (
                    <div key={item.id} className="header" style={
                        { background: `url(${ item.image }) center no-repeat`, backgroundSize: "cover" }
                    }>
                        <div className="headerContent">
                            <div className="contentCategorie flex xs:!text-[13px]">
                                <span> {item.category} </span>
                                <span> {item.category} </span>
                            </div>
                            
                            <h2>{ item.name }</h2>
            
                            <p className='xs:!text-[14px]'>{ item.description }</p>
            
                            <div className="headerDetails flex ">

                            <a href={`#voitures`}>
                                    <Button title="Visualiser" nonAnimation={true} />
                            </a>

                                <Link to="https://wa.me/+22953846658" target="_blank">
                                    <button className="btn btn2 flex items-center ml-4">
                                        <span>Nous contactez</span>
                                    </button>
                                </Link>
                            </div>
                        </div>
            
                        <div className='backOverlay'></div>
                        
                    </div>
                ))
            }
        </section>

        <SlidesIndicators FollowingState={handleManual} ChangeState={ChangeSlide} CurrentSlide={currentslide} Slides={Products.products.slice(0, 5)} />
        
    </div>  
  )
}

export default Header;