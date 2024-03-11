"use client";
import Cards from "@/components/cards/cards";
import CardsList from "@/data/db.json";

function CreationPage() {
  const trashcan = false;
  return (
    <div>
      <div>
        {CardsList.map(({ id, title }) => (
          <div key={id}>
            <Cards id={id} title={title} trashcan={trashcan} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CreationPage;
