export enum Colors {
  White = '#fff',
  Black = '#0C0C0C',
  Red = '#f90a0a',
  Yellow = '#D8870E',
  Green = '#146200',
  Blue = '#007575',
  Pink = '#72006D',
  Aqua = '#446059',
  Gray = '#e7e7e7e6',
  LightGrey = '#cbcbcb',
  DarkRed = '#cb000080',
  BlackTransparent = '#000000e6',
}

export interface IStatusColor {
  left: Colors,
  right: Colors,
  main: Colors,
}
