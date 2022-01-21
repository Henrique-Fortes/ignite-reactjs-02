import { useState } from "react";

interface GenreResponseProps {
    id: number;
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
    title: string;
}

const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>({} as GenreResponseProps);

export function Header() {
    return (
        <header>
            <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
        </header>
    )
}