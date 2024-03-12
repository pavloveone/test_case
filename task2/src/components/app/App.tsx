import React from "react";
import Dropdown from "../dropdown/dropdown";

function App() {
  return (
    <div className="px-5 pt-5">
      <Dropdown
        id="navigation"
        options={[
          { label: "ACCOUNT", value: "ACCOUNT" },
          { label: "WALLET", value: "WALLET" },
          { label: "BONUSES", value: "BONUSES" },
          { label: "BETS", value: "BETS" },
          { label: "HISTORY", value: "HISTORY" },
        ]}
      />
    </div>
  );
}

export default App;
