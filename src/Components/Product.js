import React from 'react'
import Arduino from '../Images/ArduinoUno.jpeg'
import { FaRegHeart } from 'react-icons/fa';
import { BsCartPlus } from 'react-icons/bs'
import Scotty from '../Images/ScottyTheBear.png'

function Product() {
  return (
    <section class="hero is-small is-link">
        <div class="hero-body">
            <section class="section has-background-white">
              <div class='columns'>
                <div class='column'>
                  <div class="card">
                    <div class='card-image'>
                      <figure class='image is-3by2'>
                        <img src={Arduino} alt='Arduino Uno' />
                      </figure>
                    </div>

                    <div class="card-content">
                      <p class="subtitle has-text-black has-text-centered">
                      Fastest Delivery - Nov 12
                      </p>
                      <p class="title has-text-black has-text-centered">
                      $20.00
                      </p>
                    </div>
                      
                  </div>
                </div>

                <div class='column'>
                  <p class='title is-2 has-text-black p-2'>Arduino Uno Project Starter Kit</p>
                  <p class='subtitle has-text-black p-2'>- Arduino UNO is a low-cost, flexible, and easy-to-use programmable open-source microcontroller board that can be integrated into a variety of electronic projects.</p>
                  <p class='title is-4 has-text-black p-2'>Expect to use this in </p>
                  <p class='subtitle has-text-black pl-4'>- CS120B</p>
                  <p class='subtitle has-text-black pl-4'>- CS122A</p>
                  <p class='subtitle has-text-black pl-4'>- BIEN010</p>

                  <div class="field is-grouped">
                    <p class="control">
                      <button class="button is-link is-outlined is-medium">
                        <BsCartPlus/>
                      </button>
                    </p>
                    
                    <p class="control">
                      <button class="button is-danger is-outlined is-medium">
                        <FaRegHeart/>
                      </button>
                    </p>

                    <p class="control">
                      <button class="button is-success is-medium">
                        Make an Offer
                      </button>
                    </p>
                  </div>

                  <p class='title is-4 has-text-black p-2'>
                    Sold by 
                    <figure class='image is-96x96'>
                      <img src={Scotty} alt='Scotty the Bear' />
                    </figure>
                    {/* <p class='subtitle has-text-black pl-4 is-pulled-right '>Scotty the Bear</p> */}
                  </p>

                </div>

              </div>

              {/* <div class='columns'>
                <div class='column is-one-third'>
                  <div class="card is-size-4">

                      <div class='card-image is-pulled-left'>
                        <figure class='image is-128x128'>
                          <img src={Scotty} alt='Scotty the Bear' />
                        </figure>
                      </div>

                      <p class='title has-text-black has-text-centered'>
                        Scotty the Bear
                      </p>

                  </div>
                </div> */}

                {/* <div class='column'>
                  <p class='title is-2 has-text-black p-2'>Arduino Uno Project Starter Kit</p>
                  <p class='subtitle has-text-black p-2'>- Arduino UNO is a low-cost, flexible, and easy-to-use programmable open-source microcontroller board that can be integrated into a variety of electronic projects.</p>
                  <p class='title is-3 has-text-black p-2'>Expect to use this in: </p>
                  <p class='subtitle has-text-black pl-4'>- CS120B</p>
                  <p class='subtitle has-text-black pl-4'>- CS122A</p>
                  <p class='subtitle has-text-black pl-4'>- BIEN010</p>

                  <div class="field is-grouped">
                    <p class="control">
                      <button class="button is-link is-outlined is-medium">
                        <BsCartPlus/>
                      </button>
                    </p>
                    
                    <p class="control">
                      <button class="button is-danger is-outlined is-medium">
                        <FaRegHeart/>
                      </button>
                    </p>

                    <p class="control">
                      <button class="button is-success is-medium">
                        Make an Offer
                      </button>
                    </p>
                  </div>

                </div> */}

              {/* </div> */}

            </section>
        </div>
    </section>
  )
}

export default Product