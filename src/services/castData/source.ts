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
  | 'P_HS15'
  | 'P_SHS'
  | 'DHS'
  | 'SDHS'
  | 'P_SS'
  | 'P_Velpeau'
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
};

export const castsData: CastData[] = [
  {
    part: 'P_SLC',
    name: 'SLC',
    limb: Limb.Leg,
    hasSide: true,
    bodyPart: BodyPart.Legs,
    blockOthers: [],
  },
  {
    part: 'P_SLWC',
    name: 'SLWC',
    limb: Limb.Leg,
    hasSide: true,
    bodyPart: BodyPart.Legs,
    blockOthers: ['P_SLC', 'P_LLWC'],
  },
  {
    part: 'P_LLC',
    name: 'LLC',
    limb: Limb.Leg,
    hasSide: true,
    bodyPart: BodyPart.Legs,
    blockOthers: ['P_SLC', 'P_CLC'],
  },
  {
    part: 'P_LLWC',
    name: 'LLWC',
    limb: Limb.Leg,
    hasSide: true,
    bodyPart: BodyPart.Legs,
    blockOthers: ['P_LLC', 'P_SLC', 'P_CLC', 'P_SLWC'],
  },
  {
    part: 'P_SLTS',
    name: 'SLC Toe Spica',
    limb: Limb.Leg,
    hasSide: true,
    bodyPart: BodyPart.Legs,
    blockOthers: ['P_SLC'],
  },
  {
    part: 'P_CLC',
    name: 'CLC',
    limb: Limb.Leg,
    hasSide: true,
    bodyPart: BodyPart.Legs,
    blockOthers: [],
  },
  {
    part: 'DLLCSB',
    name: 'DLLC Spreader Bar',
    limb: Limb.Leg,
    hasSide: false,
    bodyPart: BodyPart.Legs,
    blockOthers: ['P_LLC', 'P_SLC', 'P_CLC', 'P_LLWC', 'DSLCSB', 'DCLCSB'],
  },
  {
    part: 'DCLCSB',
    name: 'DCLC Spreader Bar',
    limb: Limb.Leg,
    hasSide: false,
    bodyPart: BodyPart.Legs,
    blockOthers: ['P_LLC', 'P_SLC', 'P_CLC', 'DLLCSB', 'DSLCSB'],
  },
  {
    part: 'DSLCSB',
    name: 'DSLC Spreader Bar',
    limb: Limb.Leg,
    hasSide: false,
    bodyPart: BodyPart.Legs,
    blockOthers: ['P_SLC', 'DLLCSB', 'DCLCSB'],
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
  },
  {
    part: 'Risser',
    name: 'Risser',
    limb: Limb.None,
    hasSide: false,
    bodyPart: BodyPart.Body,
    blockOthers: [],
  },
  {
    part: 'P_HS',
    name: 'HS',
    limb: Limb.Leg,
    hasSide: true,
    bodyPart: BodyPart.Body,
    blockOthers: ['P_SHS', 'P_LLC', 'P_SLC', 'P_CLC'],
  },
  {
    part: 'P_HS15',
    name: '1.5 HS',
    limb: Limb.Leg,
    hasSide: true,
    bodyPart: BodyPart.Body,
    blockOthers: ['P_SHS', 'P_LLC', 'P_SLC', 'P_CLC', 'P_HS', 'SDHS'],
  },
  {
    part: 'P_SHS',
    name: 'SHS',
    limb: Limb.Leg,
    hasSide: true,
    bodyPart: BodyPart.Body,
    blockOthers: [],
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
  },
  {
    part: 'SDHS',
    name: 'SDHS',
    limb: Limb.Leg,
    hasSide: false,
    bodyPart: BodyPart.Body,
    blockOthers: ['P_SHS'],
  },
  {
    part: 'P_SS',
    name: 'SS',
    limb: Limb.Arm,
    hasSide: true,
    bodyPart: BodyPart.Body,
    blockOthers: ['P_SAC', 'P_LAC', 'P_LATS', 'P_LAFS', 'P_CLAC', 'P_Velpeau'],
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
  },
];
