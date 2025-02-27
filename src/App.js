import React, { useState } from 'react';
import { shoes } from './shoes';
import HomeIcon from '@mui/icons-material/Home';
import { BrowserRouter, Routes, Route, NavLink, useParams, useNavigate } from 'react-router-dom';
import { Navbar, Nav, Button, Form, FormControl, Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export function App2() {
  const [shoeList, setShoeList] = useState(shoes);
  const [editingId, setEditingId] = useState(null);
  const [editedName, setEditedName] = useState('');
  const [editedSize, setEditedSize] = useState('');
  const [editedPrice, setEditedPrice] = useState('');
  const [editedType, setEditedType] = useState('');
  const [editedColor, setEditedColor] = useState('');
  const [editedStock, setEditedStock] = useState('');
  const [editedImage, setEditedImage] = useState('');

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

  return (
    <Container>
      <NavLink to="/" className="btn btn-primary mb-3"><i className="bi bi-house-door"><HomeIcon/></i></NavLink>
      <Row>
        {shoeList.map(shoe => (
          <Col key={shoe.id} md={4} lg={3} className="mb-4">
            <Card>
              {editingId === shoe.id ? (
                <Card.Body>
                  <Form>
                    <Form.Group className="mb-3">
                      <Form.Control type="text" value={editedName} onChange={(e) => setEditedName(e.target.value)} placeholder="Name" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Control type="text" value={editedPrice} onChange={(e) => setEditedPrice(e.target.value)} placeholder="Price" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Control type="text" value={editedColor} onChange={(e) => setEditedColor(e.target.value)} placeholder="Color" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Control type="text" value={editedSize} onChange={(e) => setEditedSize(e.target.value)} placeholder="Sizes (comma separated)" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Control type="text" value={editedStock} onChange={(e) => setEditedStock(e.target.value)} placeholder="Stock" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Control type="text" value={editedType} onChange={(e) => setEditedType(e.target.value)} placeholder="Type" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Control type="file" onChange={handleImageChange} />
                    </Form.Group>
                    {editedImage && <img src={editedImage} alt="Preview" className="img-thumbnail mb-3" />}
                    <Button variant="success" onClick={() => handleSaveClick(shoe.id)}>Save</Button>
                  </Form>
                </Card.Body>
              ) : (
                <Card.Body>
                  <Card.Title>{shoe.name}</Card.Title>
                  <Card.Text>Type: {shoe.type}</Card.Text>
                  <Card.Text>Sizes: {shoe.sizes.join(', ')}</Card.Text>
                  <Card.Text>Color: {shoe.color}</Card.Text>
                  <Card.Text>Price: {shoe.price}</Card.Text>
                  <Card.Text>Stock: {shoe.stock}</Card.Text>
                  <img src={shoe.image} alt={shoe.name} className="img-thumbnail mb-3" />
                  <NavLink to={`/products/${shoe.id}`} className="btn btn-info mb-2">Chi tiết</NavLink>
                  <Button variant="warning" onClick={() => handleEditClick(shoe)} className="me-2">Edit</Button>
                  <Button variant="danger" onClick={() => handleDeleteClick(shoe.id)}>Delete</Button>
                </Card.Body>
              )}
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export function App() {
  return (
    <BrowserRouter>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/">Shoe Management</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/products">Products</Nav.Link>
              <Nav.Link as={NavLink} to="/addProduct">Add Product</Nav.Link>
              <Nav.Link as={NavLink} to="/search">Search</Nav.Link>
              <Nav.Link as={NavLink} to="/filter">Filter</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className="mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<App2 />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/products/delete/:id" element={<DeleteProduct />} />
          <Route path="/addProduct" element={<AddProduct />} />
          <Route path="/search" element={<Search />} />
          <Route path="/filter" element={<Filter />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

function Home() {
  return <h2>CHƯƠNG TRÌNH QUẢN LÝ GIÀY</h2>;
}

function ProductDetail() {
  const { id } = useParams();
  const shoe = shoes.find((shoe) => shoe.id === parseInt(id));

  if (!shoe) {
    return <h2>Shoe not found</h2>;
  }

  return (
    <div>
      <NavLink to="/products" className="btn btn-primary mb-3"><i className="bi bi-house-door"></i> <HomeIcon/></NavLink>
      <h2>{shoe.name}</h2>
      <p>Type: {shoe.type}</p>
      <p>Sizes: {shoe.sizes.join(', ')}</p>
      <p>Color: {shoe.color}</p>
      <p>Price: {shoe.price}</p>
      <p>Stock: {shoe.stock}</p>
      <img src={shoe.image} alt={shoe.name} className="img-thumbnail" />
    </div>
  );
}

function DeleteProduct() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [shoeList, setShoeList] = useState(shoes);

  const handleDelete = () => {
    setShoeList(shoeList.filter(shoe => shoe.id !== parseInt(id)));
    navigate('/products');
  };

  return (
    <div>
      <h2>Are you sure you want to delete this product?</h2>
      <Button variant="danger" onClick={handleDelete} className="me-2">Yes</Button>
      <NavLink to="/products" className="btn btn-secondary">No</NavLink>
    </div>
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
      <NavLink to="/" className="btn btn-primary mb-3"><i className="bi bi-house-door"><HomeIcon/></i></NavLink>
      <Form>
        <Form.Group className="mb-3">
          <Form.Control type="text" value={addName} onChange={(e) => setAddName(e.target.value)} placeholder="Name" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control type="text" value={addPrice} onChange={(e) => setAddPrice(e.target.value)} placeholder="Price" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control type="text" value={addColor} onChange={(e) => setAddColor(e.target.value)} placeholder="Color" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control type="text" value={addSize} onChange={(e) => setAddSize(e.target.value)} placeholder="Sizes (comma separated)" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control type="text" value={addStock} onChange={(e) => setAddStock(e.target.value)} placeholder="Stock" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control type="text" value={addType} onChange={(e) => setAddType(e.target.value)} placeholder="Type" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control type="file" onChange={handleImageChange} />
        </Form.Group>
        {addImage && <img src={addImage} alt="Preview" className="img-thumbnail mb-3" />}
        <Button variant="success" onClick={handleSaveClick}>Save</Button>
      </Form>
    </Container>
  );
}

function Search() {
  const [showSearchResults, setShowSearchResults] = useState(false);

  const handleSearchClick = () => {
    setShowSearchResults(true);
  };

  return (
    <Container>
      <NavLink to="/" className="btn btn-primary mb-3"><i className="bi bi-house-door"><HomeIcon/></i></NavLink>
      <Form className="d-flex mb-3">
        <FormControl type="search" placeholder="Search..." className="me-2" />
        <Button variant="primary" onClick={handleSearchClick}>Search</Button>
      </Form>
      {showSearchResults && (
        <h2 className="text-danger">Danh sách giày tìm kiếm</h2>
      )}
    </Container>
  );
}

function Filter() {
  const [filterTerm, setFilterTerm] = useState('');
  const [filterType, setFilterType] = useState('name');
  const [showFilterOptions, setShowFilterOptions] = useState(false);

  const toggleFilterOptions = () => {
    setShowFilterOptions(!showFilterOptions);
  };

  const setFilter = (type) => {
    setFilterType(type);
    setShowFilterOptions(false);
  };

  return (
    <Container>
      <NavLink to="/" className="btn btn-primary mb-3"><i className="bi bi-house-door"><HomeIcon/></i></NavLink>
      <Form className="d-flex mb-3">
        <FormControl type="text" value={filterTerm} onChange={(e) => setFilterTerm(e.target.value)} placeholder="Filter..." className="me-2" />
        <Button variant="secondary" onClick={toggleFilterOptions}><i className="bi bi-filter"></i></Button>
      </Form>
      {showFilterOptions && (
        <div className="d-flex flex-column align-items-center">
          <Button variant="light" onClick={() => setFilter('name')} className="mb-2">Tên</Button>
          <Button variant="light" onClick={() => setFilter('price')} className="mb-2">Giá</Button>
          <Button variant="light" onClick={() => setFilter('type')} className="mb-2">Loại</Button>
          <Button variant="light" onClick={() => setFilter('color')} className="mb-2">Màu sắc</Button>
          <Button variant="light" onClick={() => setFilter('size')} className="mb-2">Kích thước</Button>
          <Button variant="light" onClick={() => setFilter('stock')} className="mb-2">Số lượng</Button>
        </div>
      )}
    </Container>
  );
}