import "./Category.css";

function Category({ setScreen, selectedCategory, setSelectedCategory }) {
  const categories = [
    "Database",
    "Web Development",
    "Programming",
    "Networking",
    "Cloud",
    "Cyber Security",
    "AI & ML",
  ];

  const handleContinue = () => {
    if (selectedCategory === "") {
      alert("Please select a category.");
      return;
    }

    setScreen("difficulty");
  };

  return (
    <div className="category-container">
      <div className="category-card">
        <h1>Choose Category</h1>

        <div className="category-list">
          {categories.map((category) => (
            <button
              key={category}
              className={
                selectedCategory === category
                  ? "category-btn active"
                  : "category-btn"
              }
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <button className="continue-btn" onClick={handleContinue}>
          Continue
        </button>
      </div>
    </div>
  );
}

export default Category;