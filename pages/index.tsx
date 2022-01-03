import React from 'react'
import Head from 'next/head'
import { motion } from 'framer-motion'

interface indexProps {}

const transition: { duration: number; ease: number[] } = {
  duration: 1.4,
  ease: [0.6, 0.01, -0.05, 0.9],
}

const navList: { initial: any; animate: any } = {
  initial: {
    x: 0,
  },
  animate: {
    x: 0,
    delay: 1.8,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.04,
      staggerDirection: 1,
    },
  },
}

const navItem: { initial: any; animate: any } = {
  initial: {
    y: 50,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: { ...transition },
  },
}

const locomotiveScroll = typeof window !== `undefined` ? require('locomotive-scroll').default : null

const index: React.FC<indexProps> = ({}) => {
  const refScroll = React.useRef(null)
  let scroll: any

  React.useEffect(() => {
    if (!refScroll.current) return
    // @ts-ignore
    scroll = new locomotiveScroll({
      el: refScroll.current,
      smooth: true,
      smartphone: {
        smooth: true,
      },
      tablet: {
        smooth: true,
      },
      // inertia: 0.3,
      // multiplier: 0.65,
    })
  }, [refScroll])

  function updateScroll() {
    scroll.destroy()

    setTimeout(function () {
      scroll = new locomotiveScroll({
        el: refScroll.current,
        smooth: true,
        smartphone: {
          smooth: true,
        },
        tablet: {
          smooth: true,
        },
        // inertia: 0.3,
        // multiplier: 0.65,
      })
    }, 100)
  }

  return (
    <motion.div data-scroll-container ref={refScroll} initial='initial' animate='animate'>
      <Head>
        <title>Genco &mdash; Real Estate Management</title>
        <link rel='icon' href='/vercel.svg' />
      </Head>
      <header data-scroll-section className='home-header'>
        <div className='home-header__left'>
          <nav className='navigation'>
            <motion.img
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1, transition: { ...transition } }}
              src='svg/groupe-genco.jpg'
              alt='genco logo'
            />
            <motion.ul variants={navList} className='navigation__list'>
              <motion.li variants={navItem} className='navigation__item'>
                <a onClick={updateScroll} href='#sectionFeatures'>
                  Features
                </a>
              </motion.li>
              <motion.li variants={navItem} className='navigation__item'>
                <a onClick={updateScroll} href='#sectionGallery'>
                  Services
                </a>
              </motion.li>
              <motion.li variants={navItem} className='navigation__item'>
                <a onClick={updateScroll} href='#sectionFeedback'>
                  Feedbacks
                </a>
              </motion.li>
            </motion.ul>
          </nav>
          <div className='home-hero'>
            <motion.h4
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1, transition: { delay: 0.2, ...transition } }}
              className='hero-h4'>
              Conveniently Located in Montreal <br />
              Apartment Rentals to Fit Your Needs
            </motion.h4>
            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1, transition: { delay: 0.6, ...transition } }}
              className='hero-h1'>
              
            </motion.h1>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.6, ...transition } }}
              className='home-hero__footer'>
              <img src='svg/facebook.png' alt='facebook icon' />
              <img src='svg/twitter.png' alt='twitter icon' />
              <img src='svg/linkedin.png' alt='linkedIn icon' />
              <img src='svg/instagram.png' alt='instagram icon' />
            </motion.div>
          </div>
        </div>
        <div className='home-header__right'>
          <motion.img
            initial={{ opacity: 0, scale: 1.4, x: 400 }}
            animate={{ opacity: 1, scale: 1, x: 0, transition: { delay: 1.1, ...transition } }}
            src='webp/montrealskyline.webp'
            alt='montreal skyline'
          />
          <motion.div
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: 0, opacity: 1, transition: { delay: 1.8, ...transition } }}
            className='hero-unit'>
            <h2 className='hero-unit__h2'>122</h2>
            <p className='hero-unit__p'>TOTAL UNITS</p>
          </motion.div>
        </div>
      </header>
      <main className='main'>
        <section data-scroll-section id='sectionFeatures' className='section-features'>
          <div className='feature-container'>
            <div className='feature'>
              <img src='svg/design.svg' alt='face icon' />
              <h2 className='heading-2'>
                Quality Design 
                & Materials
              </h2>
              <p className='paragraph'>
              We go to great lengths designing apartments to provide our residents with the highest level of quality and comfort.
              </p>
            </div>
            <div className='feature'>
              <img src='svg/service.svg' alt='eye icon' />
              <h2 className='heading-2'>
                Reliable
                Service
              </h2>
              <p className='paragraph'>
              At Genco, our team places great value on reliability, authenticity, and customer service.
              </p>
            </div>
            <div className='feature'>
              <img src='svg/location.svg' alt='face icon' />
              <h2 className='heading-2'>Convenient Locations</h2>
              <p className='paragraph'>
              We believe that where you live should compliment how you live, and we strive to make sure our units provide exactly that.
              </p>
            </div>
            <div className='feature'>
              <img src='svg/choice.svg' alt='smart icon' />
              <h2 className='heading-2'>
                Ample Choices
              </h2>
              <p className='paragraph'>
              Designed for both convenience and comfort, we have all types of units at many different price ranges.
              </p>
            </div>
            <div className='feature'>
              <img src='svg/extra.svg' alt='wifi icon' />
              <h2 className='heading-2'>
                Added Services
              </h2>
              <p className='paragraph'>
              Hot Water, Electricity, Internet, Appliances, and more. We have many added services which can be included to make life easier for you. 
              </p>
            </div>
            <div className='feature'>
              <img src='svg/team.svg' alt='door icon' />
              <h2 className='heading-2'>
                Devoted Team
              </h2>
              <p className='paragraph'>
              We place great value on your security and wellbeing, and you can take comfort in knowing that you’re well looked after by our loyal team.
              </p>
            </div>
          </div>
        </section>
        <section data-scroll-section id='sectionGallery' className='section-gallery'>
          <div className='gallery-container'>
            <h2 className='heading-2'>
              Our Properties <br /> Your Home
            </h2>
            <div className='gallery'>
              <div className='gallery__left'>
                <div className='gallery__left--top'>
                  <img src='webp/LF.png' alt='lf image' />
                  <h4 className='gallery-caption'>10875 Av. Louis-Frechette</h4>
                </div>
                <div className='gallery__left--bottom'>
                  <h3 className='gallery-h3'>
                    Browse <br /> our properties
                  </h3>
                  <p className='gallery-p'>Find Your Home</p>
                </div>
              </div>
              <div className='gallery__right'>
                <div className='gallery__right--top'>
                  <div className='gallery__right--top-left'>
                    <img src='webp/HAMEL.png' alt='hamel image' />
                    <h4 className='gallery-caption'>1495 Boul. Henri-Bourassa E</h4>
                  </div>
                  <div className='gallery__right--top-right'>
                    <img src='webp/BORDEAUpng.png' alt='bordeau image' />
                    <h4 className='gallery-caption'>8135 Rue De Bordeaux</h4>
                  </div>
                </div>
                <div className='gallery__right--bottom'>
                  <img src='webp/CHARLEROI.png' alt='charleroi image' />
                  <h4 className='gallery-caption'>4800 Rue De Charleroi</h4>
                </div>
                
              </div>
            </div>
          </div>
        </section>
        <section data-scroll-section id='sectionFeedback' className='section-feedback'>
          <div className='feedback-container'>
            <div className='feedback-left'>
              <h2 className='heading-2'>
                What Others <br /> are saying
              </h2>
            </div>
            <div className='feedback-right'>
              <div className='feedback-box'>
                <img src='svg/quote.png' alt='quoute icon' />
                <p className='paragraph'>
                Lorem ipsum dolor sit amet, consectetur adipiscing 
                elit, sed do eiusmod tempor incididunt ut labore et 
                dolore magna aliqua. Lorem dolor sed viverra ipsum nunc aliquet bibendum. Ullamcorper malesuada proin libero nunc consequat
                </p>
                <h5 className='heading-5'>Mr & Mrs Bamidele</h5>
              </div>
              <div className='feedback-box'>
                <img src='svg/quote.png' alt='quoute icon' />
                <p className='paragraph'>
                Gravida neque convallis a cras. Facilisis sed odio morbi quis commodo odio aenean. Lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt. A scelerisque purus semper eget. Diam maecenas ultricies mi eget mauris pharetra. 
                </p>
                <h5 className='heading-5'>Ojo Daniel</h5>
              </div>
              <div className='feedback-box'>
                <img src='svg/quote.png' alt='quoute icon' />
                <p className='paragraph'>
                Vel turpis nunc eget lorem dolor sed viverra ipsum nunc. 
                Tincidunt lobortis feugiat vivamus at augue eget arcu dictum.
                 Integer malesuada nunc vel risus commodo viverra maecenas.
                </p>
                <h5 className='heading-5'>Mr & Mrs Joseph</h5>
              </div>
              <div className='feedback-box'>
                <img src='svg/quote.png' alt='quoute icon' />
                <p className='paragraph'>
                Ligula ullamcorper malesuada proin libero nunc. At ultrices mi tempus imperdiet. Et malesuada fames ac turpis. 
                </p>
                <h5 className='heading-5'>Mr & Mrs Danladi</h5>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer data-scroll-section className='footer'>
        <div className='footer__container'>
          <div className='footer__top'>
            <h2 className='heading-2 heading-2__sub'>Book Consultation</h2>
            <form className='contact-form'>
              <div className='contact-form__left'>
                <input type='text' placeholder='enter your name' />
                <input type='email' placeholder='enter your email' />
                <input type='tel' placeholder='enter your telephone' />
              </div>
              <div className='contact-form__right'>
                <textarea placeholder='write something...'></textarea>
                <button type='submit'>SEND MESSAGE</button>
              </div>
            </form>
          </div>

          <div className='footer__bottom'>
            <div className='footer__bottom--box'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='102'
                height='35.674'
                viewBox='0 0 152 35.674'>
                <g transform='translate(-66 -71.663)'>
                  <g transform='translate(5929.179 -1324.144)'>
                    <path d='M-5839.528,1412.126l-23.651,19.29v-35.609h23.651Z' fill='#7dbefa' />
                    <path
                      d='M-5789.339,1415.3l23.651-19.29v35.609h-23.651Z'
                      transform='translate(-50.491 -0.14)'
                      fill='#7dbefa'
                    />
                  </g>
                  <text
                    transform='translate(132 99)'
                    fill='#7dbefa'
                    fontSize='24'
                    fontFamily='HelveticaNeue-Medium, Helvetica Neue'
                    fontWeight='500'
                    letterSpacing='-0.053em'>
                    <tspan x='0' y='0'>
                      Genco
                    </tspan>
                  </text>
                </g>
              </svg>
              <p className='footer-p'>
                +1 514 744 4400
                <br />
                <br />
                +1 514 266 2927
              </p>
            </div>
            <div className='footer__bottom--box'>
              <p className='footer-p'>
                230 Boulevard Henri-Bourassa E, Suite 100 <br />
                Montreal, Quebec, H3L 1B8, CA.
              </p>
            </div>
          </div>
          <p className='footer-copyright'>© Copyright 2022 Groupe Genco Immobiliare</p>
        </div>
      </footer>
    </motion.div>
  )
}

export default index
