import React from 'react'
import RaspberryPi from '../Images/Raspberry_Pi_4.jpeg'
import Arduino from '../Images/ArduinoUno.jpeg'
import FRDM from '../Images/FRDM-K64F.jpeg'

function Grid() {
  return (
    <div>
        <div className="tile is-ancestor">
                <div className="tile is-parent">
                    <div className="tile is-child box" >
                        <p className="title is-4"> Arduino</p>
                        <p className="subtitle">
                            $20.00
                        </p>
                        <div className="content">
                            <figure class='image is-96x96'>
                                <img src={Arduino} alt='Arduino' />
                            </figure>
                        </div>
                    </div>
                </div>

                <div className="tile is-parent">
                    <div className="tile is-child box">
                        <p className="title is-4">Raspberry Pi</p>
                        <p className="subtitle">
                            $99.00
                        </p>
                        <div className="content">
                            <figure class='image is-96x96'>
                                <img src={RaspberryPi} alt='Raspberry' />
                            </figure>
                        </div>
                    </div>
                </div>

                <div className="tile is-parent">
                    <div className="tile is-child box">
                        <p className="title is-4">FRDM-K64F</p>
                        <p className="subtitle">
                            $35.00
                        </p>
                        <div className="content">
                            <figure class='image is-96x96'>
                                <img src={FRDM} alt='FRDM' />
                            </figure>
                        </div>
                    </div>
                </div>

            </div>
    </div>

  )
}

export default Grid