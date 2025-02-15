import './SideBar.css';
import SideBarButton from './SideBarButton';


function SideBar() {
    return(
    <div className="sidebar">
        <SideBarButton label="Cakes"/>
        <SideBarButton label="Chocolate"/>
        <SideBarButton label="Ice Cream"/>
        <SideBarButton label="Fudge"/>
        <SideBarButton label="Oreo"/>
        <SideBarButton label="M&Ms"/>
    </div>
    );
}

export default SideBar;