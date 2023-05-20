import './App.css';
import LIST from './orgList'
function App() {
  return (
    <main>
      <h1 className='page-heading'>Salesforce Demo Orgs List</h1>
      <p className="page-subheading mb-50">Find the org you need to start building</p>
      <div className='card-wrapper'>
      {LIST.map(item=>(<a className="card" href={item.link} key={item.name} target="_blank" rel="noreferrer">
        <div className='img-wrapper width20'>
          <img src="https://c1.sfdcstatic.com/content/dam/sfdc-docs/www/logos/logo-salesforce.svg" alt={`${item.name} cloud`}/>
        </div>
        <div className='width80'>
          <h2>{item.name}</h2>
          <p className='subtext'>{item.subtext}</p>
        </div>
       
      </a>))}
      </div>
      <footer>
      Made with ❤️ by <a href="https://www.linkedin.com/in/nikhilkarkra">Nikhil Karkra</a>
      </footer>
    </main>
  );
}

export default App;
