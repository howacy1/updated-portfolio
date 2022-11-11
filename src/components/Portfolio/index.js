import React, { useState } from 'react';
import Modal from '../Modal';

function Portfolio() {
  const [portfolioPhotos] = useState([
    {
      picture: require('../../assets/runbuddyproject.PNG'),
      name: 'Run Buddy',
      description: 'Website that offers fitness training services. Built in HTML and CSS.',
      repo: 'https://github.com/howacy1/run-buddy',
      link: 'https://howacy1.github.io/run-buddy/'
    },
    {
      picture: require('../../assets/challenge.PNG'),
      name: 'Code Refactoring',
      description: 'Website for marketing agency. Built in HTML and CSS.',
      repo: 'https://github.com/howacy1/modulechallenge1',
      link: 'https://howacy1.github.io/modulechallenge1/'
    },
    {
      picture: require('../../assets/translate.PNG'),
      name: 'Rapid Translator',
      description: 'Website for defining and translating words. Built in HTML, CSS, JS.',
      repo: 'https://github.com/howacy1/quad-coding',
      link: 'https://howacy1.github.io/quad-coding/'
    },
    {
      picture: require('../../assets/readit.PNG'),
      name: 'iReadit',
      description: 'Online book review club. Built in HTML, CSS, JS, Handlebars.',
      repo: 'https://github.com/Boywondr84/iReadIt',
      link: 'https://immense-ravine-74376.herokuapp.com/'
    },
    {
      picture: require('../../assets/weatherPic.PNG'),
      name: 'Weather Dashboard',
      description: 'Weather dashboard that can be viewed and used in a broswer. Built in HTML, JavaScript.',
      repo: 'https://github.com/howacy1/weather-dashboard',
      link: 'https://howacy1.github.io/weather-dashboard/'
    },
    {
      picture: require('../../assets/notes.PNG'),
      name: 'Note Taker',
      description: 'Note Taker that can be viewed and used in a browser. Built in HTML, CSS, JavaScript.',
      repo: 'https://github.com/howacy1/note-taker',
      link: 'https://pure-river-36401.herokuapp.com/'
    },
  ])

  const [currentProject, setCurrentProject] = useState();
  const showModal = (image, i) => {
    setCurrentProject({ ...image, index: i });
    setIsModalOpen(!isModalOpen)
  }
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <h1 className="portfolioTitle">My Projects</h1>
      {isModalOpen && <Modal currentProject={currentProject} onClose={showModal} />}
      <section className="projectSection">
        {portfolioPhotos.map((image, i) => (
          <div>
            <h3 className="projectName">{image.name}</h3>
            <img
              src={image.picture}
              alt={image.name}
              className='appImage'
              key={image.name}
              onClick={() => showModal(image, i)}
            />
          </div>
        ))}
      </section>
    </div>
  )
};

export default Portfolio;