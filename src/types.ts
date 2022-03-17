export const enum Side {
  Right = 'right',
  Left = 'left',
  NoSide = 'noSide',
}

export const enum Limb {
  Leg = 'leg',
  Arm = 'arm',
  None = 'none',
}

export enum BodyPart {
  Legs = 'legs',
  Arms = 'arms',
  Body = 'body',
}

export type Cast =
  | 'L_SLC'
  | 'L_LLC'
  | 'L_LLWC'
  | 'L_SLTS'
  | 'L_LLTS'
  | 'L_CLC'
  | 'L_SAC'
  | 'L_LAC'
  | 'L_SATS'
  | 'L_SAFS'
  | 'L_LATS'
  | 'L_LAFS'
  | 'L_CLAC'
  | 'L_HS'
  | 'L_HS15'
  | 'L_SHS'
  | 'L_SS'
  | 'L_Velpeau'
  | 'R_SLC'
  | 'R_LLC'
  | 'R_LLWC'
  | 'R_SLTS'
  | 'R_LLTS'
  | 'R_LLC45'
  | 'R_LLC90'
  | 'R_CLC'
  | 'R_SAC'
  | 'R_LAC'
  | 'R_SATS'
  | 'R_SAFS'
  | 'R_LATS'
  | 'R_LAFS'
  | 'R_CLAC'
  | 'R_HS'
  | 'R_HS15'
  | 'R_SHS'
  | 'R_SS'
  | 'R_Velpeau'
  | 'Minerva'
  | 'Risser'
  | 'DHS'
  | 'SDHS'
  | 'DSS'
  | 'DLLCSB'
  | 'DCLCSB'
  | 'DSLCSB';

export type CastOption = {
  part: Cast;
  name: string;
  bodyPart: BodyPart;
  limb: Limb;
  side: Side;
  blockOthers: Cast[];
  overlaps?: Cast[];
  excludeOverlaps?: Cast[];
  isEnabled: boolean; // Selected by the user
  isSelected: boolean; // Chosen by the app
  isBlocked: boolean;
};

export type SideSection = {
  name: string;
  isActive: boolean;
  casts: CastOption[];
};

export type BodySection = {
  name: string;
  isActive: boolean;
  side: Record<Side, SideSection>;
};

export type Config = {
  allowOverlap: boolean;
};
