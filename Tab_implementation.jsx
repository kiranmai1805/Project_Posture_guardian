import React, { useState } from 'react';

function App() {
  const [activeTab, setActiveTab] = useState("Tab 1");

  return (
    <div>
      <button onClick={() => setActiveTab("Tab 1")}>Tab 11️⃣</button>
      <button onClick={() => setActiveTab("Tab 2")}>Tab 22️⃣</button>
      <button onClick={() => setActiveTab("Tab 3")}>Tab 33️⃣</button>

      <div style={{ marginTop: '20px' }}>
        {activeTab === "Tab 1" && <p>This is content for Tab 1</p>}
        {activeTab === "Tab 2" && <p>This is content for Tab 2</p>}
        {activeTab === "Tab 3" && <p>This is content for Tab 3</p>}
      </div>
    </div>
  );
}

export default App;
