var _hsl, _hsv2rgb, _rgb, _rgb2hsl, gcd, gcdEx, getSolutionOfLinearConguenceEquation, hsv2hsl, hsv2rgb;

gcd = function(a, b) {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
};

gcdEx = function(a, b) {
  var ref, ref1, x, y;
  if (b === 0) {
    return [1, 0];
  }
  ref = gcdEx(b, a % b), x = ref[0], y = ref[1];
  return ref1 = [y, x - Math.floor(a / b) * y], x = ref1[0], y = ref1[1], ref1;
};

getSolutionOfLinearConguenceEquation = function(a, b, n) {
  var d, k, r, ref, s, x, x0;
  if (a * b === 0) {
    return false;
  }
  d = gcd(a, n);
  if (d % b === 0 && b !== 1) {
    ref = gcdEx(a, n), r = ref[0], s = ref[1];
    x0 = r * (b / d);
    return ((function() {
      var i, ref1, results;
      results = [];
      for (k = i = 0, ref1 = n; 0 <= ref1 ? i < ref1 : i > ref1; k = 0 <= ref1 ? ++i : --i) {
        if (x = x0 + k * Math.floor(n / d) > 0) {
          results.push(x);
        }
      }
      return results;
    })()).slice(0, d);
  } else {
    return [b];
  }
};

_hsv2rgb = function(arg) {
  var b, f, g, h, hi, p, q, r, ref, s, t, v;
  h = arg[0], s = arg[1], v = arg[2];
  hi = (getSolutionOfLinearConguenceEquation(1, Math.floor(h / 60), 6) || [0])[0];
  f = h / 60 - hi;
  p = v * (1 - s);
  q = v * (1 - f * s);
  t = v * (1 - (1 - f) * s);
  return ref = (function() {
    switch (hi) {
      case 0:
        return [v, t, p];
      case 1:
        return [q, v, p];
      case 2:
        return [p, v, t];
      case 3:
        return [p, q, v];
      case 4:
        return [t, p, v];
      case 5:
        return [v, p, q];
    }
  })(), r = ref[0], g = ref[1], b = ref[2], ref;
};

_rgb2hsl = function(arg) {
  var b, g, h, l, max, min, r, s;
  r = arg[0], g = arg[1], b = arg[2];
  max = Math.max(r, g, b);
  min = Math.min(r, g, b);
  h = (function() {
    switch (false) {
      case max !== min:
        return 0;
      case !(max === r && g >= b):
        return 60 * (g - b) / (max - min) + 0;
      case !(max === r && g < b):
        return 60 * (g - b) / (max - min) + 360;
      case max !== g:
        return 60 * (b - r) / (max - min) + 120;
      case max !== b:
        return 60 * (r - g) / (max - min) + 240;
    }
  })();
  l = 1 / 2 * (max + min);
  s = (function() {
    switch (false) {
      case !(l === 0 || max === min):
        return 0;
      case !((0 < l && l <= (1 / 2))):
        return (max - min) / (2 * l);
      case !(l > (1 / 2)):
        return (max - min) / (2 - 2 * l);
    }
  })();
  return [h, s, l];
};

_hsl = function(arg) {
  var h, l, s;
  h = arg[0], s = arg[1], l = arg[2];
  return "hsl(" + (h.toFixed()) + ", " + ((s * 100).toFixed()) + "%, " + ((l * 100).toFixed()) + "%)";
};

_rgb = function(arg) {
  var b, g, r;
  r = arg[0], g = arg[1], b = arg[2];
  return "rgb(" + (Math.round(r * 255)) + ", " + (Math.round(g * 255)) + ", " + (Math.round(b * 255)) + ")";
};

hsv2hsl = function(arg) {
  var h, s, v;
  h = arg[0], s = arg[1], v = arg[2];
  return _hsl(_rgb2hsl(_hsv2rgb([h, s / 100, v / 100])));
};

hsv2rgb = function(arg) {
  var h, s, v;
  h = arg[0], s = arg[1], v = arg[2];
  return _rgb(_hsv2rgb([h, s / 100, v / 100]));
};