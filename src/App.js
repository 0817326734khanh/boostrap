import React, { useState } from 'react';
import { shoes } from './shoes';
import HomeIcon from '@mui/icons-material/Home';
import { BrowserRouter, Routes, Route, NavLink, useParams, useNavigate } from 'react-router-dom';
import { Navbar, Nav, Button, Form, FormControl, Container, Row, Col, Card, DropdownButton, Dropdown, Alert } from 'react-bootstrap';
import InfiniteScroll from 'react-infinite-scroll-component';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

export function Products() {
  const [shoeList, setShoeList] = useState(shoes);
  const [editingId, setEditingId] = useState(null);
  const [editedName, setEditedName] = useState('');
  const [editedSize, setEditedSize] = useState('');
  const [editedPrice, setEditedPrice] = useState('');
  const [editedType, setEditedType] = useState('');
  const [editedColor, setEditedColor] = useState('');
  const [editedStock, setEditedStock] = useState('');
  const [editedImage, setEditedImage] = useState('');
  const [visibleShoes, setVisibleShoes] = useState(10);

  const handleEditClick = (shoe) => {
    setEditingId(shoe.id);
    setEditedName(shoe.name);
    setEditedPrice(shoe.price);
    setEditedSize(shoe.sizes.join(', '));
    setEditedType(shoe.type);
    setEditedColor(shoe.color);
    setEditedStock(shoe.stock);
    setEditedImage(shoe.image);
  };

  const handleDeleteClick = (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      setShoeList(shoeList.filter(shoe => shoe.id !== id));
    }
  };

  const handleSaveClick = (id) => {
    const updatedShoes = shoeList.map(shoe => {
      if (shoe.id === id) {
        return {
          ...shoe,
          name: editedName,
          price: editedPrice,
          sizes: editedSize.split(',').map(size => size.trim()),
          type: editedType,
          color: editedColor,
          stock: editedStock,
          image: editedImage
        };
      }
      return shoe;
    });
    setShoeList(updatedShoes);
    setEditingId(null);
    setEditedName('');
    setEditedPrice('');
    setEditedSize('');
    setEditedType('');
    setEditedColor('');
    setEditedStock('');
    setEditedImage('');
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setEditedImage(imageUrl);
    }
  };

  const fetchMoreData = () => {
    setVisibleShoes((prevVisibleShoes) => prevVisibleShoes + 10);
  };

  return (
    <Container>
      <NavLink to="/" className="btn btn-primary mb-3"><HomeIcon /></NavLink>
      <InfiniteScroll
        dataLength={visibleShoes}
        next={fetchMoreData}
        hasMore={visibleShoes < shoeList.length}
        loader={<h4>Loading...</h4>}
      >
        <Row>
          {shoeList.slice(0, visibleShoes).map(shoe => (
            <Col key={shoe.id} style={{ flex: '0 0 20%' }} md={4} lg={3} className="mb-4">
              <Card className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col h-full" style={{ height: '100%' }}>
                {(() => {
                  if (editingId === shoe.id) {
                    return (
                      <Card.Body>
                        <Form>
                          <Form.Group className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" value={editedName} onChange={(e) => setEditedName(e.target.value)} placeholder="Name" />
                          </Form.Group>
                          <Form.Group className="mb-3">
                            <Form.Label>Price</Form.Label>
                            <Form.Control type="text" value={editedPrice} onChange={(e) => setEditedPrice(e.target.value)} placeholder="Price" />
                          </Form.Group>
                          <Form.Group className="mb-3">
                            <Form.Label>Color</Form.Label>
                            <Form.Control type="text" value={editedColor} onChange={(e) => setEditedColor(e.target.value)} placeholder="Color" />
                          </Form.Group>
                          <Form.Group className="mb-3">
                            <Form.Label>Sizes (comma separated)</Form.Label>
                            <Form.Control type="text" value={editedSize} onChange={(e) => setEditedSize(e.target.value)} placeholder="Sizes (comma separated)" />
                          </Form.Group>
                          <Form.Group className="mb-3">
                            <Form.Label>Stock</Form.Label>
                            <Form.Control type="text" value={editedStock} onChange={(e) => setEditedStock(e.target.value)} placeholder="Stock" />
                          </Form.Group>
                          <Form.Group className="mb-3">
                            <Form.Label>Type</Form.Label>
                            <Form.Control type="text" value={editedType} onChange={(e) => setEditedType(e.target.value)} placeholder="Type" />
                          </Form.Group>
                          <Form.Group className="mb-3">
                            <Form.Label>Image</Form.Label>
                            <Form.Control type="file" onChange={handleImageChange} />
                          </Form.Group>
                          {editedImage && <img src={editedImage} alt="Preview" className="img-thumbnail mb-3" />}
                          <Button variant="success" onClick={() => handleSaveClick(shoe.id)}>Save</Button>
                        </Form>
                      </Card.Body>
                    );
                  } else {
                    return (
                      <Card key={shoe.id} className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col h-full" style={{ height: '100%' }}>
                        <Card.Img variant="top" src={shoe.image} alt={shoe.name} className="w-full h-48 object-cover" />
                        <Card.Body className="p-4 flex flex-col h-full">
                          <Card.Title className="text-lg font-semibold">{shoe.name}</Card.Title>
                          <Card.Text>Type: {shoe.type}</Card.Text>
                          <Card.Text>Price: {shoe.price}</Card.Text>
                          <NavLink to={`/products/${shoe.id}`} className="block bg-blue-500 text-white text-center py-2 mt-auto rounded-md mb-2">
                            Chi tiết
                          </NavLink>
                          <div className="flex justify-between space-x-2">
                            <Button variant="warning" onClick={() => handleEditClick(shoe)} className="bg-yellow-500 text-white px-4 py-2 rounded-md">Edit</Button>
                            <Button variant="danger" onClick={() => handleDeleteClick(shoe.id)} className="bg-red-500 text-white px-4 py-2 rounded-md">Delete</Button>
                          </div>
                        </Card.Body>
                      </Card>
                    );
                  }
                })()}
              </Card>
            </Col>
          ))}
        </Row>
      </InfiniteScroll>
    </Container>
  );
}

export function App() {
  return (
    <BrowserRouter>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={NavLink} to="/">Shoe Management</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/products">Products</Nav.Link>
              <Nav.Link as={NavLink} to="/addProduct">Add Product</Nav.Link>
              <Nav.Link as={NavLink} to="/search">Search Product</Nav.Link>
              <Nav.Link as={NavLink} to="/filter">Filter Product</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className="mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/addProduct" element={<AddProduct />} />
          <Route path="/search" element={<Search />} />
          <Route path="/filter" element={<Filter />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

function Home() {
  return <h2 className="text-center my-4">CHƯƠNG TRÌNH QUẢN LÝ GIÀY</h2>;

}

function ProductDetail() {
  const { id } = useParams();
  const shoe = shoes.find((shoe) => shoe.id === parseInt(id));

  if (!shoe) {
    return <Alert variant="danger" className="text-center my-4">Shoe not found</Alert>;
  }

  return (
    <Container>
      <NavLink to="/products" className="btn btn-primary mb-3"><HomeIcon /> Back</NavLink>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{shoe.name}</Card.Title>
          <Card.Text>Type: {shoe.type}</Card.Text>
          <Card.Text>Sizes: {shoe.sizes.join(', ')}</Card.Text>
          <Card.Text>Color: {shoe.color}</Card.Text>
          <Card.Text>Price: {shoe.price}</Card.Text>
          <Card.Text>Stock: {shoe.stock}</Card.Text>
          <img src={shoe.image} alt={shoe.name} className="img-thumbnail mb-3" />
        </Card.Body>
      </Card>
    </Container>
  );
}


function AddProduct() {
  const [shoeList, setShoeList] = useState(shoes);
  const [addName, setAddName] = useState('');
  const [addSize, setAddSize] = useState('');
  const [addPrice, setAddPrice] = useState('');
  const [addType, setAddType] = useState('');
  const [addColor, setAddColor] = useState('');
  const [addStock, setAddStock] = useState('');
  const [addImage, setAddImage] = useState('');

  const handleSaveClick = () => {
    const newShoe = {
      id: shoeList.length + 1,
      name: addName,
      price: addPrice,
      sizes: addSize.split(',').map(size => size.trim()),
      type: addType,
      color: addColor,
      stock: addStock,
      image: addImage
    };
    alert('New shoe added successfully');
    setShoeList([...shoeList, newShoe]);
    setAddName('');
    setAddPrice('');
    setAddSize('');
    setAddType('');
    setAddColor('');
    setAddStock('');
    setAddImage('');
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setAddImage(imageUrl);
    }
  };

  return (
    <Container>
      <NavLink to="/" className="btn btn-primary mb-3"><HomeIcon /></NavLink>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" value={addName} onChange={(e) => setAddName(e.target.value)} placeholder="Name" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Price</Form.Label>
          <Form.Control type="text" value={addPrice} onChange={(e) => setAddPrice(e.target.value)} placeholder="Price" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Color</Form.Label>
          <Form.Control type="text" value={addColor} onChange={(e) => setAddColor(e.target.value)} placeholder="Color" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Sizes (comma separated)</Form.Label>
          <Form.Control type="text" value={addSize} onChange={(e) => setAddSize(e.target.value)} placeholder="Sizes (comma separated)" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Stock</Form.Label>
          <Form.Control type="text" value={addStock} onChange={(e) => setAddStock(e.target.value)} placeholder="Stock" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Type</Form.Label>
          <Form.Control type="text" value={addType} onChange={(e) => setAddType(e.target.value)} placeholder="Type" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Image</Form.Label>
          <Form.Control type="file" onChange={handleImageChange} />
        </Form.Group>
        {addImage && <img src={addImage} alt="Preview" className="img-thumbnail mb-3" />}
        <Button variant="success" onClick={handleSaveClick}>Save</Button>
      </Form>
    </Container>
  );
}

function Search() {
  const [shoeList, setShoeList] = useState(shoes);
  const [searchTerm, setSearchTerm] = useState('');
  const [visibleShoes, setVisibleShoes] = useState(10);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const fetchMoreData = () => {
    setVisibleShoes((prevVisibleShoes) => prevVisibleShoes + 10);
  };

  const filteredShoes = shoeList.filter(shoe => {
    return shoe.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="container mx-auto p-4">
      <NavLink to="/" className="btn btn-primary mb-3"><HomeIcon /></NavLink>
      <form className="flex mb-3">
        <input
          type="search"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="flex-grow p-2 border border-gray-300 rounded-md mr-2"
        />
        <button type="button" className="bg-blue-500 text-white p-2 rounded-md">
          Search
        </button>
      </form>
      {filteredShoes.length === 0 && (
        <Alert variant="warning" className="text-center">
          No shoes found matching your search term.
        </Alert>
      )}
      <InfiniteScroll
        dataLength={visibleShoes}
        next={fetchMoreData}
        hasMore={visibleShoes < filteredShoes.length}
        loader={<h4>Loading...</h4>}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {filteredShoes.slice(0, visibleShoes).map(shoe => (
            <Card key={shoe.id} className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col h-full">
              <Card.Img variant="top" src={shoe.image} alt={shoe.name} className="w-full h-48 object-cover" />
              <Card.Body className="p-4 flex flex-col h-full">
                <Card.Title className="text-lg font-semibold">{shoe.name}</Card.Title>
                <Card.Text>Type: {shoe.type}</Card.Text>
                <Card.Text>Price: {shoe.price}</Card.Text>
                <NavLink to={`/products/${shoe.id}`} className="block bg-blue-500 text-white text-center py-2 mt-auto rounded-md">
                  Chi tiết
                </NavLink>
              </Card.Body>
            </Card>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
}


function Filter() {
  const [shoeList, setShoeList] = useState(shoes);
  const [filterTerm, setFilterTerm] = useState('');
  const [filterType, setFilterType] = useState('name');
  const [visibleShoes, setVisibleShoes] = useState(10);

  const handleFilterChange = (type) => {
    setFilterType(type);
  };

  const handleFilterTermChange = (e) => {
    setFilterTerm(e.target.value);
  };

  const fetchMoreData = () => {
    setVisibleShoes((prevVisibleShoes) => prevVisibleShoes + 10);
  };

  const filteredShoes = shoeList.filter(shoe => {
    if (filterType === 'name') {
      return shoe.name.toLowerCase().includes(filterTerm.toLowerCase());
    } else if (filterType === 'price') {
      return shoe.price.toLowerCase().includes(filterTerm.toLowerCase());
    } else if (filterType === 'type') {
      return shoe.type.toLowerCase().includes(filterTerm.toLowerCase());
    } else if (filterType === 'color') {
      return shoe.color.toLowerCase().includes(filterTerm.toLowerCase());
    } else if (filterType === 'size') {
      return shoe.sizes.join(', ').toLowerCase().includes(filterTerm.toLowerCase());
    } else if (filterType === 'stock') {
      return shoe.stock.toString().includes(filterTerm);
    }
    return true;
  });

  return (
    <Container>
      <NavLink to="/" className="btn btn-primary mb-3"><HomeIcon /></NavLink>
      <Form className="d-flex mb-3">
        <FormControl type="text" value={filterTerm} onChange={handleFilterTermChange} placeholder="Filter..." className="me-2" />
        <DropdownButton id="dropdown-basic-button" title="Filter Options" variant="secondary">
          <Dropdown.Item onClick={() => handleFilterChange('name')}>Tên</Dropdown.Item>
          <Dropdown.Item onClick={() => handleFilterChange('price')}>Giá</Dropdown.Item>
          <Dropdown.Item onClick={() => handleFilterChange('type')}>Loại</Dropdown.Item>
          <Dropdown.Item onClick={() => handleFilterChange('color')}>Màu sắc</Dropdown.Item>
          <Dropdown.Item onClick={() => handleFilterChange('size')}>Kích thước</Dropdown.Item>
          <Dropdown.Item onClick={() => handleFilterChange('stock')}>Số lượng</Dropdown.Item>
        </DropdownButton>
      </Form>
      <InfiniteScroll
        dataLength={visibleShoes}
        next={fetchMoreData}
        hasMore={visibleShoes < filteredShoes.length}
        loader={<h4>Loading...</h4>}
      >
        <Row>
          {filteredShoes.slice(0, visibleShoes).map(shoe => (
            <Col key={shoe.id} md={4} lg={3} className="mb-4">
              <Card style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <Card.Body className='p-4 flex flex-col h-full'>
                  <Card.Title>{shoe.name}</Card.Title>
                  <Card.Text>Type: {shoe.type}</Card.Text>
                  <Card.Text>Sizes: {shoe.sizes.join(', ')}</Card.Text>
                  <Card.Text>Color: {shoe.color}</Card.Text>
                  <Card.Text>Price: {shoe.price}</Card.Text>
                  <Card.Text>Stock: {shoe.stock}</Card.Text>
                  <img src={shoe.image} alt={shoe.name} className="img-thumbnail mb-3" />
                  <NavLink to={`/products/${shoe.id}`} className="block bg-blue-500 text-white text-center py-2 mt-auto rounded-md">
                    Chi tiết
                  </NavLink>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </InfiniteScroll>
    </Container>
  );
}
