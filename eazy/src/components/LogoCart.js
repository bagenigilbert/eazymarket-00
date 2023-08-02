import React, { useContext, useState } from 'react';
import { UserContext } from '../contexts/UserContext';
import { Button, Badge, Modal, Image } from 'react-bootstrap';

const LogoCart = () => {
  const { cartItems, clearCart, removeFromCart } = useContext(UserContext);
  const [showCartModal, setShowCartModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleCartClick = () => {
    setShowCartModal(true);
  };

  const handleCloseCartModal = () => {
    setShowCartModal(false);
  };

  const handleProductDetails = (product) => {
    setSelectedProduct(product);
  };

  const cartCount = cartItems.length;

  const formatPrice = (price) => {
    return price.toLocaleString('en-KE', { style: 'currency', currency: 'KES' });
  };

  return (
    <>
      <Button variant="outline-primary" onClick={handleCartClick}>
        <i className="bi bi-cart"></i>
        <Badge bg="secondary">{cartCount}</Badge>
      </Button>

      <Modal show={showCartModal} onHide={handleCloseCartModal} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>Shopping Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="mb-3">
            <h2 className="text-center mb-4">Your Shopping Cart</h2>
            {cartItems.length === 0 ? (
              <p className="text-center">Your cart is empty.</p>
            ) : (
              <div>
                <ul className="list-group">
                  {cartItems.map((item) => (
                    <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                      <div onClick={() => handleProductDetails(item)} style={{ cursor: 'pointer' }}>
                        <Image src={item.image} alt={item.title} width="50" height="50" rounded />
                        <span className="ms-3">{item.title}</span>
                      </div>
                      <Button variant="danger" size="sm" onClick={() => removeFromCart(item.id)}>
                        x
                      </Button>
                    </li>
                  ))}
                </ul>
                <p className="text-center mt-4">Total Price: {formatPrice(cartItems.reduce((total, item) => total + item.price, 0))}</p>
                <div className="d-grid gap-2">
                  <Button variant="primary" onClick={clearCart} size="lg" className="mt-3">
                    Clear Cart
                  </Button>
                </div>
              </div>
            )}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseCartModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {selectedProduct && (
        <Modal show={true} onHide={() => setSelectedProduct(null)}>
          <Modal.Header closeButton>
            <Modal.Title>{selectedProduct.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="d-flex justify-content-center">
              <Image src={selectedProduct.image} alt={selectedProduct.title} width="200" height="200" />
            </div>
            <p className="text-center mt-3">{selectedProduct.description}</p>
            <p className="text-center mt-3">{formatPrice(selectedProduct.price)}</p>
          </Modal.Body>
        </Modal>
      )}
    </>
  );
};

export default LogoCart;
