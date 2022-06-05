import "./App.css";
export default function App() {
  return (
    <div className="App">
      <section className="Combined_item">
        <div className="Container1">
          <h6 className="Header">Free</h6>
          <h2 className="Month_amount">
            <span className="size_price">$0</span>/month
          </h2>
          <p className="border_line"></p>
          <ul>
            <li className="Header_List">
              <i class="fa fa-check"></i>Single User
            </li>
            <li>
              <i className="fa fa-check"></i>5GB Storage
            </li>
            <li>
              <i className="fa fa-check"></i>Unlimited Public Projects
            </li>
            <li>
              <i className="fa fa-check"></i>Community Access
            </li>
            <li className="shadow">
              <i className="fa fa-times"></i>Unlimited Private Projects
            </li>
            <li>
              <i className="fa fa-times"></i>Dedicated Phone Support
            </li>
            <li>
              <i className="fa fa-times"></i>Free Subdomain
            </li>
            <li>
              <i className="fa fa-times"></i>Monthly Status Reports
            </li>
          </ul>
          <div class="d-grid gap-2">
            <button class="btn btn-primary" type="button">
              Button
            </button>
          </div>
        </div>
        {/* Second Container */}
        <div className="Container1">
          <h6 className="Header">Plus</h6>
          <h2 className="Month_amount">
            <span className="size_price">$15</span>/month
          </h2>
          <p className="border_line"></p>
          <ul>
            <li className="Header_List">
              <i className="fa fa-check"></i>
              <b>5 Users</b>
            </li>
            <li>
              <i className="fa fa-check"></i>50GB Storage
            </li>
            <li>
              <i className="fa fa-check"></i>Unlimited Public Projects
            </li>
            <li>
              <i className="fa fa-check"></i>Community Access
            </li>
            <li>
              <i className="fa fa-check"></i>Unlimited Private Projects
            </li>
            <li>
              <i className="fa fa-check"></i>Dedicated Phone Support
            </li>
            <li>
              <i className="fa fa-check"></i>Free Subdomain
            </li>
            <li className="shadow">
              <i className="fa fa-times"></i>Monthly Status Reports
            </li>
          </ul>
          <div class="d-grid gap-2">
            <button class="btn btn-primary" type="button">
              Button
            </button>
          </div>
        </div>
        {/* Third Container */}
        <div className="Container1">
          <h6 className="Header">Pro</h6>
          <h2 className="Month_amount">
            <span className="size_price">$50</span>/month
          </h2>
          <p className="border_line"></p>
          <ul>
            <li className="Header_List">
              <i className="fa fa-check"></i>
              <b>Unlimited Users</b>
            </li>
            <li>
              <i className="fa fa-check"></i>150GB Storage
            </li>
            <li>
              <i className="fa fa-check"></i>Unlimited Public Projects
            </li>
            <li>
              <i className="fa fa-check"></i>Community Access
            </li>
            <li>
              <i className="fa fa-check"></i>Unlimited Private Projects
            </li>
            <li>
              <i className="fa fa-check"></i>Dedicated Phone Support
            </li>
            <li>
              <i className="fa fa-check"></i>
              <b>Unlimited</b> Free Subdomain
            </li>
            <li>
              <i className="fa fa-check"></i>Monthly Status Reports
            </li>
          </ul>
          <div class="d-grid gap-2">
            <button class="btn btn-primary" type="button">
              Button
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
