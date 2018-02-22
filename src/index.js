module.exports = function getLoveTrianglesCount(p = []) {
  count = 0;
  for (var i = 0; i < p.length; i++)
  {
    if ((p[p[p[i] - 1] - 1] - 1 == i) && (p[i] != p[p[i] - 1]) && (p[p[p[i] - 1] - 1] != p[p[i] - 1]))
    {
      count++;
    } 
  }
  return (count/3);
};