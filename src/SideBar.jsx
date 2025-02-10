import './SideBar.css';


function SideBar() {
    return(
    <div className="sidebar">
        <ul className="list">
            <a href="cakes.html"><li className="list-item">Cakes</li></a>
            <a href="pies.html"><li className="list-item">Pies</li></a>
            <a href="candy.html"><li className="list-item">Candy</li></a>
            <a href="cakes.html"><li className="list-item">Cakes</li></a>
            <a href="pies.html"><li className="list-item">Pies</li></a>
            <a href="candy.html"><li className="list-item">Candy</li></a>     
        </ul>
    </div>
    );
}

export default SideBar;