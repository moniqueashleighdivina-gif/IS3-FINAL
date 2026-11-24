import { useState } from "react";

interface Item {
  name: string;
  cost: number;
  qty: number;
  image: string;
}

export default function ProductSelectionPage() {
  const [showDetails, setShowDetails] = useState(false);
  const [people, setPeople] = useState(30);

  const [rooms, setRooms] = useState<Item[]>([
    {
      name: "Conference Room (Capacity: 15)",
      cost: 1500,
      qty: 0,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzF7diWRIXhKeTuefv_h_KV9N6-J8kcnbwMR_cxAYHuygszCCiv63cKPw&s=10",
    },
    {
      name: "Auditorium Hall (Capacity: 200)",
      cost: 5500,
      qty: 0,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUyYEPt7QCiufNk5-eOJCLUrx05H-Gkhhyydu1DsMam1zZLjF9iKEd8i6d&s=10",
    },
    {
      name: "Presentation Room (Capacity: 50)",
      cost: 3500,
      qty: 0,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqnLXS0o_B4N9sg_3s9Openfdb2qD_YgPNa8tjGz9m1YAcbMye5Hkgoek&s=10",
    },
    {
      name: "Large Meeting Room (Capacity: 10)",
      cost: 1000,
      qty: 0,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJPLipnnz_eI4yAarEz2Wj8GEGPs-z0TCAtVrV08kv_ArtzN8lRHli4tk&s=10",
    },
    {

      name: "Small Meeting Room (Capacity: 5)",
      cost: 800,
      qty: 0,
      image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=600&q=80",
    },
  ]);

  const [addons, setAddons] = useState<Item[]>([
    {
      name: "Projectors",
      cost: 200,
      qty: 0,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0xFAy0I5MmqifPVgzuEqX30tzoNTwHj_avMlBbSmYrg&s=10",
    },
    {
      name: "Speaker",
      cost: 35,
      qty: 0,
      image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Microphones",
      cost: 45,
      qty: 0,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaK92y8C7GJj_tf0HUXet0bz2m-nsrezxHOPe8TmIY8Q&s=10",
    },
    {
      name: "Whiteboards",
      cost: 80,
      qty: 0,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVpihC0xt9NmulefgNUJh3A0XwZwSA0-TZ5N_KTJcLi1zK9xGM7vq_mgc&s=10",
    },
  ]);

  const [meals, setMeals] = useState([
    { name: "Breakfast", cost: 50, selected: false },
    { name: "High Tea", cost: 25, selected: false },
    { name: "Lunch", cost: 65, selected: false },
    { name: "Dinner", cost: 70, selected: false },
  ]);

  const updateQty = (
    list: Item[],
    setList: React.Dispatch<React.SetStateAction<Item[]>>,
    index: number,
    delta: number
  ) => {
    const updated = [...list];
    updated[index].qty = Math.max(0, updated[index].qty + delta);
    setList(updated);
  };

  const roomTotal = rooms.reduce((sum, r) => sum + r.cost * r.qty, 0);
  const addonTotal = addons.reduce((sum, a) => sum + a.cost * a.qty, 0);
  const mealTotal = meals.reduce((sum, m) => (m.selected ? sum + m.cost * people : sum), 0);
  const grandTotal = roomTotal + addonTotal + mealTotal;

  return (
    <div className="planner-page">
      <header className="navbar">
        <strong>Conference Expense Planner</strong>
        <nav className="nav-links">
          <a href="#venue">Venue</a>
          <a href="#addons">Add-ons</a>
          <a href="#meals">Meals</a>
          <button className="details-btn" onClick={() => setShowDetails(!showDetails)}>
            {showDetails ? "Hide Details" : "Show Details"}
          </button>
        </nav>
      </header>

      <main className="planner-content">
        {showDetails && (
          <div className="modal-overlay">
            <div className="modal-box">
              <h2>TOTAL COST FOR THE EVENT: ${grandTotal}</h2>
              <table className="summary-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Unit Cost</th>
                    <th>Quantity</th>
                    <th>Total Cost</th>
                  </tr>
                </thead>
                <tbody>
                  {rooms.filter((r) => r.qty > 0).map((r) => (
                    <tr key={r.name}>
                      <td>{r.name}</td>
                      <td>${r.cost}</td>
                      <td>{r.qty}</td>
                      <td>${r.cost * r.qty}</td>
                    </tr>
                  ))}
                  {addons.filter((a) => a.qty > 0).map((a) => (
                    <tr key={a.name}>
                      <td>{a.name}</td>
                      <td>${a.cost}</td>
                      <td>{a.qty}</td>
                      <td>${a.cost * a.qty}</td>
                    </tr>
                  ))}
                  {meals.filter((m) => m.selected).map((m) => (
                    <tr key={m.name}>
                      <td>{m.name}</td>
                      <td>${m.cost}</td>
                      <td>For {people} people</td>
                      <td>${m.cost * people}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <button className="close-btn" onClick={() => setShowDetails(false)}>
                Close
              </button>
            </div>
          </div>
        )}

        <section id="venue" className="section-block">
          <h2 className="section-header">Venue Room Selection</h2>
          <div className="card-grid">
            {rooms.map((room, i) => (
              <div className="item-card" key={room.name}>
                <img className="item-image" src={room.image} alt={room.name} loading="lazy" />
                <h4>{room.name}</h4>
                <p>${room.cost}</p>
                <div className="qty-controls">
                  <button onClick={() => updateQty(rooms, setRooms, i, -1)}>-</button>
                  <span>{room.qty}</span>
                  <button onClick={() => updateQty(rooms, setRooms, i, 1)}>+</button>
                </div>
              </div>
            ))}
          </div>
          <div className="subtotal-box">Total Cost: ${roomTotal}</div>
        </section>

        <section id="addons" className="section-block">
          <h2 className="section-header">Add-ons Selection</h2>
          <div className="card-grid">
            {addons.map((addon, i) => (
              <div className="item-card" key={addon.name}>
                <img className="item-image" src={addon.image} alt={addon.name} loading="lazy" />
                <h4>{addon.name}</h4>
                <p>${addon.cost}</p>
                <div className="qty-controls">
                  <button onClick={() => updateQty(addons, setAddons, i, -1)}>-</button>
                  <span>{addon.qty}</span>
                  <button onClick={() => updateQty(addons, setAddons, i, 1)}>+</button>
                </div>
              </div>
            ))}
          </div>
          <div className="subtotal-box">Total Cost: ${addonTotal}</div>
        </section>

        <section id="meals" className="section-block">
          <h2 className="section-header">Meals Selection</h2>
          <div className="people-input">
            <label>
              Number of People:{" "}
              <input
                type="number"
                min={1}
                value={people}
                onChange={(e) => setPeople(Number(e.target.value))}
              />
            </label>
          </div>
          <div className="meals-grid">
            {meals.map((meal, i) => (
              <label className="meal-card" key={meal.name}>
                <input
                  type="checkbox"
                  checked={meal.selected}
                  onChange={() => {
                    const updated = [...meals];
                    updated[i].selected = !updated[i].selected;
                    setMeals(updated);
                  }}
                />
                <span>{meal.name} (${meal.cost})</span>
              </label>
            ))}
          </div>
          <div className="subtotal-box">Total Cost: ${mealTotal}</div>
        </section>
      </main>
    </div>
  );
}

