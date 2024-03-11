import { auth, signOut } from "@/auth";
import Cards from "@/components/cards/cards";
import CardsForm from "@/components/cards/cardsForm";
import CardsList from "@/data/db.json";

const SettingsPage = async () => {
  const session = await auth();
  const themes = ["Bouquet", "Fleur", "Plante", "Evénement"];
  const trashcan = true;

  session?.user.id;

  return (
    <div>
      <h1>Modification et ajout des projets</h1>
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <button type="submit">Sign out</button>
      </form>
      <div>
        <CardsForm />
      </div>
      <div>
        {CardsList.map(({ id, title }) => (
          <div key={id}>
            <Cards id={id} title={title} trashcan={trashcan} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SettingsPage;
