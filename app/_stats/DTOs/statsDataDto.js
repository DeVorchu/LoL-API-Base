


class PlayerStasDto{

    // constructor(stats) {
    //     this.name = stats.name
    //     this.championTopPick = stats.championTopPick
    //     this.kills = stats.kills
    //     this.assists = stats.assists
    //     this.deaths = stats.deaths
    //     this.creepScore = stats.creepScore
    //     this.gold = stats.gold
    //     this.visionScore = stats.visionScore
    //     this.placedWards = stats.placedWards
    //     this.placedControlWards = stats.placedControlWards
    //     this.drakes = stats.drakes
    //     this.barons = stats.barons
    //     this.towers = stats.towers
    //     this.killedWards = stats.killedWards
    //     this.dbKills = stats.dbKills
    //     this.trKills = stats.trKills
    //     this.qdKills = stats.qdKills
    //     this.ptKills = stats.ptKills
    //     this.experience = stats.experience
    //     this.qSpell = stats.qSpell
    //     this.wSpell = stats.wSpell
    //     this.eSpell = stats.eSpell
    //     this.rSpell = stats.rSpell
    //   }

    constructor() {
        this.name = ''
        this.championTopPick = ''
        this.creepScorePerGame = 0
        this.visionScorePerGame = 0
        this.championQue = []
        this.gamesPlayed = 0
        this.kills = 0
        this.assists = 0
        this.deaths = 0
        this.creepScore = 0
        this.gold = 0
        this.visionScore = 0
        this.placedWards = 0
        this.placedControlWards = 0
        this.drakes = 0
        this.barons = 0
        this.towers = 0
        this.killedWards = 0
        this.dbKills = 0
        this.trKills = 0
        this.qdKills = 0
        this.ptKills = 0
        this.experience = 0
        this.qSpell = 0
        this.wSpell = 0
        this.eSpell = 0
        this.rSpell = 0
      }
}

export default PlayerStasDto