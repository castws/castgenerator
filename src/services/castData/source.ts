import { BodyPart, Limb } from 'types';

type CastPart =
  | 'P_SLC'
  | 'P_SLWC'
  | 'P_LLC'
  | 'P_LLWC'
  | 'P_SLTS'
  | 'P_CLC'
  | 'P_SAC'
  | 'P_LAC'
  | 'P_SATS'
  | 'P_SAFS'
  | 'P_LATS'
  | 'P_LAFS'
  | 'P_CLAC'
  | 'Minerva'
  | 'Risser'
  | 'P_HS'
  | 'L_HS'
  | 'R_HS'
  | 'P_HS15'
  | 'L_HS15'
  | 'R_HS15'
  | 'P_SHS'
  | 'R_SHS'
  | 'L_SHS'
  | 'DHS'
  | 'SDHS'
  | 'P_SS'
  | 'R_SS'
  | 'L_SS'
  | 'P_Velpeau'
  | 'R_Velpeau'
  | 'L_Velpeau'
  | 'DSS'
  | 'DLLCSB'
  | 'DCLCSB'
  | 'DSLCSB';

type CastData = {
  part: CastPart;
  name: string;
  limb: Limb;
  hasSide: boolean;
  bodyPart: BodyPart;
  blockOthers: CastPart[];
  overlaps?: CastPart[];
  excludeOverlaps?: CastPart[];
};

export const castsData: CastData[] = [
  {
    part: 'P_SLC',
    name: 'SLC',
    limb: Limb.Leg,
    hasSide: true,
    bodyPart: BodyPart.Legs,
    blockOthers: [],
    excludeOverlaps: ['SDHS'],
  },
  {
    part: 'P_SLWC',
    name: 'SLWC',
    limb: Limb.Leg,
    hasSide: true,
    bodyPart: BodyPart.Legs,
    blockOthers: ['P_SLC', 'P_LLWC'],
    excludeOverlaps: ['SDHS'],
  },
  {
    part: 'P_LLC',
    name: 'LLC',
    limb: Limb.Leg,
    hasSide: true,
    bodyPart: BodyPart.Legs,
    blockOthers: ['P_SLC', 'P_CLC'],
    overlaps: ['L_HS15', 'R_HS15'],
  },
  {
    part: 'P_LLWC',
    name: 'LLWC',
    limb: Limb.Leg,
    hasSide: true,
    bodyPart: BodyPart.Legs,
    blockOthers: ['P_LLC', 'P_SLC', 'P_CLC', 'P_SLWC'],
    overlaps: ['L_HS15', 'R_HS15'],
  },
  {
    part: 'P_SLTS',
    name: 'SLC Toe Spica',
    limb: Limb.Leg,
    hasSide: true,
    bodyPart: BodyPart.Legs,
    blockOthers: ['P_SLC'],
    excludeOverlaps: ['SDHS'],
  },
  {
    part: 'P_CLC',
    name: 'CLC',
    limb: Limb.Leg,
    hasSide: true,
    bodyPart: BodyPart.Legs,
    blockOthers: [],
    overlaps: ['L_HS15', 'R_HS15'],
  },
  {
    part: 'DLLCSB',
    name: 'DLLC Spreader Bar',
    limb: Limb.Leg,
    hasSide: false,
    bodyPart: BodyPart.Legs,
    blockOthers: ['P_LLC', 'P_SLC', 'P_CLC', 'P_LLWC', 'DSLCSB', 'DCLCSB'],
    overlaps: ['P_SLWC', 'P_SLTS', 'P_HS', 'P_HS15', 'P_SHS'],
  },
  {
    part: 'DCLCSB',
    name: 'DCLC Spreader Bar',
    limb: Limb.Leg,
    hasSide: false,
    bodyPart: BodyPart.Legs,
    blockOthers: ['P_LLC', 'P_SLC', 'P_CLC', 'DLLCSB', 'DSLCSB'],
    overlaps: ['P_LLWC', 'P_SLWC', 'P_SLTS', 'P_HS', 'P_HS15', 'P_SHS'],
  },
  {
    part: 'DSLCSB',
    name: 'DSLC Spreader Bar',
    limb: Limb.Leg,
    hasSide: false,
    bodyPart: BodyPart.Legs,
    blockOthers: ['P_SLC', 'DLLCSB', 'DCLCSB'],
    overlaps: [
      'P_LLC',
      'P_LLWC',
      'P_CLC',
      'P_SLWC',
      'P_SLTS',
      'P_HS',
      'P_HS15',
    ],
    excludeOverlaps: ['SDHS'],
  },
  {
    part: 'P_SAC',
    name: 'SAC',
    limb: Limb.Arm,
    hasSide: true,
    bodyPart: BodyPart.Arms,
    blockOthers: [],
  },
  {
    part: 'P_LAC',
    name: 'LAC',
    limb: Limb.Arm,
    hasSide: true,
    bodyPart: BodyPart.Arms,
    blockOthers: ['P_SAC', 'P_CLAC', 'P_LATS', 'P_LAFS'],
  },
  {
    part: 'P_SATS',
    name: 'SATS',
    limb: Limb.Arm,
    hasSide: true,
    bodyPart: BodyPart.Arms,
    blockOthers: ['P_SAC', 'P_LATS'],
  },
  {
    part: 'P_SAFS',
    name: 'SAFS',
    limb: Limb.Arm,
    hasSide: true,
    bodyPart: BodyPart.Arms,
    blockOthers: ['P_SAC', 'P_LAFS'],
  },
  {
    part: 'P_LATS',
    name: 'LATS',
    limb: Limb.Arm,
    hasSide: true,
    bodyPart: BodyPart.Arms,
    blockOthers: ['P_SAC', 'P_LAC', 'P_CLAC', 'P_SATS', 'P_LAFS'],
  },
  {
    part: 'P_LAFS',
    name: 'LAFS',
    limb: Limb.Arm,
    hasSide: true,
    bodyPart: BodyPart.Arms,
    blockOthers: ['P_SAC', 'P_LAC', 'P_CLAC', 'P_SAFS', 'P_LATS'],
  },
  {
    part: 'P_CLAC',
    name: 'CLAC',
    limb: Limb.Arm,
    hasSide: true,
    bodyPart: BodyPart.Arms,
    blockOthers: [],
  },
  {
    part: 'Minerva',
    name: 'Minerva',
    limb: Limb.None,
    hasSide: false,
    bodyPart: BodyPart.Body,
    blockOthers: ['Risser'],
    overlaps: ['P_SS', 'P_Velpeau'],
  },
  {
    part: 'Risser',
    name: 'Risser',
    limb: Limb.None,
    hasSide: false,
    bodyPart: BodyPart.Body,
    blockOthers: [],
    overlaps: ['P_SS', 'P_Velpeau'],
  },
  {
    part: 'P_HS',
    name: 'HS',
    limb: Limb.Leg,
    hasSide: true,
    bodyPart: BodyPart.Body,
    blockOthers: ['P_SHS', 'P_LLC', 'P_SLC', 'P_CLC'],
    overlaps: ['R_HS', 'L_HS', 'R_HS15', 'L_HS15', 'R_SHS', 'L_SHS'],
  },
  {
    part: 'P_HS15',
    name: '1.5 HS',
    limb: Limb.Leg,
    hasSide: true,
    bodyPart: BodyPart.Body,
    blockOthers: ['P_SHS', 'P_LLC', 'P_SLC', 'P_CLC', 'P_HS', 'SDHS'],
    overlaps: [
      'P_LLC',
      'P_LLWC',
      'P_CLC',
      'R_HS',
      'L_HS',
      'R_HS15',
      'L_HS15',
      'R_SHS',
      'L_SHS',
    ],
  },
  {
    part: 'P_SHS',
    name: 'Short HS',
    limb: Limb.Leg,
    hasSide: true,
    bodyPart: BodyPart.Body,
    blockOthers: [],
    overlaps: ['R_HS', 'L_HS', 'R_HS15', 'L_HS15', 'R_SHS', 'L_SHS'],
  },
  {
    part: 'DHS',
    name: 'DHS',
    limb: Limb.Leg,
    hasSide: false,
    bodyPart: BodyPart.Body,
    blockOthers: [
      'P_LLC',
      'P_SLC',
      'P_CLC',
      'P_HS15',
      'P_HS',
      'DLLCSB',
      'DCLCSB',
      'DSLCSB',
    ],
    overlaps: ['P_SLWC', 'P_LLWC', 'P_SLTS'],
  },
  {
    part: 'SDHS',
    name: 'Short DHS',
    limb: Limb.Leg,
    hasSide: false,
    bodyPart: BodyPart.Body,
    blockOthers: ['P_SHS'],
    overlaps: ['P_LLC', 'P_LLWC', 'P_CLC', 'P_HS', 'P_HS15'],
    excludeOverlaps: ['DSLCSB'],
  },
  {
    part: 'P_SS',
    name: 'SS',
    limb: Limb.Arm,
    hasSide: true,
    bodyPart: BodyPart.Body,
    blockOthers: ['P_SAC', 'P_LAC', 'P_LATS', 'P_LAFS', 'P_CLAC', 'P_Velpeau'],
    overlaps: ['R_SS', 'L_SS', 'Minerva', 'Risser', 'R_Velpeau', 'L_Velpeau'],
  },
  {
    part: 'DSS',
    name: 'DSS',
    limb: Limb.Arm,
    hasSide: false,
    bodyPart: BodyPart.Body,
    blockOthers: [
      'P_SAC',
      'P_LAC',
      'P_LATS',
      'P_LAFS',
      'P_CLAC',
      'P_SS',
      'P_Velpeau',
    ],
    overlaps: ['P_SATS', 'P_SAFS'],
  },
  {
    part: 'P_Velpeau',
    name: 'Velpeau',
    limb: Limb.Arm,
    hasSide: true,
    bodyPart: BodyPart.Body,
    blockOthers: [
      'P_SAC',
      'P_LAC',
      'P_CLAC',
      'P_SATS',
      'P_SAFS',
      'P_LATS',
      'P_LAFS',
      'P_SS',
      'DSS',
    ],
    overlaps: ['R_SS', 'L_SS', 'Minerva', 'Risser', 'R_Velpeau', 'L_Velpeau'],
  },
];
