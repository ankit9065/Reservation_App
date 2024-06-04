import Dropdown from 'react-bootstrap/Dropdown';

function Dropdown1() {
  return (
    <>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-Bus">
          Bus
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="/adminHomePage/addbus">Add Bus</Dropdown.Item>
          <Dropdown.Item href="/adminHomePage/viewbus">Buses List</Dropdown.Item>
          <Dropdown.Item href="/adminHomePage/editbus">Edit Bus</Dropdown.Item>
          <Dropdown.Item href="/adminHomePage/deletebus">Delete Bus</Dropdown.Item>
          <Dropdown.Item href="#/action-5">Logout</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown>
        <Dropdown.Toggle variant="warning" id="dropdown-Admin">
          Admin
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="/adminHomePage/addadmin">Add Admin</Dropdown.Item>
          <Dropdown.Item href="/adminHomePage/viewadmin">View Admin</Dropdown.Item>
          <Dropdown.Item href="/adminHomePage/editadmin">Edit Admin</Dropdown.Item>
          <Dropdown.Item href="/adminHomePage/deleteadmin">Delete Admin</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
}

export default Dropdown1;
