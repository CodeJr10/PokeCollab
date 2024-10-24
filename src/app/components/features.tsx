import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import React from "react";
import dark from "@/public/icons-types/dark.svg";
import dragon from "@/public/icons-types/dragon.svg";
import fairy from "@/public/icons-types/fairy.svg";
import fire from "@/public/icons-types/fire.svg";

const features = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="grid grid-flow-col grid-rows-2 grid-cols-3 gap-8">
        {/* Pokedex Card */}
        <Card>
          <CardHeader className="flex flex-col items-center">
            {/* <img
              src={dragon}
              alt="dragon icon"
              width={36}
              height={36}
              className="mb-2"
            /> */}
            <CardTitle>Pokedex</CardTitle>
            <CardDescription>
              Catch them all! Keep track of all Pokemons, their moves,
              abilities, types, items, and much more.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Explore the world of Pokémon and stay informed on their unique
              abilities and characteristics.
            </p>
          </CardContent>
        </Card>

        {/* Stay Updated Card */}
        <Card>
          <CardHeader className="flex flex-col items-center">
            {/* <img
              src={dark}
              alt="dark icon"
              width={36}
              height={36}
              className="mb-2"
            /> */}
            <CardTitle>Stay Updated</CardTitle>
            <CardDescription>
              Catch the latest Pokémon news updates all in one place.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Stay in the loop with breaking Pokémon news and updates from the
              community.
            </p>
          </CardContent>
        </Card>

        {/* Games Card */}
        <Card>
          <CardHeader className="flex flex-col items-center">
            {/* <img
              src={fire}
              alt="fire icon"
              width={36}
              height={36}
              className="mb-2"
            /> */}
            <CardTitle>Games</CardTitle>
            <CardDescription>
              Learn through guides, locations, secret tips & tricks for your
              favorite Pokémon game, and provide your own experience in the
              community.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Discover strategies and hidden gems to improve your gameplay in
              the Pokémon world.
            </p>
          </CardContent>
        </Card>

        {/* Fun Community Card */}
        <Card>
          <CardHeader className="flex flex-col items-center">
            {/* <img
              src={fairy}
              alt="fairy icon"
              width={36}
              height={36}
              className="mb-2"
            /> */}
            <CardTitle>Fun Community</CardTitle>
            <CardDescription>
              Build a community and interact with the greatest Pokémon fans
              around the world.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Join the ultimate Pokémon fan community and share your passion
              with others!
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-col items-center">
            {/* <img
              src={fairy}
              alt="fairy icon"
              width={36}
              height={36}
              className="mb-2"
            /> */}
            <CardTitle>Fun Community</CardTitle>
            <CardDescription>
              Build a community and interact with the greatest Pokémon fans
              around the world.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Join the ultimate Pokémon fan community and share your passion
              with others!
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default features;
