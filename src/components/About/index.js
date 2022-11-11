function About() {
    return (
      <section className='about'>
        <h3 className='aboutTitle'>About Me</h3>
        <div className='aboutCard'>
        <p className='aboutMe'>
            Hello and thank you for viewing my portfolio. My name is Cy Howard and I am an full stack developer. For most of my professional career I have been in the insurance/finance world and doing underwriting. As exhilarting as underwriting is, I am looking forward to growing and using my skills in a developer role. One of my favorite things about programming is there is always more to learn. 
          </p>
          <img className='pfp' src={require('../../assets/lioncy1.JPG')}></img>
        </div>
      </section>
    )
  }
  
  export default About;