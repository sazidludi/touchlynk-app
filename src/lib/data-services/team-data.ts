export interface PlayerInfo {
    id: string;
    name: string;
    position: string;
    age: number;
    nationality: string;
}

export interface RosterInfo {
    teamName: string;
    players: PlayerInfo[];
}

export interface TacticalAnalysis {
    formation: string;
    description: string;
    strengths: string[];
    weaknesses: string[];
}

export interface FullTeamData {
    rosterInfo: RosterInfo;
    tacticalAnalysis: TacticalAnalysis;
}

// this is a placeholder function that i will replace with a real sql query

export function getTeamData(teamId: string): FullTeamData {
    return {
        rosterInfo: {
          teamName: "Michigan United",
          players: [
            { id: "messi", name: "Leo Messi", position: "FW", age: 36, nationality: "Argentina" },
            { id: "ronaldo", name: "Cristiano Ronaldo", position: "FW", age: 39, nationality: "Portugal" },
            { id: "modric", name: "Luka Modrić", position: "CM", age: 38, nationality: "Croatia" },
            { id: "neuer", name: "Manuel Neuer", position: "GK", age: 37, nationality: "Germany" },
          ]
        },
        tacticalAnalysis: {
          formation: "4-3-3",
          description: "Possession-based style with high pressing and quick wing play.",
          strengths: ["Passing", "Dribbling", "Finishing"],
          weaknesses: ["Aerial duels", "Counterattacks"]
        }
      };
    }