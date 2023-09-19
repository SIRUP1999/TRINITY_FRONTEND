// HomePage.js

import { useEffect } from 'react'
import Catchy from './Catchy'
// import React, { useEffect, useState } from 'react'

const Homepage = () => {
  useEffect(() => {
    const hiddenElements = document.querySelectorAll('.section10')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show')
        } else {
          entry.target.classList.remove('show')
        }
      })
    }, [])
    hiddenElements.forEach((el) => observer.observe(el))
    // return () => {
    //   hiddenElements.forEach((el) => observer.unobserve(el))
    // }
  }, [])
  return (
    <div>
      <header>
        <h1> Impacting Spirit,Soul & Body</h1>
      </header>
      <main>
        <section className='section10'>
          <h2>About Trinity Christian School:</h2>
          <p>
            At Trinity Christian School, we believe in fostering a nurturing and
            inclusive learning environment where every child's potential is
            recognized and celebrated. With a dedicated team of experienced
            educators and a curriculum designed to encourage curiosity and
            creativity, we strive to make learning an enjoyable and enriching
            experience for all our students.
          </p>
        </section>

        <section className='section10'>
          <h2>Our Vision:</h2>
          <p>To make christ known through high educational standard</p>
        </section>

        <section className='section10'>
          <h2>Mission Statement:</h2>
          <p>
            providing a christ centered curricullum to enstil the excellent
            spirit while providing a holistic instruction approach in other to
            impact the spirit soul and body of the student
          </p>
        </section>
        <Catchy />
        <section className='section10'>
          <h2>Why Choose Trinity Christian School?</h2>
          <ul>
            <li>
              Experienced and passionate educators dedicated to each child's
              success.
            </li>
            <li>
              A balanced and comprehensive curriculum that nurtures individual
              talents.
            </li>
            <li>
              A safe and secure environment fostering personal growth and
              development.
            </li>
            <li>
              Engaging extracurricular activities to promote creativity and
              teamwork.
            </li>
            <li>Supportive parent and community involvement in school life.</li>
          </ul>
        </section>

        <section className='section10'>
          <h2>Our Programs:</h2>
          <ul>
            <li>
              Academic Excellence: Our rigorous academic program is designed to
              challenge and inspire students, ensuring they reach their full
              potential in core subjects like Mathematics, English, Science, and
              more.
            </li>
            <li>
              Creative Arts: We believe in nurturing the creative spirit in each
              child, providing opportunities to explore and excel in art, music,
              drama, and other forms of self-expression.
            </li>
            <li>
              Physical Education: A healthy body complements a healthy mind. Our
              physical education program promotes an active lifestyle and
              instills values of teamwork and sportsmanship.
            </li>
            <li>
              Character Development: We prioritize character education to help
              students build strong moral values, empathy, and a sense of
              responsibility towards themselves and others.
            </li>
          </ul>
        </section>

        <section className='section10'>
          <h2>Parent Involvement:</h2>
          <p>
            At Trinity Christian School, we recognize the vital role parents
            play in their child's education. We encourage open communication and
            value the partnership between home and school. Parents are invited
            to participate in school events, workshops, and various activities,
            enriching the school experience for both students and families.
          </p>
        </section>

        <section className='section10'>
          <h2>Community Outreach:</h2>
          <p>
            We believe in giving back to the community and instilling a sense of
            social responsibility in our students. Through various community
            outreach programs and initiatives, we teach our students the
            importance of compassion and empathy towards others.
          </p>
        </section>

        <section className='section10'>
          <h2>Contact Us:</h2>
          <p>
            Have questions or want to know more about Trinity Christian School?
            Feel free to reach out to us through our contact information
            provided below. We would love to hear from you!
          </p>
          <p>
            Trinity Christian School
            <br />
            Address: [P.O.BOX 229,NSOATRE,BONO-GHANA]
            <br />
            Phone: [MOBILE:+233 205712349,+233 23652399,+233553653107]
            <br />
            Email: [nsoatretrinitychristian@gmail.com]
          </p>
        </section>
      </main>
      <br />
      <section>
        <header>locate Us On Google Map</header>

        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2123.2735249134184!2d-2.450857663232085!3d7.404580427819619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdacac64faced8d%3A0x206199010bfb2063!2sSunyani%20West!5e0!3m2!1sen!2sgh!4v1691793001726!5m2!1sen!2sgh'
          width='900'
          height='450'
          // style='border:0'
          // allowFullScreen=''
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
          className='map'
          title='google map'
        ></iframe>
      </section>

      <footer className='section10'>
        <p>
          Join us on this exciting journey of learning, growth, and discovery at
          Trinity Christian Mission School. Together, let's shape a brighter
          future for our children!
        </p>
      </footer>
    </div>
  )
}

export default Homepage
