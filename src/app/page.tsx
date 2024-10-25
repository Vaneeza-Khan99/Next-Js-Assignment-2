import Link from "next/link"

const HomePage = () => {
  return (
    <div className="green">
      <ul>
        <li>
          Home
        </li>
        <li>
          <a href="About" target="_blank"> About Us </a>
        </li>
        <li>
          <a href="Contact" target="_blank"> Contact Us</a>
        </li>
        <li>
          <a href="service/web-development"> Service Page</a>
        </li>
      </ul>
      <h1 >Home Page</h1>
    </div>
  )
}

export default HomePage