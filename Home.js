import React from "react";
import HomeTop from "./HomeTop";
import HomeDrama from "./HomeDrama";
import HomeAction from "./HomeAction";
import HomeFantasy from "./HomeFantasy";

function Home() {
    return(
        <div>
            <HomeTop />
            <HomeDrama />
            <HomeAction />
            <HomeFantasy />
        </div>
    )
}

export default Home;