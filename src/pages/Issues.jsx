import React, { useState } from "react";
import IssuesList from "../components/IssuesList";
import LabelList from "../components/LabelList";

export default function Issues() {
  const [selectedLabels, setSelectedLabels] = useState([]);

  return (
    <div>
      <main>
        <section>
          <h1>Issues</h1>
          <IssuesList selectedLabels={selectedLabels} />
        </section>
        <aside>
          <LabelList
            selectedLabels={selectedLabels}
            toggle={(labelName) =>
              setSelectedLabels((currentlySelected) => {
                if (currentlySelected.includes(labelName))
                  return currentlySelected.filter((name) => name !== labelName);
                return currentlySelected.concat([labelName]);
              })
            }
          />
        </aside>
      </main>
    </div>
  );
}
