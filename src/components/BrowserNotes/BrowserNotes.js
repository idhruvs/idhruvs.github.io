import React from "react";
import Browser from "@components/Browser";

const BrowserNotes = () => {
  return (
    <div className="browser-notes">
      <Browser only safari firefox chrome mobile>
        <span>
          {/* All the tricks in this site work best in <b>Chrome!</b> */}
        </span>
      </Browser>
      <Browser only firefox>
        <span>
          {/* Application Background is disabled in FireFox. Try in <b>Chrome!</b> */}
        </span>
      </Browser>
    </div>
  );
};

export default BrowserNotes;
