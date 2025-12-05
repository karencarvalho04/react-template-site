import {Button, Carousel} from 'react-bootstrap';

function Hero() {
  return (
    <section className="hero">
      <h2>Crio soluções digitais que transformam ideias em realidade</h2>
      <p>Especialista em HTML, CSS e JavaScript. Projetos modernos, responsivos e com performance de ponta.</p>
      <Carousel indicators={false} controls={false} fade={true} interval={3000} className="hero-carousel">
        <Carousel.Item>
          <h3>Desenvolvimento Web</h3>
        </Carousel.Item>
        <Carousel.Item>
          <h3>Design Responsivo</h3>
        </Carousel.Item>
        <Carousel.Item>
          <h3>Otimização de Performance</h3>
        </Carousel.Item>
      </Carousel>
      <Button variant="secondary" href="#sobre">Saiba mais</Button>{' '}
      <Button variant="primary" href="#contato">Vamos conversar</Button>
    </section>
  );
}
export default Hero;
