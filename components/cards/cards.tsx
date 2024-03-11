"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { FaTrashCan } from "react-icons/fa6";

interface CardsProps {
  id: string;
  title: string;
  trashcan: boolean;
}

function Cards({ id, title, trashcan }: CardsProps) {
  return (
    <div>
      <Card>
        <CardContent>
          <p>Image de la card{title}</p>
          <p>Titre de la card</p>
          <p>Description de la card{id}</p>
        </CardContent>
        {trashcan && (
          <CardFooter>
            <Button variant="destructive">
              <FaTrashCan />
            </Button>
          </CardFooter>
        )}
      </Card>
    </div>
  );
}

export default Cards;
