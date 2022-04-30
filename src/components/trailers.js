
import React, { useState } from "react";
import './home.css';
import Nav from "./nav";
import './trailers.css';




function Trailer() {
    let array = [];

    const [search, setSearch] = useState("");
    // const [isLoading, setIsLoading] = useState(true);
    const [vid, setVid] = useState("");
    const [title, setTitle] = useState("");
    const [releaseDate, setReleasedate] = useState("");
    const [rating, setRating] = useState("");




    const getTrailer = async e => {

        e.preventDefault();
        let apiURL = `https://api.rawg.io/api/games?key=984f8b7df4bc4018b276f791760e39be&search=${search}`

        const response = await fetch(apiURL);
        const json = await response.json();

        console.log(json.results);

        setTitle((json.results[0].name));
        setReleasedate((json.results[0].released));
        setRating((json.results[0].rating));



        document.body.style.backgroundImage = `url(${json.results[0].background_image})`;



        for (let i = 0; i < json.results.length; i++) {
            array[i] = json.results[i].id;
        }


        let GameId = array[0];

        console.log(GameId);

        let apiURL2 = `https://api.rawg.io/api/games/${GameId}/movies?key=984f8b7df4bc4018b276f791760e39be`

        const response2 = await fetch(apiURL2);
        const json2 = await response2.json();

        // setVid(json2.results[0].data.);

        setVid(" ");

        setVid(json2.results[0].data.max);

        console.log(json2.results[0]);

        console.log(vid);


        document.querySelector(".video").style.display = "block";
        document.querySelector(".cont-trailer").style.display = "block";
    }





    return (
        <div>
            <Nav></Nav>

            <style > {document.body.style.backgroundColor = "#222222" } </style>
            <br />


            <form className="search-cont" onSubmit={getTrailer}>
                <input placeholder="Specific Video Game Name"
                    type="text"
                    className="searchInput"
                    value={search}
                    onChange={e => setSearch(e.target.value)} />


                <button className="search-btn" type="submit"> 🔍 </button>

            </form>

            {/* <div class="panels"> 
             <div class="panel"> */}
            <br />
            <br />
            <br />
            <br />

            <br />

            <br />


            <div className="video"> <iframe width="680" height="500" src={vid}></iframe> </div>



            <div className="cont-trailer">
                <h2 className="video-text font-weight-bold">{title}</h2>
                <h6 className="video-text">{`User Rating: ${rating}`}</h6>
                <h6 className="video-text">{`Release Date: ${releaseDate}`}</h6>

                

            </div>


        </div >


    );
}

export default Trailer;
