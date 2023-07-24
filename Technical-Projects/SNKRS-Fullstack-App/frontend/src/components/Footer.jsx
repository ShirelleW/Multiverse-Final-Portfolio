import React from 'react';

import { MDBFooter } from 'mdb-react-ui-kit';
import { Link } from "react-router-dom"

export default function App() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Give Us A Round-Of-Applause If You Like This App!</span>
        </div>
      </section>

      <section className=''>
        <div className='container text-center text-md-start mt-5'>
          <div className='row mt-3'>
            <div className='col-md-3 col-lg-4 col-xl-3 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <i className='fas fa-gem me-3'></i>SNKRS
              </h6>
              <p>
                App created by Coral, Dante, Shirelle, and Young Pete.
              </p>
            </div>

            <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Most POPULAR shoes</h6>
              <p>
                <Link to='/sneakers/7' className='text-reset'>
                  Multicolor Swoosh Black </Link>

              </p>
              <p>
                <Link to='/sneakers/23' className='text-reset'>
                  Retro High OG 'Origin Story' </Link>

              </p>
              <p>
                <Link to='/sneakers/13' className='text-reset'>
                  Trophy Room x Air Jordan 5 Retro 'Ice Blue'</Link>

              </p>
            </div>

            <div className='col-md-3 col-lg-2 col-xl-2 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Sites that are not quite us</h6>
              <p>
                <a href='https://www.nike.com/' className='text-reset'>
                  Nike
                </a>
              </p>
              <p>
                <a href='https://stockx.com' className='text-reset'>
                  FlopX
                </a>
              </p>
              <p>
                <a href='https://hypebeast.com/' className='text-reset'>
                  SikeBeast
                </a>
              </p>
            </div>

            <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <i className='fas fa-home me-3'></i>Arizona, Washington, and Jersey
              </p>
              <p>
                <i className='fas fa-envelope me-3'></i>
                Hit us up on discord
              </p>
              <p>
                <i className='fas fa-phone me-3'></i> + 01 234 567 88
              </p>
              <p>
                <i className='fas fa-print me-3'></i> + 01 234 567 89
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2022 Copyright Easy Scrum Easy Go
      </div>
    </MDBFooter>
  );
}