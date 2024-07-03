import React from "react";

import TeamCard from "./TeamCard";
import AWrapper from "../about/AWrapper";
import BackTeam from "./BackTeam";

const Team = () => {
  return (
    <>
      <BackTeam title="Team" />
      <section className="team padding transition ease-in duration-150">
        <div className="container grid">
          <TeamCard />
        </div>
      </section>
      <AWrapper />
    </>
  );
};

export default Team;
