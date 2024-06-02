import Dropdown from 'react-bootstrap/Dropdown';

function Dropdown1() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Account
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="/adminHomePage/addbus">Add Bus</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Buses List</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Edit Profile</Dropdown.Item>
        <Dropdown.Item href="#/action-4">Logout</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default Dropdown1;