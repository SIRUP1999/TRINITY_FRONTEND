import Background from './Background'
// import Pagination from './Pagination'
import Homepage from './Homepage'
import SlidePage from './Slidepage'
// import Catchy from './Catchy'

const Home = () => {
  return (
    <>
      <section className='home_main'>
        <Background />
        <br />
        <header>
          <h1>
            Welcome To
            <span className='nowrap'> Trinity Christian School!</span>
            {/* <ImageUploads /> */}
          </h1>
        </header>
        <br />
        <br />

        <main className='public__main'>
          <p>
            Located at Nsoatre Behind Power Filling Station, Trinity Christian
            school Educate Children In a Way That Will Enable Your Child To be
            God Fearing And Also Be well educated.
          </p>
          <br />
          <address className='public__addr'>
            Trinity Christian School
            <br />
            P.O.BOX 229,Nsoatre,Bono-Ghana
            <br />
            <br />
            <br />
            <h1>
              {new Date().getFullYear()} / {new Date().getFullYear() + 1}
              &nbsp;Academic Year
            </h1>
            <br />
          </address>
          <br />

          {/* <Pagination images={images} /> */}
        </main>
        <SlidePage />

        <Homepage />
      </section>
    </>
  )
}

export default Home
