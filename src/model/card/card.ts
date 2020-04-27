export interface Card {
    cardId: string,
    cardSet: string,
    dbfId: string,
    locale: string,
    name: string,
    playerClass: string,
    text: string,
    type: string,
    mechanics?: Mechanics[],
    img?: string,
    imgGold?: string,
    faction?: string,
    cost?: number,
    attack?: number,
    health?: number,
    rarity?: string,
    flavor?: string,
    collectible?: string,
    howToGet?: string,
    howToGetGold?: string,
    race?: string,
}

export interface Mechanics {
    name: string,
}

export const initCard: Card = {
    cardId: "mock",
    cardSet: "mock",
    dbfId: "mock",
    locale: "mock",
    name: "mock",
    playerClass: "mock",
    text: "mock",
    type: "mock",
}

export enum Types {
    "Hero"="Hero",
    "Minion"="Minion",
    "Spell"="Spell",
    "Enchantment"="Enchantment",
    "Weapon"="Weapon",
    "Hero Power"="Hero Power",
}