module.exports = [
  ['iPhone', /iPhone;/i],
  ['Macintosh', /Macintosh;/i],
  ['iPad', /iPad;/i],
  ['iPod', /iPod(?: touch)?;/i, {type: 'tablet'}],
  ['Huawei', /Build\/(?:HONOR|HUAWEI)[^()/;]+/i, {type: 'phone'}],
];
