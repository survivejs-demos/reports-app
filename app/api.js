export default {
  getReports: getReports
}

function getReports() {
  var total = 31;
  var stats = [];
  var startDate = new Date();

  startDate.setDate(startDate.getDate() - total);

  for(var i = 0; i < total; i++) {
    var size = randint(100000, 1000000);
    var hit = randint(Math.round(size / 2), size);
    var noncacheHit = randint(0, Math.round(hit / 10));

    stats.push({
      size: size,
      hit: hit,
      noncacheHit: noncacheHit,
      cacheHit: hit - noncacheHit,
      timestamp: new Date(startDate.getTime()) // clone
    });

    startDate.setDate(startDate.getDate() + 1);
  }

  return stats;
}

function randint(min, max) {
  return parseInt(Math.random() * (max - min) + min, 10);
}