module.exports = formatVersion;

function formatVersion(version) {
  return version ? version.replace(/_/g, '.') : '';
}
