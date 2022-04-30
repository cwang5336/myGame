import React, { useEffect, useState } from "react";
import "./home.css";
import Nav from "./nav";



function Home() {

  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
//   const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);
  const [data5, setData5] = useState([]);
  const [search, setSearch] = useState("");

  const [data4, setData4] = useState([]);

  const getSearch = async (e) => {
    e.preventDefault();
    for (let i = 0; i < 2; i++) {
      let apiURL = `https://api.rawg.io/api/games?key=984f8b7df4bc4018b276f791760e39be&search=${search}`;
      fetch(apiURL)
        .then((response) => response.json())
        .then((json) => setData4(json["results"]))
        .catch((error) => console.log(error));

      if (data.length !== 0) {
        setIsLoading(false);
      }
    }
    document.querySelector(".search-title").style.display = "block";
  };
  
  useEffect(() => {

        let apiURL = `https://api.rawg.io/api/games?key=984f8b7df4bc4018b276f791760e39be&dates=2022-01-01,2022-05-01&platforms=18,1,7`;
    fetch(apiURL)
      .then((response) => response.json())
      .then((json) => { setData(json["results"]); setIsLoading(false)})
      .catch((error) => console.log(error));

       //show data
       console.log(data);


//        let apiURL2 = `https:api.rawg.io/api/games?key=984f8b7df4bc4018b276f791760e39be&dates=2021-01-01,2021-12-31&ordering=-added`;
//           fetch(apiURL2)
//             .then((response) => response.json())
//             .then((json) => { setData2(json["results"]); setIsLoading(false)})
//             .catch((error) => console.log(error));
      
//              //show data
//              console.log(data2);
      
             let apiURL3 = `https://api.rawg.io/api/games?dates=2022-04-29%2C2023-04-29&key=984f8b7df4bc4018b276f791760e39be&ordering=-added&page=2`;
             fetch(apiURL3)
               .then((response) => response.json())
               .then((json) => { setData3(json["results"]); setIsLoading(false)})
               .catch((error) => console.log(error));
         
                //show data
                console.log(data3);

                let apiURL5 = `https://api.rawg.io/api/games?key=984f8b7df4bc4018b276f791760e39be&dates=1990-01-01,1990-12-31&ordering=-added`;
                fetch(apiURL5)
                  .then((response) => response.json())
                  .then((json) => { setData5(json["results"]); setIsLoading(false)})
                  .catch((error) => console.log(error));
            
                   //show data
                   console.log(data5);

    if (data.length !== 0) {
      setIsLoading(false);

    }


      
  }, []);
  
  if(isLoading){
    return <h1></h1>
  }



  return (
    <div>
      
      <Nav></Nav>
      <style> {(document.body.style.backgroundColor = "#222222")} </style>
      <br />
      <br />

      <style> {document.body.style.backgroundColor = "#222222"} </style>
            <br />
            <br />

     
      <br />

      <br />
   
      <br />


      <form className="search-cont" onSubmit={getSearch} >
                <input 
                className = "searchInput"
                placeholder="Specific Video Game Name"
                    type="text"
                   
                    value={search}
                    onChange={e => setSearch(e.target.value)} />


                <button  className="search-btn" type="submit"> 
                🔍 </button>

            </form> 


            <div className="container">
        <h1 className="search-title" id="catagoryTitle">Search Results</h1>
        <div className="row">
          {
            data4.map((data4) => (
           
                <div className="card" key={data4.id}>
                  <img
                    src={`${data4.background_image}`}
                  />
                  <p id="rating" className="card-text text-center">{`${data4.rating}`}/5</p>
                  <p className="card-text font-weight-bold text-center text-white">
                    {data4.name}
                  </p>
                  {/* <p class="card-text">{`Release date: ${data.release_date}`}</p> */}
                </div>
          
            )
          )}
        
      </div>
      </div>
  

      <div className="container">
        <h1 id="catagoryTitle">Popular</h1>
        <div className="row">
          {
            data.map((data) => (
           
                <div className="card" key={data.id}>
                  <img
                    src={`${data.background_image}`}
                  />
                  <p id="rating" className="card-text text-center">{`${data.rating}`}/5</p>
                  <p className="card-text font-weight-bold text-center text-white">
                    {data.name}
                  </p>
                  {/* <p class="card-text">{`Release date: ${data.release_date}`}</p> */}
                </div>
          
            )
          )}
        
      </div>


//       <div className="container">
//         <h1 id="catagoryTitle">Biggest Games of Last Year</h1>
//         <div className="row">
//           {
//             data2.map((data2) => (
           
//                 <div className="card" key={data2.id}>
//                   <img
//                     src={`${data2.background_image}`}
//                   />
//                   <p id="rating" className="card-text text-center">{`${data2.rating}`}/5</p>
//                   <p className="card-text font-weight-bold text-center text-white">
//                     {data2.name}
//                   </p>
//                   {/* <p class="card-text">{`Release date: ${data.release_date}`}</p> */}
//                 </div>
          
//             )
//           )}
        
//       </div>
//       </div>

      <div className="container">
        <h1 id="catagoryTitle">Biggest Retro Games</h1>
        <div className="row">
          {
            data5.map((data5) => (
           
                <div className="card" key={data5.id}>
                  <img
                    src={`${data5.background_image}`}
                  />
                  <p id="rating" className="card-text text-center">{`${data5.rating}`}/5</p>
                  <p className="card-text font-weight-bold text-center text-white">
                    {data5.name}
                  </p>
                  {/* <p class="card-text">{`Release date: ${data.release_date}`}</p> */}
                </div>
          
            )
          )}
        
      </div>
      </div>

      <div className="container">
        <h1 id="catagoryTitle">Upcoming Games</h1>
        <div className="row">
          {
            data3.map((data3) => (
           
                <div className="card" key={data3.id}>
                  <img
                    src={`${data3.background_image}`}
                  />
                   <p className="card-text font-weight-bold text-center text-white">
                    {data3.name}
                   <p className="text-center text-white">Release Date: {`${data3.released}`}</p>
                  </p>
                  {/* <p class="card-text">{`Release date: ${data.release_date}`}</p> */}
                </div>
          
            )
          )}
        
      </div>
      </div>

    </div>
    </div>
  );
}

export default Home;
