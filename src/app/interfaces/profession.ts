import * as e from "express"

export interface Profession {
    name: ProfessionName,
    specialization: ProfessionSpecialization
}

export enum ProfessionName {
    Alchemy,
    Blacksmithing,
    Enchanting,
    Engineering,
    Herbalism,
    Inscription,
    Jewelcrafting,
    Leatherworking,
    Mining,
    Skinning,
    Tailoring    
}

export enum ProfessionSpecialization {
      PotionMaster,
      ElixirMaster,
      TransmutationMaster,
      Armorsmith,
      Weaponsmith,
      GnomishEngineering,
      GoblinEngineering,
      ElementalLeatherworking,
      DragonscaleLeatherworking,
      TribalLeatherworking,
      SpellfireTailor,
      MoonclothTailor,
      ShadoweaveTailor,
}
