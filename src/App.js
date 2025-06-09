import { useState } from "react";
import StarRating from "./components/StarRating";
import Dialog from "./components/Dialog";

function App() {
  const [showDialog, setShowDialog] = useState(false);

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const toggleDialog = () => {
    setIsDialogOpen(!isDialogOpen);
  };

  return (
    <div className="app-container">
      <h1>Star Rating System</h1>
      <StarRating />
      <button className="toggle-btn" onClick={toggleDialog}>
        {isDialogOpen ? "Hide Dialog" : "Show Dialog"}
      </button>
      {isDialogOpen && <Dialog text="This is a dialog box" onClose={toggleDialog} />}
    </div>
  );
}

export default App;
