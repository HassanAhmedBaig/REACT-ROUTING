import React, { useDebugValue } from "react";
import {
  BrowserRouter as Router,  //imported as an alias 
  Routes, //then need routes
  Route, //in routes we have to assign route
  Link,
  Outlet,
  useParams  //to get slug from routes(url)
} from "react-router-dom";

export default function App() {
  return (
    <Router>

{/* //its like we created a navbar above all */}
      <nav>
        <Link to="/">Home</Link>
        <Link to="/launch">Launch</Link>  
      </nav>

{/* now we want to have launch if we go deep down in webpage on every page
insted of writing it every time we will reuse it with nested routing */}
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="launch" element={<Launch />}>  
        {/* not closing it ^^ */}

          <Route path="/" element={<LaunchIndex />} />
          {/* now this / ^^ will inherit launch as its homepage  and closed it since this child ends here */}

          <Route path=":slug" element={<LaunchShoe />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      
      </Routes>


    </Router>
  );
}

function NotFound() {
  return (
    <div>
      <h1>Not found!</h1>
      <p>Sorry your page was not found!</p>
    </div>
  );
}

function Home() {
  return (
    <div>
      <h1>Welcome Home!</h1>
    </div>
  );
}

function Launch() {
  return (
    <div>
      <h1>Launch</h1>

      <Outlet />
      {/* ^^  to tell parent, to show the child in it */}
    </div>
  );
}

function LaunchIndex() {
  // console.log(Object.entries(shoes))
  // console.log(Object.entries(shoes)) it converts object entries into array having elements 
//   containg 2 parts key:useDebugValuewe get key as slug then  we destructure
// the properties (name,img) as {name,img} from key like "air-jordan-3-valor-blue"
  return (
    <ul>
      {Object.entries(shoes).map(([slug, { name, img }]) => (
       
        <li key={slug}>
          <Link to={`/launch/${slug}`}>
           {/* linking to other child of launch */}
            <h2>{name}</h2>
            
            <img src={img} alt={name} />
          </Link>
        </li>
      ))}
    </ul>
  );
}

function LaunchShoe() {
  const { slug } = useParams(); //getting from url
  //  console.log(shoes) shoes object
  const shoe = shoes[slug];
 
  if (!shoe) {
    return <h2>Not Found!</h2>;
  }

  const { name, img } = shoe;

  return (
    <div>
      <h2>{name}</h2>
      <img src={img} alt={name} />
    </div>
  );
}

const shoes = {
  "air-jordan-3-valor-blue": {
    name: "VALOUR BLUE",
    img:
      "https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"
  },
  "jordan-mars-270-london": {
    name: "JORDAN MARS 270 LONDON",
    img:
      "https://secure-images.nike.com/is/image/DotCom/CV3042_001_A_PREM?$SNKRS_COVER_WD$&align=0,1"
  },
  "air-jordan-1-zoom-racer-blue": {
    name: "RACER BLUE",
    img:
      "https://secure-images.nike.com/is/image/DotCom/CK6637_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"
  }
};
