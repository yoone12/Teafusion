import "public/styles/footer.css";

export default function Footer(){
    return (
        <div className="footer">
        <ul className="footernav">
            <li>
                <a href="" onclick="return false">
                Privacy Policy
                </a>
            </li>
            <li>
                <a href="" onclick="return false">
                Terms and Conditions
                </a>
            </li>
        </ul>
        <div className="socials">
            <img src="assets/images/about/social-icons-r.png" alt="" />
        </div>
    </div>
    )
}
