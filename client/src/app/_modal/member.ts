import { Photo } from "./photo";

export interface Member {
    UserName: string;
    Gender: string;
    DateOfBirth: string;
    knownAs: string;
    Created: string;
    LastActive: string;
    Introduction: string;
    LookingFor: string;
    Interests: string;
    City: string;
    Country: string;
    Photos: Photo[];
  }
  