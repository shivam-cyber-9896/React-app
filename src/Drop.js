import Dropdown from 'react-bootstrap/Dropdown';

function Drop() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>

      <Dropdown.Menu>
        
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default Drop;