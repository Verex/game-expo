/*
  Extension functions for Math class.
*/

Math.PITCH = 0;
Math.YAW = 1;
Math.ROLL = 2;
Math.X = 0;
Math.Y = 1;
Math.Z = 2;

Math.radians = function(degrees) {
  return degrees * Math.PI / 180;
}

Math.degrees = (radians) => {
  return radians * 180 / Math.PI;
}

Math.edistance = function(p1, p2) {
  return Math.sqrt(Math.pow(p1[0] - p2[0], 2) + Math.pow(p1[1] - p2[1], 2));
}

Math.randomRange = function(min, max) {
  return Math.random() * (max - min) + min;
}

Math.randInt = function(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

Math.sinCos = (sin, cos, rad) => {
  sin = Math.sin(rad);
  cos = Math.cos(rad);
}
Math.angleVectors = (angle, forward) => {
  var sr, sp, sy, cr, cp, cy;

  Math.sinCos(sp,cp,
    Math.radians(angle[Math.PITCH])
  );
  Math.sinCos(sy,cy,
    Math.radians(angle[Math.YAW])
  );

  forward[Math.X] = cp * cy;
  forward[Math.Y] = cp * sy;
  forward[Math.Z] = -sp;
};
