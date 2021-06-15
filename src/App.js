import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <head>
        <title>Glasgow Computing</title>
      </head>
      <html>
        <body>
          <h1>The Computer Mechanic</h1>
          <h2>Glasgow and Surrounding Areas</h2>
          <div>
            <p>
              Computers are like cars, they can be fast, small, big, but more
              importantly, they can be slow or broken.
            </p>
            <p>
              Just like a car, a computer needs to be maintained to prolong its
              lifetime.
            </p>
            <p>
              This is why The Computer Mechanic exists, to prolong the life of
              your computer... and prevent a computer sized hole in your window.
            </p>
            <p>
              We offer repairs, virus removal, data-safe reinstallation of
              operating systems as well as many more services.
            </p>
            <p>Have a look at our service offerings for more.</p>
          </div>
          <div>
            <h3>Services</h3>
            <p>Collection and drop off available in Glasgow - £10 fixed fee</p>
            <table>
              <thead>
                <th>Service</th>
                <th>Description</th>
                <th>Estimated Time (Up to)</th>
                <th>Price</th>
              </thead>
              <tr>
                <td>PC Reset</td>
                <td>
                  Recommended for slow computers with no personal pictures or
                  videos needing kept.
                </td>
                <td>24 hours</td>
                <td>£35</td>
              </tr>
              <tr>
                <td>PC Reset (Data-Safe)</td>
                <td>
                  Recommended for slow computers with personal files that need
                  to be kept.
                </td>
                <td>48 hours</td>
                <td>£40</td>
              </tr>
              <tr>
                <td>PC Clean (Data-Safe)</td>
                <td>
                  Recommended for slow computers with personal files and
                  applications that need to be kept.
                </td>
                <td>48 hours</td>
                <td>£50</td>
              </tr>
              <tr>
                <td>Hard Drive Upgrade</td>
                <td>
                  Recommended for computers that are running out of space too
                  often
                </td>
                <td>24 hours</td>
                <td>£40 + Price of new hard drive</td>
              </tr>
              <tr>
                <td>Hard Drive Upgrade (Data-safe)</td>
                <td>
                  Recommended for computers that are running out of space too
                  often but data and applications need to be kept
                </td>
                <td>48 hours</td>
                <td>£50 + Cost of new hard drive, available on request</td>
              </tr>
            </table>
          </div>
        </body>
      </html>
    </div>
  );
}

export default App;
