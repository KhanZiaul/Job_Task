import { Button } from 'react-bootstrap';

const App = () => {
  return (
    <div>
      <h2>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam, incidunt natus! Ullam cupiditate, placeat animi iusto totam repellendus rerum mollitia culpa, asperiores accusantium dolorum error pariatur! Reiciendis magni adipisci obcaecati.</h2>
      <Button variant="primary">Primary</Button>{' '}
      <Button variant="secondary">Secondary</Button>{' '}
      <Button variant="success">Success</Button>{' '}
      <Button variant="warning">Warning</Button>{' '}
      <Button variant="danger">Danger</Button>{' '}
      <Button variant="info">Info</Button>{' '}
      <Button variant="light">Light</Button>{' '}
      <Button variant="dark">Dark</Button>
      <Button variant="link">Link</Button>
    </div>
  );
};

export default App;