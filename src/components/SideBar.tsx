import { ReactComponentElement } from "react";
import { GenreResponseProps } from "../App";
import { Button } from "./Button";

interface SideBarProps {
  genres: GenreResponseProps[];
  selectedGenreId: number;
  changeGenreId: (id: number) => void;
}

export function SideBar({
  genres,
  selectedGenreId,
  changeGenreId,
}: SideBarProps) {
  function handleClickButton(id: number) {
    changeGenreId(id);
  }
  return (
    <nav className="sidebar">
      <span>
        Watch<p>Me</p>
      </span>

      <div className="buttons-container">
        {genres.map((genre) => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  );
}
