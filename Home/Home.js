import React from "react";
import HomeBanner from "./HomeBanner";
import HomeTop from "./HomeTop";
import HomeUpcomingMovies from "./HomeUpcomingMovies";
import HomeDrama from "./HomeDrama";
import HomeAction from "./HomeAction";
import HomeFantasy from "./HomeFantasy";

function Home() {
    return(
        <div>
           <HomeBanner />
           <HomeTop />
           <HomeUpcomingMovies />
           <HomeDrama />
           <HomeAction />
           <HomeFantasy />
        </div>
    )
}

export default Home;