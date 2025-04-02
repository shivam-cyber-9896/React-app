import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

const courses = [
  { 
    src: 'https://cdn-icons-png.flaticon.com/512/226/226777.png', 
    alt: 'Java Course', 
    label: 'Java', 
    desc: 'Master Java programming from basics to advanced.' 
  },
  { 
    src: 'https://upload.wikimedia.org/wikipedia/commons/1/18/C_Programming_Language.svg', 
    alt: 'C Course', 
    label: 'C', 
    desc: 'Understand C programming and data structures.' 
  },
  { 
    src: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/C%2B%2B.svg', 
    alt: 'C++ Course', 
    label: 'C++', 
    desc: 'Learn C++ and object-oriented programming.' 
  },
  { 
    src: 'https://www.myfreax.com/content/images/2022/11/introduction-to-javascript-syntax.webp', 
    alt: 'JavaScript Course', 
    label: 'JavaScript', 
    desc: 'Deep dive into JavaScript and frontend development.' 
  },
  { 
    src: 'https://static.wixstatic.com/media/3a360e_c94b7781bbb94afe9ba063ae24bef8b8~mv2.jpg/v1/fill/w_974,h_510,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/full-stack-developer-training-course.jpg', 
    alt: 'Full Stack Course', 
    label: 'Full Stack', 
    desc: 'Become a Full Stack Developer with MERN stack.' 
  },
  { 
    src: 'https://w3-lab.com/wp-content/uploads/2019/12/Get-the-Most-Fancied-Web-Development-Services-min-scaled.jpg', 
    alt: 'Web Development Course', 
    label: 'Web Development', 
    desc: 'Build modern websites with HTML, CSS, and JavaScript.' 
  }
];

function CoursesCarousel() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => setIndex(selectedIndex);

  return (
    
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {courses.map((course, idx) => (
        <Carousel.Item key={idx}>
          <img className="d-block w-100" src={course.src} alt={course.alt} style={{ height: '400px', objectFit: 'contain' }} />
          <Carousel.Caption>
            <h3>{course.label}</h3>
            <p>{course.desc}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default CoursesCarousel;
