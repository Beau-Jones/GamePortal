import Button from 'react-bootstrap/Button';

function SideBarButton({ label }) {
  return (
    <div className="sidebar-button">
    <Button variant="outline-primary">{label}</Button>
    </div>
  );

}

export default SideBarButton;

