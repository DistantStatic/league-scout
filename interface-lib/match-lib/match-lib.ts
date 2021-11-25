export interface Match {
    metadata: MetadataDto,
    info: InfoDto
}

export interface MetadataDto {
    dataVersio: string,
    matchId: string,
    participants: Array<string>
}

export interface InfoDto {
    gameCreation: number,
    gameDuration: number,
    gameId: number,
    gameMode: string,
    gameName: string,
    gameStartTimestamp: number,
    gameType: string,
    gameVersion: string,
    mapId: number,
    participants: Array<ParticipantDto>,
    platformId: string,
    queueId: number,
    teams: Array<TeamDto>,
    tournamentCode: string,
}

export interface ParticipantDto {
    assists: number,
    baronKills: number,
    bountyLevel: number,
    champExperience: number,
    champLevel: number,
    champId: number,
    championName: string,
    championTransform: number,
    consumablesPurchased: number,
    damageDealtToBuildings: number,
    damageDealtToObjectives: number,
    damageDealtToturrets: number,
    damageSelfMitigated: number,
    deaths: number,
    detectorWardsPlaced: number,
    doubleKills: number,
    firstBloodAssist: boolean,
    firstBloodKill: boolean,
    firstTowerAssist: boolean,
    firstTowerKill: boolean,
    gameEndedInEarlySurrender: boolean,
    gameEndedInSurrender: boolean,
    goldEarned: number,
    goldSpent: number,
    individualPosition: string,
    inhibitorKills: number,
    inhibitorTakedowns: number,
    inhibitorsLost: number,
    item0: number,
    item1: number,
    item2: number,
    item3: number,
    item4: number,
    item5: number,
    item6: number,
    itemsPurchased: number,
    killingSprees: number,
    kills: number,
    lane: string,
    largestCriticalStrike: number,
    largestKillingSpree: number,
    largestMultiKill: number,
    magicDamageDealt: number,
    magicDatameDealtToChampions: number,
    magicDamageTaken: number,
    nuetralMinionsKills: number,
    nexusKills: number,
    nexusTakeDowns: number,
    nexusLost: number,
    objectivesStolen: number,
    objectivesStolenAssists: number,
    participantId: number,
    pentaKills: number,
    perks: PerksDto,
    physicalDamageDealt: number,
    physicalDamageDealtToChampions: number,
    physicalDamageTaken: number,
    profileIcon: number,
    puuid: string,
    quadraKills: number,
    riotIdName: string,
    riotIdTagline: string,
    role: string,
    sightWardsBoughtInGame: number,
    spell1Casts: number,
    spell2Casts: number,
    spell3Casts: number,
    spell4Casts: number,
    summoner1Casts: number,
    summoner1Id: number,
    summoner2Casts: number,
    summoner2Id: number,
    summonerId: string,
    summonerLevel: number,
    summonerName: string,
    teamEarlySurrendered: boolean,
    teamId: number,
    teamPosition: string,
    timeCCingOthers: number,
    timePlayed: number,
    totalDamageDealt: number,
    totalDamageDealtToChampions: number,
    totalDamageShieldedOnTeammates: number,
    totalDamageTaken: number,
    totalHeal: number,
    totalHealsOnTeammates: number,
    totalMinionsKilled: number,
    totalTimeCCDealt: number,
    totalTimeSpentDead: number,
    totalUnitsHealed: number,
    tripleKills: number,
    trueDamageDealt: number,
    trueDamageDealtToChampions: number,
    trueDamageTaken: number,
    turretKills: number,
    turretTakeDowns: number,
    turretsLost: number,
    unrealKills: number,
    visionScore: number,
    visionWardsBoughtInGame: number,
    wardsKilled: number,
    wardsPlaced: number,
    win: boolean
}

export interface PerksDto {
    statPerks: PerkStatsDto,
    styles: Array<PerkStyleDto>
}

export interface PerkStatsDto {
    defense: number,
    flex: number,
    offense: number
}

export interface PerkStyleDto {
    description: string,
    selections: Array<PerkStyleSelectionDto>,
    stlye: number
}

export interface PerkStyleSelectionDto {
    perk: number,
    var1: number,
    var2: number,
    var3: number
}

export interface TeamDto {
    bans: Array<BanDto>,
    objectives: ObjectivesDto,
    teamId: number,
    win: boolean
}

export interface BanDto {
    championId: number,
    pickTurn: number
}

export interface ObjectivesDto {
    baron: ObjectiveDto,
    champion: ObjectiveDto,
    dragon: ObjectiveDto,
    inhibitor: ObjectiveDto,
    riftHerald: ObjectiveDto,
    tower: ObjectiveDto
}

export interface ObjectiveDto {
    first: boolean,
    kills: number
}

export interface CurrentMatchDto {
    gameId: number,
    gameType: string,
    gameStartTime: number,
    mapId: number,
    gameLength: number,
    platformId: string,
    gameMode: string,
    bannedChampions: Array<BannedChampion>,
    gameQueueConfigId: number,
    observers: Observer,
    participants: Array<CurrentGameParticipant>
}

export interface BannedChampion {
    pickTurn: number,
    championId: number,
    teamId: number
}

export interface Observer {
    encryptionKey: string
}

export interface CurrentGameParticipant {
    championId: number,
    perks: PerksDto,
    profileIcon: number,
    bot: boolean,
    teamId: number,
    summonerName: string,
    spell1Id: number,
    spell2Id: number,
    gameCusomizationObjects: Array<GameCustomizationObject>
}

export interface GameCustomizationObject {
    category: string,
    content: string
}
